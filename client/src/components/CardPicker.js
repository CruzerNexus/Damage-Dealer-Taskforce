import React, { setGlobal, useGlobal, useState } from 'reactn';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text, Overlay } from 'react-native-elements';
import NestedListView, { NestedRow } from 'react-native-nested-listview';
import { ScrollView } from 'react-native-gesture-handler';


const Alter = ({index, rank}) => {
  const [alter, setAlter] = useState(false);
  const [list, setList] = useGlobal("currentList");
  const card = list.cards.Unit[rank][index];

  const remove = () => {
    const newList = Object.assign({}, list)
    newList.cards.Unit[rank].splice(index, 1);
    setList(newList);

    setAlter(false);
  }

  const clone = () => {
    const newList = Object.assign({}, list)
    newList.cards.Unit[rank].push(card);
    setList(newList);
  }

  const addUpgrades = () => {

  }

  return(
    <>
      <Button title=":" onPress={() => setAlter(true)} />
      <Overlay isVisible={alter}>
        <View>
          <Button title="Add Upgrades" />
          <Button title="Clone" onPress={clone}/>
          <Button title="Remove" onPress={remove} />
          <Button title="Done" onPress={() => setAlter(false)} />
        </View>
      </Overlay>
    </>
  )
}

const Choice = ({card, rank, onPress}) => {
  const [list, setList] = useGlobal("currentList");

  const count = () => {
    let counter = 0;
    list.cards.Unit[rank].forEach((c) => {
      if (card.Name === c.Name ){
        counter++;
      }
    })
    return counter;
  }

  return(
    <View style={{ padding: 5 }}>
      <Text>{card.Name}{count()}</Text>
      <Button title="+" onPress={onPress}/>
    </View>
  )
}

const CardPicker = ({cards, rank}) => {
  const [show, setShow] = useState(false);
  const [list, setList] = useGlobal("currentList");

  const pickCard = (card) => {
    const newList = Object.assign({}, list)
    newList.cards.Unit[rank].push(card)

    setList(newList);
  }
  

  return (
    <>
      <Overlay isVisible={show}>
        <ScrollView>
          <Text>{rank}</Text>
          {cards && cards.map((card) => (
            <Choice rank={rank} key={card.Name} card={card} onPress={() => pickCard(card)} />
          ))}
          <Button title="Done" onPress={() => setShow(false)} />
        </ScrollView>
      </Overlay>
      <ScrollView>
        <Text style={{ color: "#fff"}}>{rank}</Text>
          {list.cards.Unit[rank]
          .filter((card => card.Rank === rank))
          .map((card, index) => (
            <View key={card.Name + index} style={{ backgroundColor: "#2B1C8C", color: "#fff", justifyContent: "space-between", flexDirection: "row"}}>
              <Text style={{ color: "#fff" }}>
                {card.Name}
              </Text>
              <Text style={{ color: "#fff" }}>
                {card.Cost}pts
              </Text>
              <Alter index={index} rank={card.Rank} />
            </View>
          ))}
        <Button
        title="+"
        onPress={() => setShow(true)}
        />
      </ScrollView>
    </>
  )
}

export default CardPicker;
