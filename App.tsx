import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import HomeScreen from "./src/screen/Home";
import OnBoardingScreen from "./src/screen/OnBoardingScreen";
import { OnboardFlow } from "react-native-onboard";

export default function App() {
  return (
    <OnboardFlow
      pages={[
        {
          title: "Welcome to my app",
          subtitle: "This is page 1",
          imageUri: "",
          primaryButtonTitle: "this is fahim",
        },
      ]}
      type={"fullscreen"}
      backgroundImageUri="https://i.ibb.co/M8qykdm/onboarding.png"
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff ",
    alignItems: "center",
    justifyContent: "center",
  },
});
