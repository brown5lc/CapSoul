import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

interface AddTshirtFormState {
  color: string;
  sleeveLength: string;
  neckline: string;
}
interface AddTshirtFormProps {
  addTshirt: (color: string, sleeveLength: string, neckline: string) => void;
}

class AddTshirtForm extends Component<AddTshirtFormProps, AddTshirtFormState> {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
      sleeveLength: '',
      neckline: ''
    };
  }

  handleInputChange = (key, value) => {
    this.setState({ [key]: value } as Pick<AddTshirtFormState, keyof AddTshirtFormState>);
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