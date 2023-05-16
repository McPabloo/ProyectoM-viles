import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Box,
} from "native-base";
import NativeBaseIcon from "./components/NativeBaseIcon";
import Login from "./components/Login";
import { Platform } from "react-native";
import MainContainer from "./components/MainContainer";

export default function App() {
  return (
    <NativeBaseProvider>
      <MainContainer/>
    </NativeBaseProvider>
  );
}
