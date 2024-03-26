import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabOne from '../screens/TabOne';
import TabTwo from '../screens/TabTwo';
import DrawerOne from '../screens/DrawerOne';
import DrawerTwo from '../screens/DrawerTwo';
import Details from '../screens/Details';
import { DeviceEventEmitter } from 'react-native';
import Login from '../screens/Login';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function Navigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={Home} />
            <Stack.Screen options={{ headerShown: false }}
                name="Details" component={Details} />
            <Stack.Screen options={{ headerShown: false }}
                name="Drawer" component={MyDrawer} />
        </Stack.Navigator>
    );
}

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{ headerShown: false }}
                name="TabOne" component={TabOne} />
            <Tab.Screen options={{ headerShown: false }}
                name="TabTwo" component={TabTwo} />
        </Tab.Navigator>
    );
}
function Auth(user) {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    initialParams={user}
                    name='Login'
                    component={Login}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default function Dashboard() {

    const [isAuth, setIsAuth] = React.useState(false)
    const [user, setUser] = React.useState(null)
    const subscriberHandler = (data) => {
        if (data.route == 'auth') {
            setIsAuth(true)
        } else {
            setIsAuth(false)
        }
    }
    React.useEffect(() => {
        const subscriber = DeviceEventEmitter.addListener('subscriber', subscriberHandler)
        const user = DeviceEventEmitter.addListener('user', (user) => {
            console.log(user)
            setUser(user)
        })

        return () => {
            subscriber.remove()
        }
    }, [])

    return (
        isAuth ?
            Auth(user)
            :
            <NavigationContainer>
                <Drawer.Navigator>
                    <Stack.Screen
                        name="Home"
                        component={Home} />
                    <Drawer.Screen name="DrawerOne" component={DrawerOne} />
                    <Drawer.Screen name="DrawerTwo" component={DrawerTwo} />
                </Drawer.Navigator>
            </NavigationContainer >

    );
}