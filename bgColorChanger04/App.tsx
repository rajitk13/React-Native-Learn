import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

const App = () => {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  // Function to generate a random hex color code
  const generateRandomHexCode = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  };

  // Initialize the colors array with 4 random hex code colors
  const colors = Array.from({length: 4}, () => generateRandomHexCode());

  const changeColor = () => {
    setCurrentColorIndex((currentColorIndex + 1) % colors.length);
  };

  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: colors[currentColorIndex]}]}
      onPress={changeColor}>
      <View style={styles.center}>
        <Text style={styles.text}>{colors[currentColorIndex]}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'white',
  },
});

export default App;
