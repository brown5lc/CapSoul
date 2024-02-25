import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PickerSelect from 'react-native-picker-select';

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
        <PickerSelect
          value={this.state.color}
          onValueChange={(value) => this.setState({ color: value })}
          items={[
            { label: 'Red', value: 'red' },
            { label: 'Blue', value: 'blue' },
            { label: 'Green', value: 'green' },
            // Add more color options as needed
          ]}
        />
        
        <Text>Size:</Text>
        <PickerSelect
          value={this.state.size}
          onValueChange={(value) => this.setState({ size: value })}
          items={[
            { label: 'Small', value: 'small' },
            { label: 'Medium', value: 'medium' },
            { label: 'Large', value: 'large' },
            // Add more size options as needed
          ]}
        />

        <Text>Material:</Text>
        <PickerSelect
          value={this.state.material}
          onValueChange={(value) => this.setState({ material: value })}
          items={[
            { label: 'Cotton', value: 'cotton' },
            { label: 'Polyester', value: 'polyester' },
            { label: 'Blend', value: 'blend' },
            // Add more material options as needed
          ]}
        />
        
        <Button title="Add T-shirt" onPress={this.handleAddTshirt} />
      </View>
    );
  }
}

export default AddTshirtForm;
