import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import BackButton from "../../components/BackButton";
import Input from "../../components/Input";
import Separator from "../../components/Separator";
import Button from "../../components/Button";
import AuthButton from "../../components/AuthButton";
import colors from "../../utils/colors";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import { navigate } from "../../utils/RootNavigation";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../utils/requests";
import { saveInLocalStorage } from "../../utils/AsyncStorageHandler";
import routes from "../../utils/routes";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutateLogin = useMutation({ mutationFn: () => login(email, password) });

  const validateEmail = (): boolean => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const validatePassword = (): boolean => {
    if (password.length < 8) {
      return false;
    }

    if (!/[A-Z]/.test(password)) {
      return false;
    }

    if (!/[a-z]/.test(password)) {
      return false;
    }

    if (!/\d/.test(password)) {
      return false;
    }

    if (!/[$&+,:;=?@#|'<>.^*()%!-]/.test(password)) {
      return false;
    }

    return true;
  };

  const loginPress = () => {
    const isEmailValid: boolean = validateEmail();
    const isPasswordValid: boolean = validatePassword();
    if (isEmailValid && isPasswordValid) {
      mutateLogin.mutate();
      if (mutateLogin?.data && mutateLogin.data?.data?.code === 200) {
        saveInLocalStorage("isLoggedIn", "true");
        navigate(routes.HOME);
      }
    } else {
      Alert.alert(
        "Some validation error here, maybe red border for the input, and move login into the input element."
      );
    }
  };
  return (
    <BackgroundWrapper>
      <View>
        <BackButton onPress={() => navigate(routes.REGISTER)} />
        <View>
          <Text style={styles.headerText}>Log in to Scale</Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={email}
            onChange={setEmail}
            label="Email"
            placeholder="hello@company.com"
            type="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Input
            value={password}
            onChange={setPassword}
            label="Password"
            placeholder="Your password"
            type="default"
            secureTextEntry={true}
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Text
            style={styles.forgotPasswordText}
            onPress={() =>
              Alert.alert("This feature is not available for this moment.")
            }
          >
            Forgot Password?
          </Text>
        </View>
        <View style={styles.loginContainer}>
          <Button onPress={loginPress} title="Login" />
        </View>
        <Separator />
        <View style={styles.thirdPartyContainer}>
          <AuthButton
            onPress={() =>
              Alert.alert("This feature is not available for this moment.")
            }
            text="Continue with Apple"
            iconName="logo-apple"
          />

          <AuthButton
            onPress={() =>
              Alert.alert("This feature is not available for this moment.")
            }
            text="Continue with Google"
            iconName="logo-google"
          />
        </View>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            Scale usese cookies for analytics personalized content and ads. By
            using Scale's services you agree to this use of cookies.
            <Text style={styles.learnMore}>Learn more</Text>
          </Text>
        </View>
      </View>
    </BackgroundWrapper>
  );
}
export default LoginScreen;

const styles = StyleSheet.create({
  headerText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "500",
  },
  inputContainer: {
    marginTop: 30,
  },
  forgotPasswordContainer: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: "greenyellow",
    fontSize: 15,
  },
  loginContainer: {
    marginTop: 25,
    marginBottom: 10,
  },
  thirdPartyContainer: {
    gap: 30,
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 40,
  },
  footerText: {
    textAlign: "center",
    color: colors.darkColor,
  },
  learnMore: {
    color: "white",
  },
});
