import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const ElseScreen = () => {
	const elsecallerImg =
		"https://www.17thshard.com/uploads/monthly_2019_03/large.A3AC29BC-9180-4BA1-BC0C-3CD18FBA355C.jpeg.6729feefc8407dd2fb765aa995ec6e8b.jpeg";
	const info =
		"The Order of Elsecallers is an Order of the Knights Radiant on Roshar. The Elsecallers are Surgebinders who use the Surges of Transformation and Transportation, and they are associated with the zircon polestone. They form a Nahel bond with Inkspren. So far, it is known that the Elsecallers had the power to Soulcast and to Elsecall, a use of the Transportation Surge which allows physical travel between Realms.";
	const order = "Elsecaller";
	return (
		<View>
			<Entry imageSource={elsecallerImg} info={info} order={order}></Entry>
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

export default ElseScreen;
