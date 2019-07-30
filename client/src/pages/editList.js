import React, { setGlobal, useGlobal } from 'reactn';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import NestedListView, { NestedRow } from 'react-native-nested-listview';

import CardPicker from '../components/CardPicker'

const ranks = ["Commander", "Operative", "Corps", "Special Forces", "Support", "Heavy"]

const EditList = () => {
  const [list, setList] = useGlobal("currentList");
  const [cards, setCards] = useGlobal("cards");

  const calcTotal = () => {
    let total = 0;

    total += list.cards.Unit["Commander"].reduce((total, card) => total + parseInt(card.Cost), 0)

    return total
  }

  return (
    <>
      <View>
        <Text h2 h2Style={{color:"#fff"}}>{list.name}</Text>
        <Text h2 h2Style={{color:"#fff"}}>{calcTotal()}/{list.points}</Text>
        {/* <CardPicker rank="Commander" cards={cards.unitCards.filter((card) => (card.Rank === "Commander" && card.Faction === list.faction))}/>
        <CardPicker rank="Operative" cards={cards.unitCards.filter((card) => (card.Rank === "Operative" && card.Faction === list.faction))}/>
        <CardPicker rank="Corps" cards={cards.unitCards.filter((card) => (card.Rank === "Corps" && card.Faction === list.faction))}/>
        <CardPicker rank="Special Forces" cards={cards.unitCards.filter((card) => (card.Rank === "Special Forces" && card.Faction === list.faction))}/>
        <CardPicker rank="Support" cards={cards.unitCards.filter((card) => (card.Rank === "Support" && card.Faction === list.faction))}/>
        <CardPicker rank="Heavy" cards={cards.unitCards.filter((card) => (card.Rank === "Heavy" && card.Faction === list.faction))}/> */}
        {ranks.map((rank) => (
          <CardPicker rank={rank} cards={cards.unitCards.filter((card) => (card.Rank === rank && card.Faction === list.faction))}/>
        ))}

      </View>
    </>
  )
}

export default EditList;