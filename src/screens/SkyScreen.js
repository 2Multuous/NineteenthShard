import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const SkyScreen = () => {
	const skybreakerImg =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcRosxx_ZrV2TyUt5I8ySfpi1PIHcT9_-hobZf0COfeK7wwgI:https://preview.redd.it/yytzauh2z9y51.jpg%3Fauto%3Dwebp%26s%3Dd0986f7b2bfce725d657cdae412bc92af06c973d&s";
	const info =
		"The Order of Skybreakers is an order of the Knights Radiant on Roshar. The Skybreakers are Surgebinders who use the Surges of Gravitation and Division, and they are associated with the smokestone polestone. They form a Nahel bond with highspren. They are widely thought of as fanatics in both Shadesmar and the Physical Realm. The Skybreakers were the only Radiant order not to have abandoned their oaths on the Day of Recreance, and continued to operate in secret until the present day.";
	const order = "Skybreaker";
	return (
		<View>
			<Entry imageSource={skybreakerImg} info={info} order={order}></Entry>
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

export default SkyScreen;
