import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const DustScreen = () => {
	const dustbringerImg =
		"https://i.ebayimg.com/images/g/ac0AAOSwAuthMUcf/s-l1200.jpg";
	const info =
		"The Order of Dustbringers is an order of Knights Radiant on Roshar. The Dustbringers are Surgebinders who control the Surges of Division and Abrasion; they are associated with the ruby polestone. They form Nahel bonds with ashspren. The Dustbringers dislike their name due to its similarity to Voidbringer, and want to be called Releasers.";
	const order = "Dustbringer";
	return (
		<View>
			<Entry imageSource={dustbringerImg} info={info} order={order}></Entry>
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

export default DustScreen;
