import React, { useCallback, useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { ThemeProvider } from "styled-components";
import theme from "./src/global/theme";
import { Home } from "./src/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
          <StatusBar
            style="light"
            backgroundColor="transparent"
            translucent={true}
          />
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </View>
      </ThemeProvider>
    </>
  );
}
