import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.header}>Knights Radiant</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Bondsmith")}
			>
				<Text style={styles.text}>Bondsmith</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Edgedancer")}
			>
				<Text style={styles.text}>Edgedancer</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Dustbringer")}
			>
				<Text style={styles.text}>Dustbringer</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Elsecaller")}
			>
				<Text style={styles.text}>Elsecaller</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Lightweaver")}
			>
				<Text style={styles.text}>Lightweaver</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Skybreaker")}
			>
				<Text style={styles.text}>Skybreaker</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Stoneward")}
			>
				<Text style={styles.text}>Stoneward</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Truthwatcher")}
			>
				<Text style={styles.text}>Truthwatcher</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Willshaper")}
			>
				<Text style={styles.text}>Willshaper</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Windrunner")}
			>
				<Text style={styles.text}>Windrunner</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		fontSize: 45,
		backgroundColor: "blue",
	},
	text: {
		fontSize: 15,
	},
	image: {
		height: 400,
		width: 300,
	},
	button: {
		alignItems: "center",
		backgroundColor: "blue",
		padding: 10,
	},
});

export default HomeScreen;
