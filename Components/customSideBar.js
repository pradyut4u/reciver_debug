import React from 'react'
import {TouchableOpacity, StyleSheet, View, Text, TextInput} from 'react-native'
import {DrawerItems} from 'react-navigation-drawer'
import firebase from 'firebase'

export default class CustomSideBar extends React.Component{
	render(){
		return(
		 <View style={{flex:1}}>
		 <View style={{flex:0.8}}>
		 <DrawerItems {...this.props}/>
		 </View>
		 <View style={{flex:0.2, justifyContent:'flex-end'}}>
		 </View>
		 <TouchableOpacity style={{height:30, width:'100%', justifyContent:'center', padding:10}}
		  onpress = {()=> {this.props.navigation.navigate('Welcome');
		 firebase.auth().signOut()}}>
		 <Text>Logout</Text>
		 </TouchableOpacity>
		 </View>
		)
	}
}