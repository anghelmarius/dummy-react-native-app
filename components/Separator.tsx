import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Colors from "../utils/colors";
const Separator: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.darkColor,
  },
  text: {
    color: Colors.darkColor,
    marginHorizontal: 10,
  },
});

export default Separator;
