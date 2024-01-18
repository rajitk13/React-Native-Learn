import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.heading}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.cardOne, styles.card]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {fontSize: 24, paddingHorizontal: 8, fontWeight: 'bold'},
  container: {padding: 8, flex: 1, flexDirection: 'row'},
  cardOne: {backgroundColor: 'red'},
  cardTwo: {backgroundColor: 'green'},
  cardThree: {backgroundColor: 'blue'},
  card: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
