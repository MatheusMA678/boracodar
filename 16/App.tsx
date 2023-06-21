import { View, StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import * as NavigationBar from "expo-navigation-bar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  NavigationBar.setBackgroundColorAsync("#16151E");
  NavigationBar.setButtonStyleAsync("light");

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Home />
      <StatusBar barStyle="light-content" backgroundColor={"#16151E"} />
    </QueryClientProvider>
  );
}
