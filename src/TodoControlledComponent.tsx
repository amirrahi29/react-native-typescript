import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const TodoControlledComponent = () => {

    const [title, setTitle] = useState('');
    const [myList, setMyList] = useState<string[]>([]);

    const handleTitle=(e:string)=>{
        setTitle(e);
    }

    const addToDo=()=>{
        setMyList([...myList,title]);
        setTitle("");
    }

    return (
        <View style={{ backgroundColor: 'white', flex: 1, padding: 8 }}>

            <Text style={{
                color: 'black',
                fontSize: 24, fontWeight: 'bold'
            }}>My ToDO App</Text>

            <TextInput
            onChangeText={(e)=>handleTitle(e)}
                placeholder='Enter title'
                style={{
                    marginTop: 8,
                    backgroundColor: 'pink',
                    borderRadius: 16,
                    textAlign: 'center',
                    color: 'black'
                }}
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
                myList.length>0?
                myList.map((item,index)=>{
                    return (
                        <>
                        <Text style={{color:'black'}}>{item}</Text>
                        </>
                    );
                }):<Text style={{color:'black'}}>No ToDo's</Text>
            }


        </View>
    )
}

export default TodoControlledComponent