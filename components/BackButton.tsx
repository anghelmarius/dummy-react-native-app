import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface BackButtonProps {
  onPress: () => void;
}

const BackButton = ({ onPress }: BackButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    marginBottom: 20,
  },
  container: {
    width: 35,
    height: 35,
    borderRadius: 20,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BackButton;
