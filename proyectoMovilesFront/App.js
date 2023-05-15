import * as React from "react";
import { Center, VStack } from "native-base";
import MainContainer from "./components/MainContainer";
import Login from "./components/Login";
import { NativeBaseProvider } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
       <MainContainer/>
    </NativeBaseProvider>
  );
}

