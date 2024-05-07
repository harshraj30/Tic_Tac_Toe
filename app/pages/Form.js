import React, { useState } from 'react'
import { Alert, Pressable, Text, TextInput, View } from 'react-native'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'

const Form = ({ playerOne, setPlayerOne, playerTwo, SetplayerTwo }) => {
    const [num, setNum] = useState('1')

    const navigation = useNavigation()



    const incNum = () => {
        setNum(parseInt(num) + 2)
        if (num >= 9) {
            setNum(9)
            Alert.alert("to long")
        }
    }
    const decNum = () => {
        setNum(parseInt(num) - 2)
        if (num <= 1) {
            setNum(1)
            Alert.alert("to sort")
        }
    }

    const btn = () => {
        // console.log(playerOne + " " + playerTwo);
        if (playerOne == "" || playerTwo == "") {
            Alert.alert("Error", "Please Enter both player name")
        }
        else {
            navigation.navigate("S2")
        }
    }

    const inputPlayerOne = (props) => {
        setPlayerOne(props)
        if (playerOne == "") {

        }
    }
    return (
        <Layout>
            <View className="px-14 flex min-h-[70vh] justify-center items-center">
                <View  className="w-full flex gap-5">
                    <View>
                        <Text className="text-lg text-gray-400 font-semibold">Enter Player 1 Name :</Text>
                        <TextInput onChangeText={(text) => inputPlayerOne(text)} className="focus:border-b-sky-500 border-b text-base" />
                        {playerOne == "" ? <Text className={` text-red-500 pt-1`}>Please enter 1st player name</Text> : ""}
                    </View>
                    <View>
                        <Text className="text-lg text-gray-400 font-semibold">Enter Player 2 Name :</Text>
                        <TextInput onChangeText={(text) => { SetplayerTwo(text) }} className="focus:border-b-sky-500 border-b text-base" />
                        {playerTwo == "" ? <Text className="text-red-500 pt-1">Please enter 2st player name</Text> : ""}
                    </View>
                    {/* <View className="w-[125px]">
                        <Text className="text-center my-3 text-xl">Round</Text>
                        <View className="flex flex-row gap-2">
                            <Pressable onPress={decNum} className=" w-10 h-10 flex bg-rose-500 justify-center items-center">
                                <Text className="text-3xl font-semibold text-white">-</Text>
                            </Pressable>
                            <Text className="w-10 h-10 text-5xl text-center">{num}</Text>
                            <Pressable onPress={incNum} className=" w-10 h-10 flex bg-sky-500 justify-center items-center">
                                <Text className="text-3xl font-semibold text-white">+</Text>
                            </Pressable>
                        </View>
                    </View> */}
                </View>
                <View className="w-full my-5">
                    <Pressable className="flex  justify-center items-end">
                        <Text onPress={btn} className="text-xl border px-5 py-1 rounded-lg ">Start</Text>
                    </Pressable>
                </View>
            </View>
        </Layout>
    )
}

export default Form