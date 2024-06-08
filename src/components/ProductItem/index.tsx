import React from 'react'
import { Text, TouchableOpacity, View, Image, Dimensions } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { Product } from '../../models';
import { useNavigation } from '@react-navigation/native';


const { width, height } = Dimensions.get("window")
type productItemType = {
    item: Product
}
function index({ item }: productItemType) {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate("ProductDetails", { Product: item })}
            style={{
                width: width * 0.28,
                marginTop: 12,
                marginLeft: 12,
                // backgroundColor: "red",
                height: height * 0.25,
                marginBottom: 10,


            }}>
            <Image style={{ width: width * 0.28, height: width * 0.28, borderRadius: 12, borderWidth: 0.1, borderColor: "grey" }} source={{ uri: item.image }} />
            <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'center', marginTop: 10, }}>

                <Text style={{ fontSize: 11, color: "#747990", textDecorationLine: "line-through" }}>
                    <Text>{"\u20BA"}</Text>{item.fiyat}
                </Text>
                <Text style={{
                    color: "#5D3EBD",
                    fontWeight: 'bold',
                    fontSize: 12,
                    marginLeft: 4,


                }}>
                    <Text >{"\u20BA"}{item.fiyatIndirimli}</Text>
                </Text>



            </View>
            <Text style={{ fontSize: 13, fontWeight: "600", marginTop: 7, }}>{item.name}</Text>
            <Text style={{ fontSize: 16, color: "#747990", fontWeight: "600", margin: 4, }}>{item.miktar}</Text>
            <View style={{ justifyContent: 'center', alignItems: "center", shadowRadius: 3.8, shadowOpacity: 0.07, width: 30, height: 30, backgroundColor: "white", borderWidth: 0.3, borderColor: "lightgrey", position: 'absolute', right: -6, top: -6, borderRadius: 6 }}
            >
                <Entypo name="plus" size={22} color="#5D3EBD" />
            </View>

        </TouchableOpacity>
    )
}

export default index