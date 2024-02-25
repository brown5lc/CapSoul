import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PickerSelect from 'react-native-picker-select';

interface AddHatsFormProps {
  addClothingItem: (category: string, color: string, sleeveLength: string, neckline: string, type: string, style: string, piece: string) => void;
  //update when new stuff is made
}

interface AddHatsFormState {
  color: string;
  piece: string;
}

class AddHatsForm extends Component<AddHatsFormProps, AddHatsFormState> {
  constructor(props: AddHatsFormProps) {
    super(props);
    this.state = {
      color: '',
      piece: ''
    };
  }

  handleAddHats = () => {
    const { color, piece } = this.state;
    this.props.addClothingItem('Hats', color, '', '', '', '', piece ); // Pass empty strings for sleeveLength and neckline and style
    this.setState({ color: '', piece: '' });
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
            { label: 'Red', value: 'red' },
          ]}
        />

        <Text>Piece:</Text>
        <PickerSelect
          value={this.state.piece}
          onValueChange={(value) => this.setState({piece: value })}
          items={[
            { label: 'Baseball Cap', value: 'baseball cap' },
            { label: 'Hijab', value: 'hijab' },
            { label: 'Beanie', value: 'beanie' },
          ]}
        />
        
        <Button title="Add Hats" onPress={this.handleAddHats} />
      </View>
    );
  }
}

export default AddHatsForm;