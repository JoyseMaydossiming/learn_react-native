import React, {Component} from 'react';
import {Text} from 'react-native';

export default class Judul extends Component{
	render(){
		return(
			<Text style={salon.Judul}>BIODATA</Text>
			)
	}
}
const salon ={
	Judul: {
		color : 'black',
		fontSize: 50,
		fontWeight: 'bold',
		backgroundColor: 'grey'
	}
}
