import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import PickerSelect from 'react-native-picker-select';

interface AddTshirtFormProps {
  addClothingItem: (category: string, color: string, sleeveLength: string, neckline: string, type: string) => void;
}

interface AddTshirtFormState {
  color: string;
  sleeveLength: string;
  cut: string;
}

class AddTshirtForm extends Component<AddTshirtFormProps, AddTshirtFormState> {
  constructor(props: AddTshirtFormProps) {
    super(props);
    this.state = {
      color: '',
      sleeveLength: '',
      cut: ''
    };
  }

  handleAddTshirt = () => {
    const { color, sleeveLength, cut } = this.state;
    this.props.addClothingItem('T-shirt', color, sleeveLength, cut, '');
    this.setState({ color: '', sleeveLength: '', cut: '' });
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
          ]}
        />

        <Text>Sleeve Length:</Text>
        <PickerSelect
          value={this.state.sleeveLength}
          onValueChange={(value) => this.setState({ sleeveLength: value })}
          items={[
            { label: 'Short Sleeve', value: 'short' },
            { label: 'Long Sleeve', value: 'long' },
          ]}
        />

        <Text>Cut:</Text>
        <PickerSelect
          value={this.state.cut}
          onValueChange={(value) => this.setState({ cut: value})}
          items={[
            { label: 'V neck', value: 'V neck'},
            { label: 'Crew neck', value: 'Crew neck'},
            { label: 'Collar', value: 'Collar'},
          ]}
        />
        
        <Button title="Add T-shirt" onPress={this.handleAddTshirt} />
      </View>
    );
  }
}

export default AddTshirtForm;
