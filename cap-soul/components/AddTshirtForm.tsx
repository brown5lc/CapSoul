import React, { Component } from 'react';
import { View, Text, Button, Picker } from 'react-native';

interface AddTshirtFormState {
  color: string;
  size: string;
  material: string;
}

interface AddTshirtFormProps {
  addTshirt: (color: string, size: string, material: string) => void;
}

class AddTshirtForm extends Component<AddTshirtFormProps, AddTshirtFormState> {
  constructor(props: AddTshirtFormProps) {
    super(props);
    this.state = {
      color: '',
      size: '',
      material: ''
    };
  }

  handleAddTshirt = () => {
    const { color, size, material } = this.state;
    this.props.addTshirt(color, size, material);
    // Optionally, you can reset the form after adding the T-shirt
    this.setState({ color: '', size: '', material: '' });
  }

  render() {
    return (
      <View>
        <Text>Color:</Text>
        <Picker
          selectedValue={this.state.color}
          onValueChange={(itemValue, itemIndex) => this.setState({ color: itemValue })}
        >
          <Picker.Item label="Red" value="red" />
          <Picker.Item label="Blue" value="blue" />
          <Picker.Item label="Green" value="green" />
          {/* Add more color options as needed */}
        </Picker>
        
        <Text>Size:</Text>
        <Picker
          selectedValue={this.state.size}
          onValueChange={(itemValue, itemIndex) => this.setState({ size: itemValue })}
        >
          <Picker.Item label="Small" value="small" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Large" value="large" />
          {/* Add more size options as needed */}
        </Picker>

        <Text>Material:</Text>
        <Picker
          selectedValue={this.state.material}
          onValueChange={(itemValue, itemIndex) => this.setState({ material: itemValue })}
        >
          <Picker.Item label="Cotton" value="cotton" />
          <Picker.Item label="Polyester" value="polyester" />
          <Picker.Item label="Blend" value="blend" />
          {/* Add more material options as needed */}
        </Picker>
        
        <Button title="Add T-shirt" onPress={this.handleAddTshirt} />
      </View>
    );
  }
}

export default AddTshirtForm;
