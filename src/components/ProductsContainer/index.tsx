import React from 'react'
import { Text, View } from 'react-native'
import ProductItem from "../ProductItem"
import productsGetir from '../../../assets/productsGetir'
function index() {
    return (
        //Ana View
        < View>
            {/*ikki urun olan kisim*/}
            <View style={{flexDirection:"row",backgroundColor:"white"}}>
            {productsGetir.slice(0,2).map((item)=>(
                <ProductItem key={item.id} item={item} />
            ))}  
                
            </View>
            {/*ortadaki cubuk yazisi*/}
            <Text style={{ fontSize: 16, color: "#747990", padding: 14,fontWeight:'bold' }}>Çubuk</Text>
            {/*diger urunler  olan kisim*/}
            <View style={{flex:1,flexDirection:"row",backgroundColor:"white",flexWrap:"wrap",alignItems:'center'}}>
            {productsGetir.slice(2).map((item)=>(
                <ProductItem key={item.id} item={item} />
            ))}  
                
            </View>


        </View>
    )
}

export default index