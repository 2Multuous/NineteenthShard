import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import WindScreen from "./src/screens/WindScreen";
import SkyScreen from "./src/screens/SkyScreen";
import DustScreen from "./src/screens/DustScreen";
import DanceScreen from "./src/screens/DanceScreen";
import TruthScreen from "./src/screens/TruthScreen";
import LightScreen from "./src/screens/LightScreen";
import ElseScreen from "./src/screens/ElseScreen";
import WillScreen from "./src/screens/WillScreen";
import StoneScreen from "./src/screens/StoneScreen";
import BondScreen from "./src/screens/BondScreen";

const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Windrunner: WindScreen,
		Skybreaker: SkyScreen,
		Dustbringer: DustScreen,
		Edgedancer: DanceScreen,
		Truthwatcher: TruthScreen,
		Lightweaver: LightScreen,
		Elsecaller: ElseScreen,
		Willshaper: WillScreen,
		Stoneward: StoneScreen,
		Bondsmith: BondScreen,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "App",
		},
	}
);

export default createAppContainer(navigator);
