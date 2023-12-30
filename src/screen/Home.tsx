import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.homeContainer}>
      <Text>
        me from home Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Earum nemo in exercitationem, voluptatum facilis mollitia dolor? Aliquam
        quaerat nesciunt soluta dolores nam deleniti, temporibus tempora placeat
        sequi praesentium cumque vero, mollitia consectetur saepe? Autem
        dolores, omnis maxime dolorem nam aut nemo nihil impedit quos pariatur
        reprehenderit consequuntur nisi saepe doloribus consectetur ducimus
        repellat? Cumque doloribus dolores unde ex nesciunt voluptates
        repudiandae harum consectetur sapiente aperiam maiores voluptatem ut
        adipisci, corporis asperiores illo optio, nulla voluptatum perspiciatis
        beatae. Voluptas non recusandae, explicabo quasi, iste qui libero optio
        molestias repudiandae nisi excepturi aperiam aliquid ut sequi
        consequuntur ullam, ratione tempora repellat quia?
      </Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  homeContainer: { width: "90%", margin: "auto", textAlign: "center" },
});
