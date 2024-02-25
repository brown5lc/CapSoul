import { StyleSheet, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Image } from 'react-native';
import { Feather, AntDesign, FontAwesome } from '@expo/vector-icons';

export default function HomePageScreen() {
  const shirts = [
    require('../../assets/images/tops/blackTShirt.png'),
    require('../../assets/images/tops/blueTShirt.png'),
    require('../../assets/images/tops/greenTShirt.png'),
    require('../../assets/images/tops/redTShirt.png'),
    require('../../assets/images/tops/whiteTShirt.png'),
    require('../../assets/images/tops/yellowTShirt.png'),
  ]

  const pants = [
    require('../../assets/images/bottoms/blueJeanPants.png'),
    require('../../assets/images/bottoms/leggingPants.png'),
    require('../../assets/images/bottoms/lightJeanPants.png'),
  ]

    // State to manage the current clothing image source
  const [clothingImageSource, setClothingImageSource] = useState(shirts[0]);
  const [pantsImageSource, setPantsImageSource] = useState(pants[0]);

  const generateRandomOutfit = () => {
    const randomShirtIndex = Math.floor(Math.random() * shirts.length);
    const randomPantsIndex = Math.floor(Math.random() * pants.length);
    setClothingImageSource(shirts[randomShirtIndex]);
    setPantsImageSource(pants[randomPantsIndex]);
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
      <TouchableOpacity style={styles.randomOutfitButton} onPress={generateRandomOutfit}>
        <Feather name="refresh-ccw" size={24} color="black" />      
      </TouchableOpacity>
      <View style={styles.settingsButton}>
        <FontAwesome name="gear" size={24} color="black" />
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
    top: 195,
    left: 85,
    width: 50,
    height: 250,
    zIndex: 1,
  },
  pantsOverlay: {
    position: 'absolute',
    top: 330,
    left: 85,
    width: 50,
    height: 250,
  },
  randomOutfitButton: {
    position: 'absolute',
    bottom: 25,
    left: 40,
    zIndex: 2,
  },
  settingsButton: {
    position: 'absolute',
    bottom: 675,
    right: 30,
    zIndex: 2,
  },
});
