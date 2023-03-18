import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'

const ToDoUncontrolledComponent = () => {

  const inputRef = useRef<TextInput>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [myList, setMyList] = useState<string[]>([]);

  const addToDo = () => {
    console.log(inputValue);
    if (inputValue) {
      setMyList([...myList, inputValue]);
      setInputValue('');
    }
  }

  return (
    <View style={{ backgroundColor: 'white', flex: 1, padding: 8 }}>

      <Text style={{
        color: 'black',
        fontSize: 24, fontWeight: 'bold'
      }}>My ToDO App</Text>

      <TextInput
        ref={inputRef}
        placeholder='Enter title'
        style={{
          marginTop: 8,
          backgroundColor: 'pink',
          borderRadius: 16,
          textAlign: 'center',
          color: 'black'
        }}
        onChangeText={(text) => setInputValue(text)}
        value={inputValue}
      />

      <TouchableOpacity
        onPress={addToDo}
        style={{
          backgroundColor: 'black',
          marginTop: 8,
          padding: 12,
          alignItems: 'center',
          borderRadius: 16
        }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Add</Text>
      </TouchableOpacity>

      {
        myList.length > 0 ?
          myList.map((item, index) => {
            return (
              <Text key={index} style={{ color: 'black' }}>{item}</Text>
            );
          }) : <Text style={{ color: 'black' }}>No ToDo's</Text>
      }


    </View>
  )
}

export default ToDoUncontrolledComponent
