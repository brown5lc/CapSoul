import { StyleSheet } from 'react-native';
import React, { useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Image } from 'react-native';

export default function HomePageScreen() {
    // State to manage the current clothing image source
  const [clothingImageSource, setClothingImageSource] = useState(require('../../assets/images/blackTShirt.png'));
  const [pantsImageSource, setPantsImageSource] = useState(require('../../assets/images/blueJeanPants.png'));

  // Function to change the clothing image
  const changeClothing = () => {
    // Example: Change the clothing image source
    // This should be dynamic based on your app's logic. Here it's hardcoded for demonstration.
    setClothingImageSource(require('../../assets/images/blueTShirt.png'));
  };

  const changePants = () => {
    // Example: Change the clothing image source
    // This should be dynamic based on your app's logic. Here it's hardcoded for demonstration.
    setPantsImageSource(require('../../assets/images/blueTShirt.png'));
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/femaleModelBase.png')} style={{ width: 175, height: 500 }} resizeMode="contain" />      
      <View style={styles.shirtOverlay}>
        <Image 
        source={clothingImageSource} 
        style={{ width: 240, height: 150}} 
        resizeMode="contain" />
      </View>
      <View style={styles.pantsOverlay}>
        <Image 
        source={pantsImageSource} 
        style={{ width: 240, height: 250}} 
        resizeMode="contain" />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0, // Ensure that the margin at the top is 0
    paddingTop: 0, // Ensure that the padding at the top is also 0
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  shirtOverlay: {
    position: 'absolute',
    top: 155,
    left: 75,
    width: 50,
    height: 250,
    zIndex: 1,
  },
  pantsOverlay: {
    position: 'absolute',
    top: 285,
    left: 75,
    width: 50,
    height: 250,
  },
});
