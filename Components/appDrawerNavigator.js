import React from 'react'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {AppTabNavigator} from './AppTabNavigator.js'
import CustomSideBar from './customSideBar.js'
import Setting from '../Screens/Setting.js'

export const AppDrawerNavigator = createDrawerNavigator({
	Home:{screen:AppTabNavigator},
	Setting:{screen:Setting}
},{contentComponent:CustomSideBar},{intialRouteName:'Home'})