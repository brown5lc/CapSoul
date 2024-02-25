import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import AddTshirtForm from '../../components/AddTshirtForm';
import AddPantsForm from '../../components/AddPantsForm';
import AddShoeForm from '../../components/AddShoesForm';
import AddHatsForm from '../../components/AddHatsForm';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ClothingItem {
  id: string;
  category: string;
  color: string;
  details: string;
}

interface WardrobeState {
  clothingItems: ClothingItem[];
  selectedCategory: string | null;
}

class Wardrobe extends Component<{}, WardrobeState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      clothingItems: [],
      selectedCategory: null
    };
  }

  componentDidMount() {
    this.loadClothingItems();
  }

  componentDidUpdate() {
    this.saveClothingItems();
  }

  addClothingItem = async (category: string, color: string, sleeveLength: string, neckline: string, type: string, style: string, piece: string) => {
    let details = '';
    if (category === 'T-shirt') {
      details += `Sleeve Length: ${sleeveLength}, Neckline: ${neckline}`;
    } else if (category === 'Pants') {
      details += `Type: ${type}`;
    } else if (category === 'Shoes') {
      details += `Style: ${style}`;
    } else if (category === 'Hats'){
      details += `Piece: ${piece}`;
    }
    
    const newClothingItem: ClothingItem = {
      id: Math.random().toString(36).substr(2, 9),
      category: category,
      color: color,
      details: details
    };
    
    this.setState(prevState => ({
      clothingItems: [...prevState.clothingItems, newClothingItem]
    }));
  }

  deleteClothingItem = (id: string) => {
    this.setState(prevState => ({
      clothingItems: prevState.clothingItems.filter(item => item.id !== id)
    }));
  }

  selectCategory = (category: string) => {
    this.setState({ selectedCategory: category });
  }

  saveClothingItems = async () => {
    try {
      await AsyncStorage.setItem('clothingItems', JSON.stringify(this.state.clothingItems));
    } catch (error) {
      console.error('Error saving clothing items:', error);
    }
  };

  loadClothingItems = async () => {
    try {
      const clothingItemsData = await AsyncStorage.getItem('clothingItems');
      if (clothingItemsData !== null) {
        this.setState({ clothingItems: JSON.parse(clothingItemsData) });
      }
    } catch (error) {
      console.error('Error loading clothing items:', error);
    }
  };

  render() {
    const { selectedCategory } = this.state;

    let categoryForm = null;
    if (selectedCategory === 'T-shirt') {
      categoryForm = <AddTshirtForm addClothingItem={this.addClothingItem} />;
    } else if (selectedCategory === 'Pants') {
      categoryForm = <AddPantsForm addClothingItem={this.addClothingItem} />;
    } else if (selectedCategory === 'Shoes') {
      categoryForm = <AddShoeForm addClothingItem={this.addClothingItem} />;
    } else if (selectedCategory === 'Hats'){
      categoryForm = <AddHatsForm addClothingItem={this.addClothingItem} />;
    }

    return (
      <View style={styles.container}>
        <Text>Select Clothing Category:</Text>
        <View style={styles.categoryButton}>
          <Button title="T-shirt" onPress={() => this.selectCategory('T-shirt')} />
        </View>
        <View style={styles.categoryButton}>
          <Button title="Pants" onPress={() => this.selectCategory('Pants')} />
        </View>
        <View style={styles.categoryButton}>
          <Button title="Shoes" onPress={() => this.selectCategory('Shoes')} />
        </View>
        <View style={styles.categoryButton}>
          <Button title="Hats" onPress={() => this.selectCategory('Hats')} />
        </View>

        {categoryForm && (
          <View>
            <Text>{selectedCategory} Details:</Text>
            {categoryForm}
          </View>
        )}

        <Text>Selected Clothing Items:</Text>
        {this.state.clothingItems.map(item => (
          <View key={item.id}>
            <Text>Category: {item.category}, Color: {item.color}, Details: {item.details}</Text>
            <Button title="Delete" onPress={() => this.deleteClothingItem(item.id)} />
          </View>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0e5d6',
    padding: 20,
  },
  categoryButton: {
    padding: 4,
    backgroundColor: '#73815d',
    marginBottom: 10,
  },
});

export default Wardrobe;