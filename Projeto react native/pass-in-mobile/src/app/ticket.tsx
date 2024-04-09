import { useState } from "react";
import { Credential } from "@/components/credential";
import { Header } from "@/components/header";
<<<<<<< HEAD
import { StatusBar, Text, View, ScrollView, TouchableOpacity, Alert, Modal, Share } from "react-native";
=======
import { StatusBar, Text, View, ScrollView, TouchableOpacity, Alert, Modal } from "react-native";
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
import { FontAwesome } from "@expo/vector-icons"
import { colors } from "@/styles/colors";
import { Button } from "@/components/button";
import * as ImagePicker from "expo-image-picker"
import { QRCode } from "@/components/qrcode";
<<<<<<< HEAD
import { useBadgeStore } from "@/store/badge-store";
import { Redirect } from "expo-router";


export default function Ticket(){
    const [expandQRCode, setExpandQRCode] = useState(false)

    const badgeStore = useBadgeStore()

    async function handleShare() {
        try{
            if(badgeStore.data?.checkInURL){
                await Share.share({
                    message: badgeStore.data.checkInURL
                })
            }

        }catch (error){
            console.log(error)
            Alert.alert("Compartilhar", "não foi possível compartilhar")
        }
    }

=======


export default function Ticket(){
    const [image, setImage] = useState("")
    const [expandQRCode, setExpandQRCode] = useState(false)

>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
    async function handleSelectImage() {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true, 
                aspect: [4, 4],
            })
        if(result.assets){
<<<<<<< HEAD
            badgeStore.updateAvatar(result.assets[0].uri)
=======
            setImage(result.assets[0].uri)
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
        }

        }catch(error){
            console.log(error)
            Alert.alert("Foto", "Não foi possível selecionar a imagem")
        }
    }
<<<<<<< HEAD

    if(!badgeStore.data?.checkInURL){
        return <Redirect href="/" />
    }

=======
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
    return(
        <View className="flex-1 bg-green-500">
            <StatusBar barStyle="light-content" />
            <Header title="Minha Credencial" />

            <ScrollView 
            className="-mt-28 -z-10" 
            contentContainerClassName="px-8 pb-8"
            showsVerticalScrollIndicator={false}>
<<<<<<< HEAD
                <Credential  
                data={badgeStore.data}
=======
                <Credential 
                image={image} 
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
                onChanceAvatar={handleSelectImage}
                onExpandQRCode={() => setExpandQRCode(true)} />

                <FontAwesome 
                name="angle-double-down" 
                size={24} 
                color={colors.gray[300]}
                className="self-center my-6" /> 

                <Text className="text-white font-bold text-2xl mt-4">
                    Compartilhar credencial
                </Text>

                <Text className="text-white font-regular text-base mt-1 mb-6">
<<<<<<< HEAD
                    Mostre ao mundo que você vai participar do evento {badgeStore.data.eventTitle}!
                </Text>

                <Button title="Compartilhar" onPress={handleShare} />

                <TouchableOpacity 
                activeOpacity={0.7} 
                onPress={() => badgeStore.remove()}>
=======
                    Mostre ao mundo que você vai participar do Unite Summit!
                </Text>

                <Button title="Compartilhar" />

                <TouchableOpacity activeOpacity={0.7}>
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
                    <Text className="mt-10 text-base text-white font-bold text-center">
                        Remover Ingresso
                    </Text>
                </TouchableOpacity>
            </ScrollView>

            <Modal visible={expandQRCode} statusBarTranslucent animationType="fade">
                <View className="flex-1 bg-green-500 items-center justify-center">
                    <QRCode value="teste" size={300} />
                    <TouchableOpacity activeOpacity={0.7} onPress={() => setExpandQRCode(false)}>
                        <Text className="font-body text-orange-500 text-sm mt-10 text-center">
                            Fechar QRCode
                        </Text>
                    </TouchableOpacity>
                </View>

            </Modal>

        </View>
    )
}