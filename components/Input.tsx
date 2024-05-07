import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardTypeOptions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../utils/colors";
interface InputProps {
  value: string;
  onChange: (text: string) => void;
  label: string;
  placeholder?: string;
  onFocus?: () => void;
  secureTextEntry?: boolean;
  style?: object;
  type?: KeyboardTypeOptions;
}
const Input = ({
  value,
  onChange,
  label,
  placeholder,
  onFocus,
  secureTextEntry,
  style,
  type,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, style]}>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          onFocus={onFocus}
          secureTextEntry={secureTextEntry && !showPassword}
          style={styles.input}
          placeholderTextColor={Colors.darkColor}
          keyboardType={type ? type : "default"}
        />
        {secureTextEntry && (
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              color="white"
              size={24}
              style={styles.secureIcon}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "transparent",
    borderRadius: 10,
    padding: 15,
    color: "white",
    borderColor: Colors.darkColor,
  },
  input: {
    flex: 1,
    color: "white",
    fontSize: 13,
  },
  visibilityIcon: {
    padding: 10,
  },
  label: {
    color: "white",
    marginBottom: 10,
    fontSize: 15,
  },
  secureIcon: {
    position: "absolute",
    top: -13,
    right: 5,
  },
});

export default Input;
