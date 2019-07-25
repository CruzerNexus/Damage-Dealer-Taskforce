import React, { setGlobal, useGlobal, useEffect } from 'reactn';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import NestedListView, { NestedRow } from 'react-native-nested-listview';

const Create = () => {
  const [list, setList] = useGlobal("list");

  return (
    <>
      <View>
        <Input 
          placeholder='List Name'
          inputStyle={{
            color: '#fff'
          }}
        />
        <Input 
          placeholder='Point Limit'
        />
        <Text>Choose a Faction:</Text>
        <Button 
        large
        title='Rebel' 
        />
        <Button 
        large
        title='Imperial'
        />
        <Button 
        large
        title='Republic' 
        />
        <Button 
        large
        title='Separatist' 
        />
      </View>
    </>
  )
}

const listStyles= StyleSheet.create({
  inputText: {
    color: '#fff'
  }
})

export default Create;
