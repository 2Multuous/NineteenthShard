import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const TestComponent = (props) => {
	return (
		<View>
			<Text>{props.text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default TestComponent;
