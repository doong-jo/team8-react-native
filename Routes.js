import React, { Component } from 'react';
import { Router, Scene, ActionConst } from 'react-native-router-flux';
import Home from './Home';
import Pattern from './Pattern';
import Group from './Group';
import Accident from './Accident';
import Login from './Login';
import Discover from './Discover';


const Routes = () => (
		<Router>
			<Scene key = "root" navBarButtonColor='#003300' navigationBarStyle={{backgroundColor : '#011a30'}} barButtonIconStyle={{tintColor: 'white'}}>
		  		<Scene key = "login" component = {Login} navTransparent />
		  		<Scene key = "discover" component = {Discover} navTransparent />
				<Scene key = "home" component = {Home} navTransparent type = {ActionConst.RESET} initial = {true}/>
			 	<Scene key = "pattern" component = {Pattern} title = "Light & Pattern" navBarButtonColor='#FFFFFF' titleStyle={{color: 'white'}} />
			 	<Scene key = "group" component = {Group} title = "Group" navBarButtonColor='#FFFFFF' titleStyle={{color: 'white'}} />
			 	<Scene key = "accident" component = {Accident} title = "Accident" navBarButtonColor='#FFFFFF' titleStyle={{color: 'white'}} />
	      </Scene>
	   </Router>
   );

export default Routes
