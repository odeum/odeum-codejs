//React
import React, { Component } from 'react'
import PropTypes from 'prop-types'
//Styles
import { HomeDiv, WorkspaceContainer } from '../styles/AppStyles'
import theme from 'framework/assets/theme'
import { ThemeProvider } from 'styled-components'

//Header+Menu
import HeaderContainer from '../Header/Header'
import MenuContainer from '../Menu/Menu'

import TabsContainer from '../Tabs/TabsContainer'
import FooterContainer from '../Footer/Footer'

//Redux+Router
// import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

//Login
import LoginContainer from 'framework/containers/Login/Login'

//Loader
// import SmoothLoader from 'framework/components/Widgets/SmoothLoader/SmoothLoader'

//REFACTOR
import { getAppendixCfg, doMyLogin, doCookieLogin } from 'app/store/modules/eplan'

class Home extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loggedIn: null
		}
	}


	async componentWillMount() {
		this.props.onMount()
		this.setState({ loggedIn: await this.props.auth() })
		// console.log('-----log-----')
		// console.log(log)
		// if (log === null) { 

		// }
		//Redirect only if logged in
		if (this.props.location.pathname === '/' && this.props.loggedIn === true) {
			this.props.Redirect()
		}
	}
	componentDidMount = async () => {
		// var loggedIn = await this.props.auth()
		// console.log(loggedIn)
		// if (loggedIn === null) { this.setState({ loggedIn: false }) }
		// if (loggedIn.isLoggedIn === 1)
		// 	this.setState({ loggedIn: true })
		// else
		// 	this.setState({ loggedIn: false })
	}

	async componentWillUpdate(nextProps, nextState) {
		//Header Redirect
		if (nextProps.location.pathname === '/' && nextProps.loggedIn === true) {
			this.props.Redirect()
		}

	}
	renderHome = () => {
		return <HomeDiv>
			<HeaderContainer />
			<div style={{ display: 'flex', flex: 1, height: '100%', overflow: 'auto' }}>
				<MenuContainer />
				<WorkspaceContainer>
					<TabsContainer style={{ border: 'solid 1px blue' }} instanceID={this.props.activeScene} />
					{this.props.children}
				</WorkspaceContainer>
			</div>
			<FooterContainer />
		</HomeDiv>
	}
	renderLogin = () => {
		return <LoginContainer handleLogin={this.handleLogin} errorLogin={this.props.errorLogin} />
	}

	handleLogin = async (data) => {
		var login = await this.props.login(data)
		this.setState({ loggedIn: login })
	}
	render() {
		return (
			<ThemeProvider theme={theme}>
				{this.state.loggedIn === 'token_missing' ? this.renderLogin() : this.renderHome()}
			</ThemeProvider>
		)

	}
}

Home.propTypes = {
	activeScene: PropTypes.string.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	activeScene: state.tabReducer.activeScene,
	authObj: state.eplan.authObj,
	loggedIn: (state.eplan.authObj ? (state.eplan.authObj.isLoggedIn === 1 ? true : false) : false),
	errorLogin: state.eplan.loginErrorMessage,
	//loggedIn: true
})

function mapDispatchToProps(dispatch) {
	return {
		onMount: () => {
			dispatch(getAppendixCfg())
			// dispatch(replace('/eplan/list'))
		},
		login: async (data) => {
			dispatch(await doMyLogin(data))
		},
		auth: async () => {
			return dispatch(await doCookieLogin())
		},
		Redirect: () => {
			dispatch(push('/eplan/list'))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
