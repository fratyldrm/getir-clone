import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../src/screens/HomeScreen"
import { Image, Text, TouchableOpacity, View, Dimensions } from "react-native";
import CategoryFilterScreen from "../screens/CategoryFilterScreen"
import ProductDetailsScreen from "../screens/ProductDetailsScreen"
import { Ionicons } from '@expo/vector-icons';
import { getFocusedRouteNameFromRoute, useNavigation } from "@react-navigation/native";
import { AntDesign } from '@expo/vector-icons';
import CartScreen from '../screens//CartScreen'
import { Fontisto } from '@expo/vector-icons';


const Stack = createStackNavigator()
const { width, height } = Dimensions.get("window")
function MyStack({ navigation, route }) {

    const tabHiddenRoutes = ["ProductDetails", "CartScreen"]
    React.useLayoutEffect(() => {
        const routeName = getFocusedRouteNameFromRoute(route);

        if (tabHiddenRoutes.includes(routeName)) {

            navigation.setOptions({ tabBarStyle: { display: "none" } });
        } else {

            navigation.setOptions({ tabBarStyle: { display: "true" } });
        }
    }, [navigation, route]);

    return (
        <Stack.Navigator >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerStyle: { backgroundColor: "#5C3EBC", },
                    headerTitle: () => (
                        <Image
                            resizeMode="contain"
                            style={{

                                width: 70, height: 30, marginLeft: 130,

                            }}
                            source={require("../../assets/getirlogo.png")}
                        />
                    )


                }}
            />

            <Stack.Screen
                name="CategoryDetails"
                component={CategoryFilterScreen}
                options={{
                    headerTintColor: "#ffff",
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5C3EBC", },
                    headerTitle: () => (
                        <Text style={{ fontWeight: "bold", color: "white", fontSize: 15, paddingHorizontal: "33%" }}>Ürünler</Text>

                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate("CartScreen")} style={{ width: width * 0.23, height: 33, backgroundColor: "white", marginRight: width * 0.03, borderRadius: 9, flexDirection: "row", alignItems: "center", }}>

                            <Image style={{ width: 23, height: 23, marginLeft: 6 }} source={require("../../assets/cart.png")} />
                            <View style={{ height: 33, width: 4, backgroundColor: "white" }} />
                            <View style={{ justifyContent: "center", alignItems: "center", flex: 1, backgroundColor: "#F3EFFE", height: 33, borderTopRightRadius: 9, borderBottomRightRadius: 9 }}>
                                <Text style={{ color: "#5d3ebd", fontWeight: "bold", fontSize: 12 }}>
                                    <Text>{"\u20ba"}</Text>
                                    24,00
                                </Text>
                            </View>


                        </TouchableOpacity>
                    )

                }}
            />

            < Stack.Screen
                name="ProductDetails"
                component={ProductDetailsScreen}
                options={{
                    headerTintColor: "#ffff",
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5C3EBC", },
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ paddingEnd: 12 }}>
                            <AntDesign name="heart" size={24} color="#32177a" />
                        </TouchableOpacity>
                    ),


                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ paddingLeft: 12 }}>
                            <Ionicons name="close" size={27} color="white" />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <Text style={{ fontWeight: "bold", color: "white", fontSize: 16, paddingHorizontal: "33%" }}>Ürün Detayı</Text>
                    )

                }}
            />
            < Stack.Screen
                name="CartScreen"
                component={CartScreen}
                options={{
                    headerTintColor: "white",
                    headerBackTitleVisible: false,
                    headerStyle: { backgroundColor: "#5c3ebc" },
                    headerTitle: () => (
                        <Text style={{ fontWeight: "bold", paddingHorizontal: "38%", fontSize: 15, color: "white" }}>Sepetim</Text>
                    ),
                    headerLeft: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ paddingLeft: 12 }}>
                            <Ionicons name="close" size={27} color="white" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ paddingRight: 12 }}>
                            <Fontisto name="trash" size={23} color="white" />
                        </TouchableOpacity>
                    ),
                }}
            />


        </Stack.Navigator >
    )
}

export default function HomeNavgiator({ navigation, route }) {
    return <MyStack navigation={navigation} route={route} />


}