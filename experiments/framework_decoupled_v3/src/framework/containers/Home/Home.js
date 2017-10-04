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
	async componentWillMount() {
		this.props.onMount()
		if (this.props.loggedIn !== 'valid') {
			await this.props.auth()
		}
		//Redirect only if logged in
		if (this.props.location.pathname === '/' && this.props.loggedIn === 'valid') {
			this.props.Redirect()
		}
	}

	async componentWillUpdate(nextProps, nextState) {
		//Header Redirect
		if (nextProps.location.pathname === '/' && nextProps.loggedIn === 'valid') {
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
		await this.props.login(data)
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				{this.props.loggedIn === 'valid' ? this.renderHome() : this.props.loggedIn === 'notvalid' ? this.renderLogin() : <div/>}
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
	loggedIn: state.eplan.authObj ? state.eplan.authObj.loginState  : 'active',
	errorLogin: state.eplan.loginErrorMessage,
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
