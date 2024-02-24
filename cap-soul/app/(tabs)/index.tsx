import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import AddTshirtForm from '../../components/AddTshirtForm'; // Adjust the path as needed

interface Tshirt {
  id: string;
  color: string;
  sleeveLength: string;
  neckline: string;
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

  addTshirt = (color: string, sleeveLength: string, neckline: string) => {
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
  deleteTshirt = (id: string) => { //adding delete function
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
