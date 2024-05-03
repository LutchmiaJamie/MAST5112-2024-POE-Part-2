import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GenreScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>GENRE</Text>
        </View>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'green',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerBox: {
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  headerText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default GenreScreen;