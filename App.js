import React from "react";

import { Provider } from "./Context";
import SwitchNavigator from "./src/Navigator/SwitchNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <NavigationContainer>
      <SwitchNavigator />
    </NavigationContainer>
  );
};

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
