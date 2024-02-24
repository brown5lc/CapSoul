/*import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

class AddTshirtForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      sleeveLength: '',
      neckline: ''
    };
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value });
  }

  handleAddTshirt = () => {
    const { color, sleeveLength, neckline } = this.state;
    this.props.addTshirt(color, sleeveLength, neckline);
    // Optionally, you can reset the form after adding the T-shirt
    this.setState({ color: '', sleeveLength: '', neckline: '' });
  }

  render() {
    return (
      <View>
        <Text>Color:</Text>
        <TextInput
          value={this.state.color}
          onChangeText={value => this.handleInputChange('color', value)}
        />
        <Text>Sleeve Length:</Text>
        <TextInput
          value={this.state.sleeveLength}
          onChangeText={value => this.handleInputChange('sleeveLength', value)}
        />
        <Text>Neckline:</Text>
        <TextInput
          value={this.state.neckline}
          onChangeText={value => this.handleInputChange('neckline', value)}
        />
        <Button title="Add T-shirt" onPress={this.handleAddTshirt} />
      </View>
    );
  }
}

export default AddTshirtForm;
*/
// Tops.js (or any other parent component)

// Tops.js (or any other parent component)

import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AddTshirtForm from '../../components/AddTshirtForm' // Adjust the path as needed

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

  addTshirt = (color, sleeveLength, neckline) => {
    const newTshirt = {
      id: Math.random().toString(36).substr(2, 9),
      color: color,
      sleeveLength: sleeveLength,
      neckline: neckline
    };
    this.setState(prevState => ({
      tshirts: [...prevState.tshirts, newTshirt]
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
          </View>
        ))}
        {/* Add T-shirt form */}
        <AddTshirtForm addTshirt={this.addTshirt} />
      </View>
    );
  }
}

export default Tops;

