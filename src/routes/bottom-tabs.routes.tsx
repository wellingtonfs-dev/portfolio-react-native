import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SkillScreen } from "../screens/SkillScreen/SkillScreen";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
      <Screen name="Skill" component={SkillScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons size={size} color={color} name="briefcase-check" />
        ),
        headerShown:false, 
      }} />
    </Navigator>
  );
}
