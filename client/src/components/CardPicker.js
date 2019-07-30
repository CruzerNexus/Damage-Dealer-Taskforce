import React, { setGlobal, useGlobal, useState } from 'reactn';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text, Overlay } from 'react-native-elements';
import NestedListView, { NestedRow } from 'react-native-nested-listview';
import { ScrollView } from 'react-native-gesture-handler';


const Alter = ({index, rank}) => {
  const [alter, setAlter] = useState(false);
  const [list, setList] = useGlobal("currentList");
  const card = list.cards[rank][index];

  const remove = () => {
    setList({
      ...list,
      cards: {
        ...list.cards,
        [rank]: list.cards[rank].filter((c, i) => i !== index)
      }
    });
    setAlter(false);
  }

  const clone = () => {
    setList({
      ...list,
      cards: {
        ...list.cards,
        [rank]: [...list.cards[rank], card]
      }
    });
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

const Choice = ({card, onPress}) => {
  const [list, setList] = useGlobal("currentList");

  const count = () => {
    let counter = 0;
    list.cards.Unit.forEach((c) => {
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
    setList({
      ...list,
      cards: {
        ...list.cards,
        [rank]: [...list.cards.Unit, card]
      }
    })
  }
  

  return (
    <>
      <Overlay isVisible={show}>
        <ScrollView>
          <Text>{rank}</Text>
          {cards && cards.map((card) => (
            <Choice key={card.Name} card={card} onPress={() => pickCard(card)} />
          ))}
          <Button title="Done" onPress={() => setShow(false)} />
        </ScrollView>
      </Overlay>
      <ScrollView>
        <Text style={{ color: "#fff"}}>{rank}</Text>
          {list.cards.Unit
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
              <Text>{index}</Text>
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
