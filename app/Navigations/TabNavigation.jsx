import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import MyCourseScreen from '../Screens/MyCourseScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import Colors from '../Utils/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation=()=>{
  return (
    <Tab.Navigator screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: Colors.PRIMARY
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon:({color, size})=>(
            <Ionicons name="home" size={24} color={color} />
        ),
        tabBarLabel:({color})=>(
            <Text style={{color:color}}>Home</Text>
        )
      }}/>
      <Tab.Screen name="MyCourses" component={MyCourseScreen} options={{
        tabBarIcon:({color, size})=>(
            <Ionicons name="book" size={24} color={color} />
        ),
        tabBarLabel:({color})=>(
            <Text style={{color:color}}>My Courses</Text>
        )
      }}/>
      <Tab.Screen name="Profile" component={ProfileScreen}options={{
        tabBarIcon:({color, size})=>(
            <Ionicons name="person-circle-sharp" size={24} color={color} />
        ),
        tabBarLabel:({color})=>(
            <Text style={{color:color}}>Profile</Text>
        )
      }} />
    </Tab.Navigator>
  );
}
export default TabNavigation;