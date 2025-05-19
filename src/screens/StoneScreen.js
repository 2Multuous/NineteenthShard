import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const StoneScreen = () => {
	const stonewardImg =
		"https://badalijewelry.com/cdn/shop/products/tanat-glyph-pin-bronze-779235.jpg?v=1655798011";
	const info =
		"The Order of Stonewards is an order of the Knights Radiant on Roshar. The Stonewards were Surgebinders who used the Surges of Cohesion and Tension, and they are associated with the topaz polestone. The patron Herald of the Stonewards is Talenel. In Shadesmar, the spren of the Stonewards, peakspren, look like stone and their skin cracks when they move.";
	const order = "Stoneward";
	return (
		<View>
			<Entry imageSource={stonewardImg} info={info} order={order}></Entry>
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

export default StoneScreen;
