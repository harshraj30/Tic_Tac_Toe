import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TicTacToe from './app/pages/TicTacToe';
import Form from './app/pages/Form';
import { useState } from 'react';


const stack = createStackNavigator()

export default function App() {

  const [playerOne, setPlayerOne] = useState("")
    const [playerTwo, SetplayerTwo] = useState("")

  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen options={{ headerShown: false }} name='S1' >
          {(props)=><Form  playerOne={playerOne}  setPlayerOne={setPlayerOne}   playerTwo={playerTwo}   SetplayerTwo={SetplayerTwo} />}
        </stack.Screen>
        <stack.Screen options={{ headerShown: false }} name='S2' >
        {(props)=><TicTacToe  playerOne={playerOne}  setPlayerOne={setPlayerOne}   playerTwo={playerTwo}   SetplayerTwo={SetplayerTwo} />}
        </stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
    // <TicTacToe/>
  );
}

