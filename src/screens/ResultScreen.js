import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

let highestScore = 0;

export default function ResultScreen({ route, navigation }) {
  const { score, total } = route.params;
  if (score > highestScore) highestScore = score;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Score: {score} / {total}</Text>
      <Text style={styles.text}>Highest Score: {highestScore}</Text>
      <Button title="Back to Home" onPress={() => navigation.popToTop()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, marginBottom: 15 },
});
