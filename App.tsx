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

    <View>
      <View>
        <TouchableOpacity onPress={generateRandomColor}>
          <Text>Change Background</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});

export default App;
