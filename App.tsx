import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const CalculatorApp: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [theme, setTheme] = useState<string>('light');

  const handleButtonPress = (value: string) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const styles = StyleSheet.create({
      container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme === 'light' ? 'white' : 'black',
    },
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      fontSize: 24,
      textAlign: 'right',
      backgroundColor: theme === 'light' ? 'white' : 'black',
      color: theme === 'light' ? 'black' : 'white',
    },
    buttonContainer: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    button: {
      width: '25%',
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor: theme === 'light' ? 'lightgray' : 'gray',
    },
    buttonText: {
      fontSize: 24,
      color: theme === 'light' ? 'black' : 'white',
    },
  });

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={input}
        editable={false}
      />
      <View style={styles.buttonContainer}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C'].map((value) => (
          <TouchableOpacity
            key={value}
            style={styles.button}
            onPress={() => {
              if (value === '=') {
                handleCalculate();
              } else if (value === 'C') {
                handleClear();
              } else {
                handleButtonPress(value);
              }
            }}
          >
            <Text style={styles.buttonText}>{value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={toggleTheme}
      >
        <Text style={styles.buttonText}>Toggle Theme</Text>
      </TouchableOpacity>
    </View>
  );
};
 
export default CalculatorApp;
