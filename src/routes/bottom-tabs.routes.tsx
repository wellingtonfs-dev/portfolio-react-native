import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { SkillBackendScreen } from "../screens/SkillBackend/SkillBackendScreen";
import { SkillFrontendScreen } from "../screens/SkillFrontendScreen/SkillFrontendScreen";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons size={size} color={color} name="home" />
          ),         
         headerShown:false
        }}
      />
      <Screen name="Frontend" component={SkillFrontendScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons size={size} color={color} name="briefcase-check" />
        ),
        headerShown:false, 
      }} />
      <Screen name="Backend" component={SkillBackendScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons size={size} color={color} name="briefcase-check" />
        ),
        headerShown:false, 
      }} />
    </Navigator>
  );
}
