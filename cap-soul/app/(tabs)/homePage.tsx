import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Image } from 'react-native';

export default function HomePageScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/femaleModelBase.png')} style={{ width: 175, height: 500 }} resizeMode="contain" />      
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
});
