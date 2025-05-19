import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const WindScreen = () => {
	const windrunnerImg =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyDCI_9AOxUhrB7PUg9Zz8j0NiV0xqtft_-73ftr0ZXtywcEo:https://i.redd.it/32q73dsenb071.png&s";
	const info =
		"The Order of Windrunners is an order of the Knights Radiant on Roshar. The Windrunners are Surgebinders who use the Surges of Adhesion and Gravitation, and they are associated with the sapphire polestone. They form a Nahel bond with honorspren. Windspren form their Shardplate. The combination of Adhesion and Gravitation results in the three Lashings.";
	const order = "Windrunner";
	return (
		<View>
			<Entry imageSource={windrunnerImg} info={info} order={order}></Entry>
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

export default WindScreen;
