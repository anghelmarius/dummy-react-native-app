import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface AuthButtonProps {
  onPress: () => void;
  text: string;
  iconName: "logo-apple" | "logo-google";
}

const AuthButton: React.FC<AuthButtonProps> = ({ onPress, text, iconName }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.iconContainer}>
        <Ionicons name={iconName} size={24} color="white" />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#333",
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  iconContainer: {
    marginRight: 10,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default AuthButton;
