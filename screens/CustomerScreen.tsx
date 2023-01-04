import { SafeAreaView, Text } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";

const CustomerScreen = () => {
  const tailwind = useTailwind();
  return (
    <SafeAreaView>
      <Text style={tailwind("text-blue-500")}>Customer Screen</Text>
    </SafeAreaView>
  );
};

export default CustomerScreen;
