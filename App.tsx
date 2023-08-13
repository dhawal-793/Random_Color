import { useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';


function App(): JSX.Element {

  const [randomBackground, setRandomBackground] = useState('#ffffff')

  const generateRandomColor = () => {

    const hexRange = '0123456789ABCDEF';
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hexRange[Math.floor(Math.random() * 16)]
    }
    setRandomBackground(hexColor);

  }

  return (

    <View style={[styles.container, { backgroundColor: randomBackground }]}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: randomBackground === '#000000' ? '#FFFFFF' : '#000000' }]}
          onPress={generateRandomColor}>
          <Text style={[styles.buttonText, { color: randomBackground === '#000000' ? '#000000' : '#FFFFFF' }]}>Change Background</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonContainer: {
    flex: 1,
    gap: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: 10,
    borderwidth: 2,
    width: 150,
  },
  buttonText: {
    fontSize: 14,
    color: '#000000',
  },
});

export default App;
