import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import Entry from "../components/entry";

const BondScreen = () => {
	const bondsmithImg =
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV3MzI0nNbo6KoCz8e0gbcrxvfmF3ll8YlCnoCiwX-GmiPeqA:https://preview.redd.it/stormlight-archive-bondsmith-tattoo-v0-6ovorlblx97e1.jpg%3Fwidth%3D1080%26crop%3Dsmart%26auto%3Dwebp%26s%3D98d7e4021132e8fa3ae45ef6c40b29bc313c51d1&s";
	const info =
		"The Order of Bondsmiths is an order of the Knights Radiant on Roshar. The Bondsmiths are Surgebinders who use the Surges of Tension and Adhesion, and they are associated with the heliodor polestone. They form a Nahel bond with one of three unique spren: the Stormfather, the Nightwatcher, or the Sibling. Historically, Bondsmiths bonded to the primeval spren of Roshar, the Wind, Stone, and Night. The exact nature of the Nahel bond that Bondsmiths share with their specific spren is unclear; it may or may not be similar to that of the other orders of the Knights Radiant. Historically one of the most exalted orders of Radiants, the Bondsmiths are Surgebinders of extraordinary power that were refounded following the Recreance by Dalinar Kholin.";
	const order = "Bondsmith";
	return (
		<View>
			<Entry imageSource={bondsmithImg} info={info} order={order}></Entry>
		</View>
	);
};

export default BondScreen;
