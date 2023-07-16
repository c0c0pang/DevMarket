import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import HomeIcon from '../assets/HomeIcon.svg';
import MessageIcon from '../assets/MessageIcon.svg';
import ProfileIcon from '../assets/ProfileIcon.svg';
import HomeCIcon from '../assets/HomeCIcon.svg';
import MessageCIcon from '../assets/MessageCIcon.svg';
import ProfileCIcon from '../assets/ProfileCIcon.svg';
import SearchIcon from '../assets/SearchIcon.svg';
import MenuIcon from '../assets/MenuIcon.svg';
import { WithLocalSvg } from 'react-native-svg';//svg사용에 필수
import { HomeIconView } from './styled';
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return <Text>HomeScreen</Text>;
}

function MessageScreen() {
    return <Text>MessageScreen</Text>;
}

function ProfileScreen() {
    return <Text>ProfileScreeㄴn</Text>;
}
function BottomTabNavigationApp() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused }) => {
                        if (route.name === 'Home') {
                            return <WithLocalSvg asset={focused ? (HomeCIcon) : (HomeIcon)} />;
                        }

                        if (route.name === 'Message') {
                            return <WithLocalSvg asset={focused ? (MessageCIcon) : (MessageIcon)} />;
                        }
                        if (route.name === 'Profile') {
                            return <WithLocalSvg asset={focused ? (ProfileCIcon) : (ProfileIcon)} />;
                        }
                    },
                    headerRight: ({ onPress }) => {
                        if (route.name == 'Home') {
                            return (
                                <View style={HomeIconView}>
                                    <WithLocalSvg asset={SearchIcon} />
                                    <WithLocalSvg asset={MenuIcon} />
                                </View>
                            )
                        }
                    },
                    headerTitle: () => {
                        return <Text></Text>
                    },
                    tabBarShowLabel: false
                })}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Message" component={MessageScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default BottomTabNavigationApp;
