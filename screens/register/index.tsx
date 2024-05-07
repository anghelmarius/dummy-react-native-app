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
import routes from "../../utils/routes";

function RegisterScreen() {
  const [workEmail, setWorkEmail] = useState("");

  return (
    <BackgroundWrapper>
      <View>
        <BackButton onPress={() => navigate(routes.LOGIN)} />
        <Text style={styles.headerText}>Get your free account</Text>
        <View style={styles.thirdPartyContainer}>
          <AuthButton
            onPress={() => Alert.alert("This feature is not available for this moment.")}
            text="Continue with Apple"
            iconName="logo-apple"
          />
          <AuthButton
            onPress={() => Alert.alert("This feature is not available for this moment.")}
            text="Continue with Google"
            iconName="logo-google"
          />
        </View>
        <Separator />
        <Input
          value={workEmail}
          onChange={setWorkEmail}
          label="Work email"
          placeholder="hello@company.com"
          type="email-address"
        />
        <View style={styles.loginContainer}>
          <Button onPress={() => Alert.alert("Registration closed")} title="Continue with Email" />
        </View>
        <View style={styles.alreadyContainer}>
          <Text style={styles.alreadyText}>
            Already have an account? <Text style={styles.neonText} onPress={() => navigate(routes.LOGIN)}>Login</Text>
          </Text>
        </View>
      </View>
    </BackgroundWrapper>
  );
}
export default RegisterScreen;

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
    marginTop: 20,
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
  alreadyText: {
    color: "grey",
    alignSelf: "center",
  },
  alreadyContainer: {
    marginTop: 20,
  },
  neonText: {
    color: "greenyellow",
  },
});
