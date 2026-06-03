import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [cardColor, setCardColor] = useState('skyblue');

  const changeColor = () => {
    const colors = ['red', 'green', 'blue', 'orange', 'purple'];

    const randomColor =
      colors[Math.floor(Math.random() * colors.length)];

    setCardColor(randomColor);
  };

  return (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: cardColor }]}>
        <Text style={styles.cardText}>My Card</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={changeColor}
        >
          <Text style={styles.buttonText}>
            Change Color
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
  },

  card: {
    width: 300,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
  },

  cardText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },

  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },

  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});