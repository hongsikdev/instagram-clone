import React from "react";
import { AppLoading, Asset, Font } from "expo";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";

import configureStore from "./redux/configureStore";
const { persistor, store } = configureStore();

export default class App extends React.Component {
  state = {
    isLoading: false
  };
  render() {
    const { isLoading } = this.state;

    if (!isLoading) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }

    return (
      // <View style={styles.container}>
      //   <Text>Hello World!</Text>
      // </View>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={StyleSheet.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </PersistGate>
      </Provider>
    );
  }

  _loadAssetsAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/logo.png"),
        require("./assets/images/logo-white.png"),
        require("./assets/images/noPhoto.jpg"),
        require("./assets/images/photoPlaceholder.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ]);
  };
  _handleLoadingError = error => {
    console.error(error);
  };
  _handleFinishLoading = async () => {
    console.log("handle finish success.");
    this.setState({
      isLoading: true
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
