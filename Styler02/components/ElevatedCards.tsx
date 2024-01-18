import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>ElevatedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😂</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😂</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😂</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😂</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😂</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😂</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>😂</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {fontSize: 24, paddingHorizontal: 8, fontWeight: 'bold'},
  card: {
    width: 100,
    height: 100,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 2,
  },
  cardElevated: {backgroundColor: 'purple'},
  container: {padding: 8, elevation: 4, shadowOffset: {width: 1, height: 1}},
});
