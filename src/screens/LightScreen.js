import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const LightScreen = () => {
	const lightweaverImg =
		"https://worldbuildersmarket.com/cdn/shop/products/shashglyphpin_750x.png?v=1650581364";
	const info =
		"The Order of Lightweavers is an order of the Knights Radiant on Roshar. The Lightweavers are Surgebinders who use the Surges of Illumination and Transformation, commonly called Lightweaving and Soulcasting. They are associated with the garnet polestone, and form a Nahel bond with Cryptics.";
	const order = "Lightweaver";
	return (
		<View>
			<Entry imageSource={lightweaverImg} info={info} order={order}></Entry>
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

export default LightScreen;
