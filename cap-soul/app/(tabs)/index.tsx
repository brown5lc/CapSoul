import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import AddTshirtForm from '../../components/AddTshirtForm'; // Adjust the path as needed
import AsyncStorage from '@react-native-async-storage/async-storage'

interface Tshirt {
  id: string | undefined;
  color: string | undefined;
  sleeveLength: string | undefined;
  neckline: string | undefined;
}

interface TopsState {
  tshirts: Tshirt[];
}

class Tops extends Component<{}, TopsState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tshirts: []
    };
  }
  componentDidMount() {
    // Load wardrobe data from AsyncStorage when component mounts
    this.loadWardrobeData();
  }

  componentDidUpdate() {
    // Save wardrobe data to AsyncStorage when component updates
    this.saveWardrobeData();
  }

  saveWardrobeData = async () => {
    try {
      await AsyncStorage.setItem('wardrobe', JSON.stringify(this.state.tshirts));
    } catch (error) {
      console.error('Error saving wardrobe data:', error);
    }
  };

  loadWardrobeData = async () => {
    try {
      const wardrobeData = await AsyncStorage.getItem('wardrobe');
      if (wardrobeData !== null) {
        this.setState({ tshirts: JSON.parse(wardrobeData) });
      }
    } catch (error) {
      console.error('Error loading wardrobe data:', error);
    }
  };
  
  addTshirt = (color: string | undefined, sleeveLength: string | undefined, neckline: string | undefined) => {
    const newTshirt: Tshirt = {
      id: Math.random().toString(36).substr(2, 9),
      color: color,
      sleeveLength: sleeveLength,
      neckline: neckline
    };
    this.setState(prevState => ({
      tshirts: [...prevState.tshirts, newTshirt]
    }));
  }

  deleteTshirt = (id: string | undefined) => {
    this.setState(prevState => ({
      tshirts: prevState.tshirts.filter(tshirt => tshirt.id !== id)
    }));
  }

  render() {
    return (
      <View>
        <Text>T-shirts:</Text>
        {/* Render existing T-shirts */}
        {this.state.tshirts.map(tshirt => (
          <View key={tshirt.id}>
            <Text>Color: {tshirt.color}, Sleeve: {tshirt.sleeveLength}, Neckline: {tshirt.neckline}</Text>
            <Button title="Delete" onPress={() => this.deleteTshirt(tshirt.id)} />
          </View>
        ))}
        {/* Add T-shirt form */}
        <AddTshirtForm addTshirt={this.addTshirt} />
      </View>
    );
  }
}

export default Tops;


