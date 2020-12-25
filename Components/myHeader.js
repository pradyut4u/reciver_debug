import React from 'react'
import {View, TouchableOpaacity, Text, TextInput} from 'react-navigation'
import {Header, Icon, Badge} from 'react-native-elements'

export const MyHeader = (props)=>{
	return(
	<Header 
	leftComponent={<Icon name='bars' type='font-awesome' color='cyan' onpress = {()=>{
	props.navigation.toggleDrawer()}}/>}
	centerComponent={{text:props.tittle, style:{fontSize:20, fontWeight:'bold', color:'green'}}}
	backgroundColor="blue"
	/>
	)
}