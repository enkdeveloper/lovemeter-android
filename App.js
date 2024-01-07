import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Calculate from './src/screens/Calculate.jsx';

const App = () => {
  const [oScore, setOScore] = useState(0);

  return (
    <View style={{ flex: 1, backgroundColor: '#ff69b4', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: 'white', fontSize: 24 }}>LOVEMETER</Text>
      <Calculate oScore={oScore} setOScore={setOScore} />
      <StatusBar style="auto" />
    </View>
  );
}

export default App;
