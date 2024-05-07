import React, { useEffect, useState } from 'react'
import { Alert, Pressable, Text, View } from 'react-native'
import Layout from '../components/Layout'
import { useNavigation } from '@react-navigation/native'

const TicTacToe = ({ playerOne, setPlayerOne, playerTwo, SetplayerTwo }) => {

    const [turn, setTurn] = useState(playerOne)
    const [p1, setP1] = useState([])
    const [p2, setP2] = useState([])

    const navigation = useNavigation()


    useEffect(() => {
        if ((p1.includes(0) && p1.includes(1) && p1.includes(2)) || (p1.includes(3) && p1.includes(4) && p1.includes(5)) || (p1.includes(6) && p1.includes(7) && p1.includes(8)) || (p1.includes(0) && p1.includes(3) && p1.includes(6)) || (p1.includes(1) && p1.includes(4) && p1.includes(7)) || (p1.includes(2) && p1.includes(5) && p1.includes(8)) || (p1.includes(0) && p1.includes(4) && p1.includes(8)) || (p1.includes(2) && p1.includes(4) && p1.includes(6))) {
            Alert.alert(playerOne.toUpperCase() + " Win");
            handleReset()
            setTurn(playerOne)

        }
    }, [p1])

    useEffect(() => {
        if ((p2.includes(0) && p2.includes(1) && p2.includes(2)) || (p2.includes(3) && p2.includes(4) && p2.includes(5)) || (p2.includes(6) && p2.includes(7) && p2.includes(8)) || (p2.includes(0) && p2.includes(3) && p2.includes(6)) || (p2.includes(1) && p2.includes(4) && p2.includes(7)) || (p2.includes(2) && p2.includes(5) && p2.includes(8)) || (p2.includes(0) && p2.includes(4) && p2.includes(8)) || (p2.includes(2) && p2.includes(4) && p2.includes(6))) {
            Alert.alert(playerTwo.toUpperCase() + " Win");
            handleReset()
            setTurn(playerOne)
        }
    }, [p2])


    const handlepress = (e) => {
        if (p1.includes(e) || p2.includes(e)) {
        }
        else {
            if (turn == playerOne) {
                setTurn(playerTwo)
                setP1([...p1, e])
            }
            else {
                setTurn(playerOne)
                setP2([...p2, e])
            }
        }
    }

    const handleReset = () => {
        setP1([])
        setP2([])
        setTurn(playerOne)

    }
    const turnChange = () => {
        if (turn == playerOne) {
            setTurn(playerTwo)
            setP1([])
            setP2([])
        }
        else {
            setTurn(playerOne)
            setP1([])
            setP2([])
        }
    }

    return (
        <Layout>
            <View className="flex relative w-full px-14 h-[100vh]">

                <View className="items-center justify-center flex h-[80vh] w-full">
                    {/* <Text className=" text-red-800 text-2xl font-semibold ">{playerOne} Turn</Text> */}
                    <Text className=" text-red-800 text-2xl font-semibold ">{turn.toUpperCase()} Turn</Text>
                    <View className="flex-wrap w-full flex-row mx-14 my-10">
                        {Array.apply(null, Array(9)).map((e, index) => (
                            <Text key={index} onPress={() => { handlepress(index) }} className={`text-6xl w-1/3 h-24 text-center ${(index == 1) || (index == 4) ? "border border-t-0" : (index == 3) || (index == 5) ? "border border-x-0" : (index == 7) ? "border border-y-0" : ""}  py-6 font-semibold`}>{p1.includes(index) ? playerOne[0].toUpperCase() : p2.includes(index) ? playerOne[0].toLowerCase() == playerTwo[0] || playerOne[0] == playerTwo[0].toLowerCase() || playerOne[0].toLowerCase() == playerTwo[0].toLowerCase() || playerOne[0] == playerTwo[0] ? playerTwo[0].toLowerCase() : playerTwo[0].toUpperCase() : ""}</Text>
                        ))}

                    </View>
                    <View className=" flex-row justify-between w-full">
                        <Pressable onPress={handleReset}>
                            <Text className="text-lg font-semibold rounded-lg px-4 py-1.5 bg-green-500 text-white">Reset Game</Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate("S1")}>
                            <Text className="text-lg font-semibold rounded-lg px-4 py-1.5 bg-rose-500 text-white">Restart</Text>
                        </Pressable>
                    </View>
                </View>
                <View className="w-full flex-row justify-center items-center ml-[14vw] mb-[10vh] absolute bottom-0  ">
                    <Text onPress={turnChange} className="text-lg font-semibold px-2 py-10 rounded-full bg-sky-500 text-white">Change Turn</Text>
                </View>
            </View>
        </Layout>
    )
}

export default TicTacToe