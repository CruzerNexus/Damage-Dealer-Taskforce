import React, { setGlobal, useGlobal, useState } from 'reactn';
import { View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { Redirect } from "react-router-native";

const CreateList = () => {
  const [list, setList] = useGlobal("currentList");
  const [faction, setFaction] = useState(null);
  const [name, setName] = useState("");
  const [points, setPoints] = useState("");
  const [finished, setFinished] =useState(false);

  const generateList = () => {
    setList({
      name,
      points,
      faction,
      cards: {
        Command: [],
        Unit: {
          Commander: [],
          Operative: [],
          Corps: [],
          "Special Forces": [],
          Support: [],
          Heavy: [],
        },
        Upgrade: [],
        Battleplan: [],
      }
    })
    setFinished(true);
  }

  return (
    <>
      {finished && <Redirect to="/edit" />}
      <View>
        <Input 
          placeholder='List Name'
          inputStyle={{
            color: '#fff'
          }}
          onChangeText={(text) => setName(text)}
        />
        <Input 
          placeholder='Point Limit'
          inputStyle={{
            color: '#fff'
          }}
          onChangeText={(text) => setPoints(text)}
        />
        <Text style={{fontSize: 25, color: '#fff'}}>Choose a Faction:</Text>
        <Button 
        large
        title='Rebel'
        onPress={() => setFaction("Rebel")}
        buttonStyle={{
          marginBottom: 5,
          backgroundColor: "#2B1C8C",
        }}
        />
        <Button 
        large
        title='Imperial'
        onPress={() => setFaction("Imperial")}
        buttonStyle={{
          marginBottom: 5,
          backgroundColor: "#2B1C8C",
        }}
        />
        <Button 
        large
        title='Republic'
        onPress={() => setFaction("Republic")}
        buttonStyle={{
          marginBottom: 5,
          backgroundColor: "#2B1C8C",
        }}
        />
        <Button 
        large
        title='Separatist'
        onPress={() => setFaction("Separatist")}
        buttonStyle={{
          backgroundColor: "#2B1C8C",
          marginBottom: 5,
        }}
        />
        <Button 
        large
        title='Submit'
        onPress={generateList}
        />
      </View>
    </>
  )
}

export default CreateList;
