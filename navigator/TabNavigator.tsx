import { View, Text } from "react-native";
import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Icon } from "@rneui/themed";
import CustomerScreen from "../screens/CustomerScreen";
import OrderScreen from "../screens/OrderScreen";

export type TabStackParamList = {
  Customers: undefined;
  Orders: undefined;
};

const Tab = createMaterialBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          return route.name === "Orders" ? (
            <Icon
              type="entypo"
              name="users"
              color={focused ? "#eb6a7c" : "gray"}
            />
          ) : (
            <Icon
              type="entypo"
              name="users"
              color={focused ? "#59c1cc" : "gray"}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Customers" component={CustomerScreen} />
      <Tab.Screen name="Orders" component={OrderScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
