import "../styles/global.css"
import {Slot} from "expo-router";
import {useFonts} from "expo-font";
import {useEffect} from "react";
import * as SplashScreen from "expo-splash-screen";

export default function Layout() {
  const [loaded, error] = useFonts({
    'Prometo': require('../../assets/fonts/Prometo.ttf'),
    'Prometo-Medium': require('../../assets/fonts/Prometo-Medium.ttf')
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
      <Slot/>
  )
}