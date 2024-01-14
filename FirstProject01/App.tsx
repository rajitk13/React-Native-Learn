import React from 'react';

import {Button, SafeAreaView, Text, View, Alert} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Text>Hello World!</Text>
        <Button
          title="Press Me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
