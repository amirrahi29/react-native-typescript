import { View, Text } from 'react-native'
import React from 'react'
import ToDoUncontrolledComponent from './ToDoUncontrolledComponent'
import Profile from './Profile'

const App = () => {
  return (
    <>
    <View>
      <Profile myData = {'amir'} status='it' newData = {38}  />
      <Profile myData = {'amir'} status='coder' newData = {38} anyData = 'Helooooooooooo' />

      <Profile myData = {'amir'} status='it' newData = {38}>
        passing text directly
      </Profile>
      
    </View>
    <ToDoUncontrolledComponent/>
    </>
  )
}

export default App