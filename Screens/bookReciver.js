import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import {ListItem, Card} from 'react-native-elements'
import firebase from 'firebase'
import db from '../config.js'

export default class BookReciver extends React.Component{
	constructor(props){
		super(props)
		this.state={
		userId:firebase.auth().currentUser.email,
		receiverId:this.props.navigation.getParam("details")["userId"],
        requestId:this.props.navigation.getParam("details")["requestId"],
		bookName:this.props.navigation.getParam("details")["bookName"],
		reason:this.props.navigation.getParam("details")["reason"],
		receiverName:'',
		receiverContact:'',
		receiverAddress:'',
		requestDocId:''
		}
	}

	getReceiverDetails = ()=>{
		db.collection('users').where('emailid','==',this.state.receiverId).get()
		.then(snapShot=>{snapShot.forEach(doc=>{
		this.setState({
		receiverName:doc.data().firstName,
		receiverContact:doc.data().mobileNo,
		receiverAddress:doc.data().address
		})})})
		db.collection('requestedBooks').where('requestId','==',this.state.requestId).get()
		.then(snapShot=>{snapShot.forEach(doc=>{
		this.setState({
		requestDocId:doc.id
		})})})
	}

	updateBookStatus = ()=>{
		db.collection('donations').add({
			bookName:this.state.bookName,
			requestId:this.state.requestId,
			requestedBy:this.state.receiverName,
			donarId:this.state.userId,
			requestStatus:"Donar Interested"
		})
	}
	componentDidMount(){
		this.getReceiverDetails
	}
	render(){
		return(
			<View style={{flex:1}}>
				<View style={{flex:0.3}}>
					<Card tittle={"Book Informaton"} tittleStyle={{fontSize:20}}>
						<Card>
							<Text>Name:{this.state.bookName}</Text>
						</Card>
						<Card>
							<Text>Reason:{this.state.reason}</Text>
						</Card>
					</Card>
					<Card tittle={"Reciver Details"} tittleStyle={{fontSize:20}}>
						<Card>
							<Text>Name:{this.state.receiverName}</Text>
						</Card>
						<Card>
							<Text>Contact:{this.state.receiverContact}</Text>
							</Card>
							<Card>
								<Text>Address:{this.state.receiverAddress}</Text>
							</Card>
					</Card>
			</View>
			</View>
		)
	}
}