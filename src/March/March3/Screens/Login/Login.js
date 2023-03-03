import React from 'react';
import {Text, TextInput, View} from 'react-native';

const Login = () => {
  const [number, setNumber] = useState(second);

  return (
    <View>
      <Text>Enter your phone number</Text>
      <TextInput
        placeholder="Phone Number..."
        value={number}
        onChangeText={newNum => setNumber(newNum)}
      />
    </View>
  );
};

export default Login;
