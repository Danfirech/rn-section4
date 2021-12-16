import { setStatusBarNetworkActivityIndicatorVisible } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import { borderLeftColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Colors } from "react-native/Libraries/NewAppScreen";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";

const GameOver = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>Game Over!</BodyText>
      <Image
        // fadeDuration={300}
        source={require("../assets/success.png")}
        style={styles.imageContainer}
        // source={{
        //   uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oddizzi.com%2Fteachers%2Fexplore-the-world%2Fphysical-features%2Fmountains%2Fparts-of-a-mountain%2F&psig=AOvVaw2lYXFSriFQh84PMhZ_PPnD&ust=1639779260178000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPiE9JCs6fQCFQAAAAAdAAAAABAJ",
        // }}
        // style={styles.imageContainer}
      />

      <BodyText>
        Your phone needed{" "}
        <Text style={styles.highLight}>{props.roundsNumber}</Text> rounds to
        guess your number!
      </BodyText>
      <Button title="New Game" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    overflow: "hidden",
    margin: 30,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  highLight: {
    color: "coral",
    fontWeight: "bold",
  },
});

export default GameOver;
