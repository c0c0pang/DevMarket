import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeIcon from '../assets/HomeIcon.svg';
import MessageIcon from '../assets/MessageIcon.svg';
import ProfileIcon from '../assets/ProfileIcon.svg';
import HomeCIcon from '../assets/HomeCIcon.svg';
import MessageCIcon from '../assets/MessageCIcon.svg';
import ProfileCIcon from '../assets/ProfileCIcon.svg';
import { WithLocalSvg } from 'react-native-svg';//svg사용에 필수
import { HeaderLeftText } from '../style/navigationStyle';
import { MessageScreen } from '../message/MessageScreen';
import { ProfileScreen } from '../profile/ProfileScreen';
import { HomeStackScreen } from '../home/HomeStackScreen';
const Tab = createBottomTabNavigator();
function BottomTabNavigationApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarStyle: { backgroundColor: '#181a20', borderTopWidth: 0 },
                    tabBarIcon: ({ focused }) => {
                        if (route.name === "Home") {
                            return <WithLocalSvg asset={focused ? (HomeCIcon) : (HomeIcon)} />;
                        }
                        if (route.name === "Message") {
                            return <WithLocalSvg asset={focused ? (MessageCIcon) : (MessageIcon)} />;
                        }
                        if (route.name === "Profile") {
                            return <WithLocalSvg asset={focused ? (ProfileCIcon) : (ProfileIcon)} />;
                        }
                    },
                    headerLeft: () => {
                        if (route.name === "Message") {
                            return (
                                <HeaderLeftText>채팅방</HeaderLeftText>
                            )
                        }
                    },
                    tabBarShowLabel: false,
                    headerShown: false,
                    headerShadowVisible: false, // 헤더 border 제거

                })}
            >
                <Tab.Screen name="Home" component={HomeStackScreen} />
                <Tab.Screen name="Message" component={MessageScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default BottomTabNavigationApp;
