import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

// Importing Images
import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';

type DiceProps = {
  imageUrl: ImageSourcePropType;
};

const Dice = ({imageUrl}: DiceProps) => {
  return (
    <View style={styles.diceContainer}>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
};

export default function App(): JSX.Element {
  const [diceImage, setDiceImage] = useState(DiceOne);
  const [rotation, setRotation] = useState(0);

  const rotateDice = () => {
    setRotation(rotation + 1);
    // Logic to roll the dice and set new image
    const diceImages = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive];
    const randomIndex = Math.floor(Math.random() * diceImages.length);
    setDiceImage(diceImages[randomIndex]);

    // Haptic feedback
    ReactNativeHapticFeedback.trigger('impactLight');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dice Roller</Text>
      <Animated.View
        style={[
          styles.diceContainer,
          {transform: [{rotate: `${rotation * 360}deg`}]},
        ]}>
        <Dice imageUrl={diceImage} />
      </Animated.View>
      <Pressable style={styles.rollDiceBtn} onPress={rotateDice}>
        <Text style={styles.rollDiceBtnText}>Roll Dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF2F2',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  diceContainer: {
    marginVertical: 20,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtn: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    marginTop: 20,
  },
  rollDiceBtnText: {
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
