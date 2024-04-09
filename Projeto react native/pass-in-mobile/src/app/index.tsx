import { useState } from "react"
import { View, Image, StatusBar, Alert } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
<<<<<<< HEAD
import { Link, Redirect } from "expo-router"

import { api } from "@/server/api"
import { useBadgeStore } from "@/store/badge-store"
=======
import { Link } from "expo-router"
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a

import { Input } from "@/components/input"
import { colors } from "@/styles/colors"
import { Button } from "@/components/button"

export default function Home() {

    const [code, setCode] = useState("")
<<<<<<< HEAD
    const [isLoading, setIsLoading] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleAccessCredencial(){
        try{
            if(!code.trim()){
                return Alert.alert("Ingresso", "Informe o código do ingresso!")

            }
            setIsLoading(true)

            const {data} = await api.get(`/attendees/${code}/badge`)
            badgeStore.save(data.badge)
            
        }catch(error){
            console.log(error)
            setIsLoading(false)
            Alert.alert("Ingresso", "Ingresso não encontrado!")
=======

    function handleAccessCredencial(){
        if(!code.trim()){
            return Alert.alert("Ingresso", "Informe o código do ingresso!")

>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
        }

    }

<<<<<<< HEAD
    if(badgeStore.data?.checkInURL){
        return <Redirect href="/ticket" />
    }

=======
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
    return (
        <View className="bg-green-500 flex-1 items-center justify-center">
            <StatusBar barStyle="light-content" />
            <Image 
            source={require("@/assets/logo.png")} 
            className="h-16" 
            resizeMode="contain" />
            <View className="w-full p-8 mt-2 gap-3">
                <Input>
                    <MaterialCommunityIcons 
                    name="ticket-confirmation-outline" 
                    size={20}
                    color={colors.green[200]} />
                    <Input.Field 
                    placeholder="Código do ingresso" 
                    onChangeText={setCode} />
                </Input>
<<<<<<< HEAD
                <Button title="Acessar credencial" 
                onPress={handleAccessCredencial} 
                isLoading={isLoading}/>

                <Link 
                href="/register" 
                className="text-gray-100 text-base font-bold text-center mt-8">
=======
                <Button title="Acessar credencial" onPress={handleAccessCredencial} />

                <Link href="/register" className="text-gray-100 text-base font-bold text-center mt-8">
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
                    Ainda não possui ingresso?
                </Link>
                
            </View>
            
        </View>
    )
}

