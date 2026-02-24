import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { questions } from "../questions";

export default function QuizScreen({ navigation }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const q = questions[index];

  const selectAnswer = (key) => {
    setAnswers({ ...answers, [q.id]: key });
  };

  const finishQuiz = () => {
    let score = 0;
    questions.forEach((item) => {
      if (answers[item.id] === item.answer) score++;
    });
    navigation.navigate("Result", { score, total: questions.length });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>{q.question}</Text>

      {Object.entries(q.choices).map(([key, value]) => (
        <TouchableOpacity
          key={key}
          style={[styles.option, answers[q.id] === key && styles.selected]}
          onPress={() => selectAnswer(key)}
        >
          <Text>{key}. {value}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.buttons}>
        <Button title="Previous" disabled={index === 0} onPress={() => setIndex(index - 1)} />
        {index === questions.length - 1 ? (
          <Button title="Finish" onPress={finishQuiz} />
        ) : (
          <Button title="Next" onPress={() => setIndex(index + 1)} />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  question: { fontSize: 20, marginBottom: 15 },
  option: { padding: 12, borderWidth: 1, borderRadius: 5, marginVertical: 5 },
  selected: { backgroundColor: "#cce5ff" },
  buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
});
