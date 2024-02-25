import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PickerSelect from 'react-native-picker-select';

interface AddPantsFormProps {
  addClothingItem: (category: string, color: string, sleeveLength: string, neckline: string, type: string) => void;
}

interface AddPantsFormState {
  color: string;
  type: string;
}

class AddPantsForm extends Component<AddPantsFormProps, AddPantsFormState> {
  constructor(props: AddPantsFormProps) {
    super(props);
    this.state = {
      color: '',
      type: ''
    };
  }

  handleAddPants = () => {
    const { color, type } = this.state;
    this.props.addClothingItem('Pants', color, type, '', '');
    this.setState({ color: '', type: '' });
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

        <Text>Type:</Text>
        <PickerSelect
          value={this.state.type}
          onValueChange={(value) => this.setState({ type: value })}
          items={[
            { label: 'Jeans', value: 'jeans' },
            { label: 'Khakis', value: 'khakis' },
            { label: 'Shorts', value: 'shorts' },
          ]}
        />
        
        <Button title="Add Pants" onPress={this.handleAddPants} />
      </View>
    );
  }
}

export default AddPantsForm;