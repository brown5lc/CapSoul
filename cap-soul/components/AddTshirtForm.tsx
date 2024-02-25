import React, { Component } from 'react';
import { View, Text, Button} from 'react-native';
import PickerSelect from 'react-native-picker-select';
import AsyncStorage from '@react-native-async-storage/async-storage'


interface AddTshirtFormState {
  color: string | undefined;
  sleeveLength: string | undefined;
  material: string | undefined;
}

interface AddTshirtFormProps {
  addTshirt: (color: string | undefined, sleeveLength: string | undefined, material: string | undefined) => void;
}

class AddTshirtForm extends Component<AddTshirtFormProps, AddTshirtFormState> {
  constructor(props: AddTshirtFormProps) {
    super(props);
    this.state = {
      color: undefined,
      sleeveLength: undefined,
      material: undefined,
    };
  }

  handleAddTshirt = () => {
    const { color, sleeveLength, material } = this.state;
    this.props.addTshirt(color, sleeveLength, material);
    // Optionally, you can reset the form after adding the T-shirt
    this.setState({ color: undefined, sleeveLength: undefined, material: undefined });
  }

  render() {
    return (
      <View>
        <Text>Color:</Text>
        <PickerSelect
          value={this.state.color || undefined}
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
          value={this.state.sleeveLength || undefined}
          onValueChange={(value) => this.setState({ sleeveLength: value })}
          items={[
            { label: 'tank', value: 'tank' },
            { label: 'short', value: 'short' },
            { label: 'long', value: 'long' },
            // Add more s options as needed
          ]}
        />

        <Text>Material:</Text>
        <PickerSelect
          value={this.state.material || undefined}
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
