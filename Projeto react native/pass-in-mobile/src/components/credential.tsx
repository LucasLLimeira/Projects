import { View, Image, ImageBackground, Text, TouchableOpacity } from "react-native";
import {Feather} from "@expo/vector-icons"
import { colors } from "@/styles/colors";
import { QRCode } from "@/components/qrcode";
<<<<<<< HEAD
import { BadgeStore } from "@/store/badge-store";

type Props ={
    data: BadgeStore
=======

type Props ={
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
    image?: string
    onChanceAvatar?: () => void
    onExpandQRCode?: () => void
}

<<<<<<< HEAD
export function Credential({data, onChanceAvatar,onExpandQRCode}: Props){
=======
export function Credential({onChanceAvatar,onExpandQRCode , image}: Props){
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
    return(
        <View className="w-full self-stretch items-center">
            <Image 
            source={require("@/assets/ticket/band.png")}
            className="w-24 h-52 z-10"
            />

            <View className="bg-black/20 self-stretch items-center
            pb-6 border border-white/10 mx3 rounded-2xl -mt-5">
                <ImageBackground 
                source={require("@/assets/ticket/header.png")}
                className="px-6 py-8 h-40 items-center self-stretch border-b border-white/10
                overflow-hidden">
                    <View className="w-full flex-row items-center justify-between">
                        <Text className="text-zinc-50 text-sm font-bold">
<<<<<<< HEAD
                            {data.eventTitle}
                        </Text>
                        <Text className="text-zinc-50 text-sm font-bold">
                            #{data.id}
=======
                            Unite summit
                        </Text>
                        <Text className="text-zinc-50 text-sm font-bold">
                            #123
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
                        </Text>
                    </View>

                    <View className="w-40 h-40 bg-black rounded-full" />

                </ImageBackground>

<<<<<<< HEAD
                {data.image ? (
                    <TouchableOpacity activeOpacity={0.9} onPress={onChanceAvatar}>
                        <Image 
                            source={{uri: data.image}} 
=======
                {image ? (
                    <TouchableOpacity activeOpacity={0.9} onPress={onChanceAvatar}>
                        <Image 
                            source={{uri: image}} 
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a
                            className="w-36 h-36 rounded-full -mt-24" 
                        />
                    </TouchableOpacity>        
                ) : (
                <TouchableOpacity 
                activeOpacity={0.9} 
                style={{
                    width: 144,
                    height: 144,
                    borderRadius: 9999, // half of width/height to make it round
                    marginTop: -94,
                    backgroundColor: '#ccc', // gray color
                    alignItems: 'center', // horizontally center items
                    justifyContent: 'center', // vertically center items
                }}
                onPress={onChanceAvatar}>
                    <Feather name="camera" color={colors.green[400]} size={32} />
                </TouchableOpacity>
                )
                }

                <Text className="font-bold text-2xl text-zinc-50 mt-4">
<<<<<<< HEAD
                    {data.name}
                </Text>
                <Text className="font-regular text-base text-zinc-300 mb-4">
                    {data.email}
                </Text>
                <QRCode value={data.checkInURL} size={120} />
=======
                    Lucas Limeira
                </Text>
                <Text className="font-regular text-base text-zinc-300 mb-4">
                    Lucasdllimeira@hotmail.com
                </Text>
                <QRCode value="teste" size={120} />
>>>>>>> 10e8fe6fbf422a673db7295864f66b0952b1072a

                <TouchableOpacity 
                activeOpacity={0.7} 
                onPress={onExpandQRCode}>
                    <Text className="font-body text-orange-500 text-sm mt-6">
                        Ampliar QRCode
                    </Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}