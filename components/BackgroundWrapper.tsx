import React, { ReactElement } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const BackgroundWrapper = ({ children }: { children: ReactElement }) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.container}>
        <View style={styles.wrapper}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

export default BackgroundWrapper;

const styles = StyleSheet.create({
  safeAreaStyle: {
    backgroundColor: "#000",
    flex: 1,
  },
  container: {
    justifyContent: "space-between",
  },
  wrapper: {
    marginLeft: 20,
    marginRight: 20,
  },
});
