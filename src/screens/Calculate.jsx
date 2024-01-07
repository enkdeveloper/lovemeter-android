import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import pinkHeartIcon from '../components/pink-heart-icon.png';
import loveIcon from '../components/love.png';

const Calculate = ({ oScore, setOScore }) => {
  const [yourName, setYourName] = useState('');
  const [partnerName, setPartnerName] = useState('');
  const [resultCalculated, setResultCalculated] = useState(false);

  const handleSubmit = () => {
    if (!resultCalculated && yourName && partnerName) {
      const score = calculateO(yourName, partnerName);
      setOScore(score);
      setResultCalculated(true);
    }
  };

  const calculateO = (yourName, partnerName) => {
    return Math.floor(Math.random() * 101);
  };
  

  const handleRefresh = () => {
    setYourName('');
    setPartnerName('');
    setResultCalculated(false);
    setOScore(0);
  };

  return (
    <View style={styles.container}>
      <Image source={loveIcon} style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={yourName}
        onChangeText={(text) => setYourName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Partner's Name"
        value={partnerName}
        onChangeText={(text) => setPartnerName(text)}
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleSubmit} style={styles.calculateButton}>
          <Text style={styles.buttonText1}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRefresh} style={styles.refreshButton}>
          <Text style={styles.buttonText2}>Refresh</Text>
        </TouchableOpacity>
      </View>
      <Image source={pinkHeartIcon} style={styles.heartIcon} />
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${oScore}%` }]} />
      </View>
      {resultCalculated && (
        <Text style={styles.resultText}>Your Score: {oScore}</Text>
      )}
      {!resultCalculated && (
        <Text style={styles.errorText}>Please enter names and calculate to see the result</Text>
      )}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#ff69b4',
    borderRadius: 20,
    width: '100%',
    padding: 0,
  },
  icon: {
    width: 100,
    height: 90,
    marginTop: 30,
  },
  input: {
    color: '#ff1493',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    borderRadius: 10,
    width: '40%',
    backgroundColor: 'white',
    textAlign: 'center', 
    alignSelf: 'center', 
    paddingVertical: 10, 
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  calculateButton: {
    backgroundColor: '#ff1493',
    borderRadius: 25,
    width: '40%',
    margin: 10,
    padding: 16,
    alignItems: 'center',
  },
  refreshButton: {
    backgroundColor: 'white',
    borderRadius: 27,
    width: '40%',
    margin: 10,
    padding: 17,
    alignItems: 'center',
  },
  buttonText1: {
    color: 'white',
    fontSize: 18,
  },
  buttonText2: {
    color: 'black',
    fontSize: 18,
  },
  heartIcon: {
    width: 60,
    height: 100,
    marginTop: 20,
  },
  progressBarContainer: {
    alignItems: 'center',
    position: 'relative',
    width: '60%',
    marginTop: 40,
  },
  progressBar: {
    height: 30,
    alignItems: 'center',
    backgroundColor: '#ff1493',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: [{ translateX: -125 }],
    borderRadius: 15,
  },
  resultText: {
    fontSize: 36,
    color: 'white',
    marginTop: 20,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'white',
    fontSize: 16,
    marginTop: 20,
  },
});

export default Calculate;
