import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const DanceScreen = () => {
	const edgedancerImg =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnK1S6JMT-8pSzKf2bxJ-vDasKOzGf0F1LRduyKkC2d48svKY:https://64.media.tumblr.com/49220f34234eff4103b846536114abb4/71cf7f4e791015a4-31/s1280x1920/31744d1627bd31f81b99bd68f284ab10a94d2bb4.png&s";
	const info =
		"The Order of Edgedancers is an order of the Knights Radiant on Roshar. The Edgedancers are Surgebinders who use the Surges of Abrasion and Progression, and they are associated with the diamond polestone. They bond cultivationspren.";
	const order = "Edgedancer";
	return (
		<View>
			<Entry imageSource={edgedancerImg} info={info} order={order}></Entry>
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

export default DanceScreen;
