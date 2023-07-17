import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FlatList, Text, View } from 'react-native';
import HomeIcon from '../assets/HomeIcon.svg';
import MessageIcon from '../assets/MessageIcon.svg';
import ProfileIcon from '../assets/ProfileIcon.svg';
import HomeCIcon from '../assets/HomeCIcon.svg';
import MessageCIcon from '../assets/MessageCIcon.svg';
import ProfileCIcon from '../assets/ProfileCIcon.svg';
import SearchIcon from '../assets/SearchIcon.svg';
import MenuIcon from '../assets/MenuIcon.svg';
import { WithLocalSvg } from 'react-native-svg';//svg사용에 필수
import { GlobaScrolllView, HeaderLeftText, HomeIconView } from '../style/navigationStyle';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DATA } from '../home/data';
import { Item } from '../home/ProductCard';
import { CardFlatList } from '../style/cardStyle';
const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
        <GlobaScrolllView>
            <CardFlatList
                data={DATA}
                renderItem={({ item }) => <Item title={item.title} image={item.img} price={item.price} />}
                keyExtractor={item => item.id}
            />
        </GlobaScrolllView>
    );

}

function MessageScreen() {
    return <Text>MessageScreen</Text>;
}

function ProfileScreen() {
    return (
        <SafeAreaView>
            <Text>ProfileScreen</Text>
        </SafeAreaView>

    );
}
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
                    headerRight: ({ onPress }) => {
                        if (route.name === "Home") {
                            return (
                                <HomeIconView>
                                    <WithLocalSvg asset={SearchIcon} />
                                    <WithLocalSvg asset={MenuIcon} />
                                </HomeIconView>
                            )
                        }
                    },
                    headerStyle: {
                        backgroundColor: '#181a20',
                        borderBottomWidth: 0,
                    },
                    headerLeft: () => {
                        if (route.name === "Message") {
                            return (
                                <HeaderLeftText>채팅방</HeaderLeftText>
                            )
                        }
                    },
                    headerTitle: () => {
                        return <Text></Text>
                    },
                    tabBarShowLabel: false,
                    headerShown: route.name === "Profile" ? (false) : (true),
                    headerShadowVisible: false, // 헤더 border 제거

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
