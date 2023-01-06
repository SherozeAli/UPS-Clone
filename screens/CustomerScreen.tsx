import { ScrollView, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useTailwind } from "tailwind-rn";
import {
  CompositeNavigationProp,
  useNavigation,
} from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MaterialBottomTabNavigationProp } from "@react-navigation/material-bottom-tabs";
import { Image, Input } from "@rneui/themed";
import { TabStackParamList } from "../navigator/TabNavigator";
import { RootStackParamList } from "../navigator/RootNavigator";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  MaterialBottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamList>
>;

const CustomerScreen = () => {
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const tailwind = useTailwind();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59c1cc" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tailwind("w-full h-64")}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder="Seacrh by customer"
        value={input}
        onChangeText={(text) => setInput(text)}
        containerStyle={tailwind("bg-white pt-5")}
      />
    </ScrollView>
  );
};

export default CustomerScreen;
