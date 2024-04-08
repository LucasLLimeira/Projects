import { View, Image, StatusBar } from "react-native"
import { FontAwesome6, MaterialIcons } from "@expo/vector-icons"
import { Link } from "expo-router"

import { Input } from "@/components/input"
import { colors } from "@/styles/colors"
import { Button } from "@/components/button"

export default function Register() {
    return (
        <View className="bg-green-500 flex-1 items-center justify-center">
            <StatusBar barStyle="light-content" />
            <Image 
            source={require("@/assets/logo.png")} 
            className="h-16" 
            resizeMode="contain" />
            <View className="w-full p-8 mt-2 gap-3">
                <Input>
                    <FontAwesome6 
                    name="user-circle" 
                    size={20}
                    color={colors.green[200]} />
                    <Input.Field placeholder="Nome Completo" />
                </Input>
                <Input>
                    <MaterialIcons 
                    name="alternate-email" 
                    size={20}
                    color={colors.green[200]} />
                    <Input.Field placeholder="E-mail" keyboardType="email-address" />
                </Input>
                <Button title="Realizar inscrição"  />

                <Link href="/" className="text-gray-100 text-base font-bold text-center mt-8">
                    Já possui ingresso?
                </Link>
                
            </View>
            
        </View>
    )
}

