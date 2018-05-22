import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import { addListener } from '../utils/redux';

import LoginScreen from '../components/LoginScreen';
import MainScreen from '../components/MainScreen';
import ProfileScreen from '../components/ProfileScreen';

//antd design mobile 模板
import AntdMobileDesign from '../components/antdDesignMobile/AntdMobileDesign';  
import ButtonAntd from '../components/antdDesignMobile/ButtonAntd'; 


export const AppNavigator = createStackNavigator({
  Login: { screen: LoginScreen },
  Main: { screen: MainScreen },
  Profile: { screen: ProfileScreen },

  //antd-designed-mobile
  AntdMobileDesign: { screen: AntdMobileDesign },
  ButtonAntd: { screen: ButtonAntd },

});

class AppWithNavigationState extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  render() {
    const { dispatch, nav } = this.props;
    return (
      <AppNavigator
        navigation={{
          dispatch,
          state: nav,
          addListener,
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
