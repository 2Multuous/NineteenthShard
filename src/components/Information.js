import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Information = (props) => {
	return (
		<View>
			<Text style={styles.header}>{props.order}</Text>
			<Text style={styles.text}>{props.info}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 30,
		backgroundColor: "blue",
	},
	text: {
		fontSize: 15,
	},
	image: {
		height: 400,
		width: 300,
	},
});

export default Information;
