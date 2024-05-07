import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Separator from "../../components/Separator";
import Button from "../../components/Button";
import colors from "../../utils/colors";
import BackgroundWrapper from "../../components/BackgroundWrapper";
import { removeFromLocalStorage } from "../../utils/AsyncStorageHandler";
import { navigate } from "../../utils/RootNavigation";
import routes from "../../utils/routes";

function HomeScreen() {
  return (
    <BackgroundWrapper>
      <View>
        <View>
          <Text style={styles.headerText}>Home</Text>
        </View>
        <View style={styles.logoutContainer}>
          <Button
            onPress={() => {
              removeFromLocalStorage("isLoggedIn");
              navigate(routes.LOGIN);
            }}
            title="Log out"
          />
        </View>
        <Separator />
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            This page is under construction...
          </Text>
        </View>
      </View>
    </BackgroundWrapper>
  );
}
export default HomeScreen;

const styles = StyleSheet.create({
  headerText: {
    color: "#fff",
    fontSize: 35,
    fontWeight: "500",
  },
  logoutContainer: {
    marginTop: 25,
    marginBottom: 10,
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
});
