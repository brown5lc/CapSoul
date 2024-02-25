import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import AddTshirtForm from '../../components/AddTshirtForm'; // Adjust the path as needed
import AddPantsForm from '../../components/AddPantsForm';
import AsyncStorage from '@react-native-async-storage/async-storage'

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
    // Load clothing items from AsyncStorage when the component mounts
    this.loadClothingItems();
  }

  componentDidUpdate() {
    // Save clothing items to AsyncStorage when the component updates
    this.saveClothingItems();
  }

  addClothingItem = (category: string, color: string, details: string) => {
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
    } // Add more else if statements for other clothing categories

    return (
      <View>
        <Text>Select Clothing Category:</Text>
        <Button title="T-shirt" onPress={() => this.selectCategory('T-shirt')} />
        <Button title="Pants" onPress={() => this.selectCategory('Pants')} />
        {/* Add more buttons for other clothing categories */}
        
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

export default Wardrobe;
