import React, { setGlobal, useGlobal } from 'reactn';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import NestedListView, { NestedRow } from 'react-native-nested-listview';

import CardPicker from '../components/CardPicker'
import { ScrollView } from 'react-native-gesture-handler';

const ranks = ["Commander", "Operative", "Corps", "Special Forces", "Support", "Heavy"]

const EditList = () => {
  const [list, setList] = useGlobal("currentList");
  const [cards, setCards] = useGlobal("cards");

  const calcTotal = () => {
    let total = 0;

    ranks.map((rank) => {
      total += list.cards.Unit[rank].reduce((total, card) => total + parseInt(card.Cost), 0)
      list.cards.Unit[rank].map((card) => {
        card.CurrentUpgrades.map((upgrade) => {
          total += upgrade.Cost
        })
      })
    })

    return total
  }

  return (
    
    <ScrollView>
      <Text h2 h2Style={{color:"#fff"}}>{list.name}</Text>
      <Text h2 h2Style={{color:"#fff"}}>{calcTotal()}/{list.points}</Text>
      {/* <ScrollView> */}
        {ranks.map((rank) => (
          <CardPicker 
          key={rank} 
          rank={rank} 
          cards={cards.unitCards.filter((card) => (card.Rank === rank && card.Faction === list.faction))}
          />
        ))}
      {/* </ScrollView> */}

    </ScrollView>
    
  )
}

export default EditList;