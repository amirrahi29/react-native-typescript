import { View, Text } from 'react-native'
import React from 'react'

interface ProfileProps{
    myData:string,
    newData:number,
    anyData?:string,
    status:'coder' | 'programmer' | 'it',
    children?: string
}

// we can also use this below code
// type ProfileProps = {
//     myData:string,
//     newData:number
// }

//use with props destructuring
// const Profile = ({myData,newData,anyData}:ProfileProps) => {
//     return (
//       <View>
//         <Text>{myData}</Text>
//         <Text>{newData}</Text>
//         <Text>{anyData}</Text>
//       </View>
//     )
//   }

const Profile = (props:ProfileProps) => {
  return (
    <View>
      <Text>{props.myData}</Text>
      <Text>{props.newData}</Text>
      <Text>{props.anyData}</Text>
      <Text>{props.status}</Text>
      <Text>{props.children}</Text>
    </View>
  )
}

export default Profile