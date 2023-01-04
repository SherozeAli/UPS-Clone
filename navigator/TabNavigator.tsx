import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CustomerScreen from "../screens/CustomerScreen";
import OrderScreen from "../screens/OrderScreen";

const Tab = createMaterialBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
