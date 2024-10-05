import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MyCourseScreen from '../Screens/MyCourseScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

const TabNavigation=()=>{
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="MyCourses" component={MyCourseScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default TabNavigation;