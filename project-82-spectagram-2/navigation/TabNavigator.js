import * as React from 'react';
import {StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from "../screens/Feed";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import CreatePost from "../screens/CreatePost";
import { RFValue } from "react-native-responsive-fontsize";

const Tab = createMaterialBottomTabNavigator();


const BottomTabNavigator=()=> {
  return (
    
      <Tab.Navigator
      labled={false}
      barStyle={styles.bottomTabStyle}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Feed') {
              iconName = focused
                ? 'home'
                : 'home-outline';
                size = 30
                color="white"
            } else if (route.name === 'CreatePost') {
              iconName = focused ? 'create' : 'create-outline';
              size = 30
              color="white"
            }
            return <Ionicons name={iconName} size={RFValue(25)} color={color} style={styles.icons} />;
            
          },
        })}

        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'gray',
          
        }}
      >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="CreatePost" component={CreatePost} />
      </Tab.Navigator>
    
  );
}

const styles = StyleSheet.create({
  bottomTabStyle: {
    backgroundColor: "#2f345d",
    height: "8%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    position: "absolute"
  },
  icons: {
    width: RFValue(30),
    height: RFValue(30)
  }
});

export default BottomTabNavigator;