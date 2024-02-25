import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PickerSelect from 'react-native-picker-select';

interface AddShoesFormProps {
  addClothingItem: (category: string, color: string, sleeveLength: string, neckline: string, type: string, style: string, piece: string) => void;
}

interface AddShoesFormState {
  color: string;
  style: string;
}

class AddShoesForm extends Component<AddShoesFormProps, AddShoesFormState> {
  constructor(props: AddShoesFormProps) {
    super(props);
    this.state = {
      color: '',
      style: ''
    };
  }

  handleAddShoes = () => {
    const { color, style } = this.state;
    this.props.addClothingItem('Shoes', color, '', '', '', style, ''); // Pass empty strings for sleeveLength and neckline
    this.setState({ color: '', style: '' });
  }

  render() {
    return (
      <View>
        <Text>Color:</Text>
        <PickerSelect
          value={this.state.color}
          onValueChange={(value) => this.setState({ color: value })}
          items={[
            { label: 'Black', value: 'black' },
            { label: 'Blue', value: 'blue' },
            { label: 'Brown', value: 'brown' },
          ]}
        />

        <Text>Style:</Text>
        <PickerSelect
          value={this.state.style}
          onValueChange={(value) => this.setState({ style: value })}
          items={[
            { label: 'Dress', value: 'dress' },
            { label: 'Sneakers', value: 'sneakers' },
            { label: 'Flip Flops', value: 'flip flops' },
          ]}
        />
        
        <Button title="Add Shoes" onPress={this.handleAddShoes} />
      </View>
    );
  }
}

export default AddShoesForm;