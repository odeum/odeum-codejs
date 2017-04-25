import React, { Component } from 'react';
// import DrawerWrapper from '../../../components/Home/Drawer/DrawerWrapper'
import DrawerItem from '../../../components/Home/Drawer/DrawerItem'
import PropTypes from 'prop-types'
import * as s from '../../../components/Home/styled/DrawerStyle'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
 
import * as GlobalActions from '../../../store/actions/global'



class DrawerContainer extends Component {
    render() {
    //INFO Just a demo of the Scenes

    //REMOVE this unused variable
    // var Scenes=
    var _this = this.props;
        return (
            <s.DrawerWrapperDiv>
                {/*<DrawerItem name='Dashboard' location='/scenes/dashboard' onPush={this.props.onPush}>
                <div>Dashboard Test</div>
                <div>Test2</div>
                    {/*<Dashboard/>*/}
                {/*</DrawerItem>
                <DrawerItem name='Test' location='/users/Test' onPush={this.props.onPush}>
                <div>Test</div>
                <div></div>
                </DrawerItem>*/}
                
                   {this.props.scenes.map((scene,index)=>(<DrawerItem name={scene.name} location={scene.location} onPush={_this.changeScene} key={index}/>))}
                {/*<DrawerWrapper ScenesDrawer={Scenes}/>*/}
            </s.DrawerWrapperDiv>
        );
    }
}
DrawerContainer.propTypes = {
       changeScene: PropTypes.func.isRequired,
       scenes:PropTypes.array
};
const mapStateToProps = (state) =>({
     scenes: state.global.scenes
})
function mapDispatchToProps(dispatch){
    return bindActionCreators(GlobalActions,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(DrawerContainer);