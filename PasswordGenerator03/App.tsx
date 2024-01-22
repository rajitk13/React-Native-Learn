import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';

//Form Validation

import {object, string, number, date, InferType} from 'yup';
import * as Yup from 'yup';

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be minimum of 4')
    .max(16, 'should be max of 16 chars')
    .required('Length is required'),
});

export default function App() {
  const [password, setPassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);

  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setupperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const generatePassword = (passwordLength: number) => {};
  const createPassword = (character: string, passwordLength: number) => {};

  return (
    <View>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
