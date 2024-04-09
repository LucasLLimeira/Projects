import { useState } from "react"
import { View, Image, StatusBar, Alert } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Link } from "expo-router"

import { Input } from "@/components/input"
import { colors } from "@/styles/colors"
import { Button } from "@/components/button"

export default function Home() {

    const [code, setCode] = useState("")

    function handleAccessCredencial(){
        if(!code.trim()){
            return Alert.alert("Ingresso", "Informe o código do ingresso!")

        }

    }

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
                <Button title="Acessar credencial" onPress={handleAccessCredencial} />

                <Link href="/register" className="text-gray-100 text-base font-bold text-center mt-8">
                    Ainda não possui ingresso?
                </Link>
                
            </View>
            
        </View>
    )
}

