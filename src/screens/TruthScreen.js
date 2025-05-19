import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const TruthScreen = () => {
	const truthwatcherImg =
		"https://makerworld.bblmw.com/makerworld/model/USc648c5bd55ee93/design/2024-08-04_98ae83107d38f8.png?x-oss-process=image/resize,w_1000/format,webp";
	const info =
		"The Order of Truthwatchers is an order of the Knights Radiant on Roshar. The Truthwatchers are Surgebinders who used the Surges of Progression and Illumination, and they are associated with the emerald polestone. They form a Nahel bond with mistspren.";
	const order = "Truthwatcher";
	return (
		<View>
			<Entry imageSource={truthwatcherImg} info={info} order={order}></Entry>
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

export default TruthScreen;
