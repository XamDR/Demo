import React from 'react'
import { StyleSheet, Text, View, Platform, StatusBar } from 'react-native'

type headerProps = {
	title: String
}

export default function Header({ title }: headerProps) {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{title}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	header: {
		height: 60,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: 'dodgerblue',
	},
	text: {
		color: 'white',
		fontSize: 20,
		textAlign: 'center',
	},
})
