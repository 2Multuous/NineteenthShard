import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const WillScreen = () => {
	const willshaperImg =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGzvfPROlBNp5Z1yTlCTz1regTmT55FgfbdcJq0VWY9xjFQY:https://external-preview.redd.it/mN-IvwclDTwfN5YWF6SyGZOpvneTdOFIVtMOuq0p65M.jpg%3Fwidth%3D640%26crop%3Dsmart%26auto%3Dwebp%26s%3D48fbcaf640d9b49bc1ece9af1798217f07a4ded0&s";
	const info =
		"The Order of Willshapers is an order of the Knights Radiant on Roshar. They form Nahel bonds with Reachers, also known as lightspren. The Willshapers are Surgebinders who use the Surges of Transportation and Cohesion, and they are associated with the amethyst polestone.";
	const order = "Willshaper";
	return (
		<View>
			<Entry imageSource={willshaperImg} info={info} order={order}></Entry>
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

export default WillScreen;
