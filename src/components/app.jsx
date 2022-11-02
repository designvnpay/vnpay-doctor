import React, { useState, useEffect } from 'react';

import {
  f7,
  f7ready,
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from 'framework7-react';


import routes from '../js/routes';
import store from '../js/store';

const MyApp = () => {
  // Login screen demo data
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Framework7 Parameters
  const f7params = {
    name: 'VNPAY Doctor', // App name
      theme: 'ios', // Automatic theme detection



      // App store
      store: store,
      // App routes
      routes: routes,
      // Register service worker (only on production build)
      serviceWorker: process.env.NODE_ENV ==='production' ? {
        path: '/service-worker.js',
      } : {},
  };
  const alertLoginData = () => {
    f7.dialog.alert('Username: ' + username + '<br>Password: ' + password, () => {
      f7.loginScreen.close();
    });
  }
  f7ready(() => {


    // Call F7 APIs here
  });

  return (
    <App { ...f7params } >

        {/* Views/Tabs container */}
        <Views tabs className="safe-areas">
          {/* Tabbar for switching views-tabs */}          

          {/* 4 Tabbar import*/}
          <View id="view-home" main tab tabActive url="/" />

          {/* schedule View */}
          <View id="view-schedule" name="schedule" tab url="/schedule/" />

          {/* favourite View */}
          <View id="view-favourite" name="favourite" tab url="/favourite/" />

          {/* phonebook View */}
          <View id="view-phonebook" name="phonebook" tab url="/phonebook/" />

        </Views>
    </App>
  )
}
export default MyApp;