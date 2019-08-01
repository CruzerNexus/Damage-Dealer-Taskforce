import React, { useGlobal, useState } from 'reactn';
import { View, StyleSheet } from 'react-native';
import { Button, Input, Text, Overlay } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


// const UpgradeList = () => {
//   const [cards, setCards] = useGlobal("cards");
//   const upgradeData = [
//     {
//       title: 'Config',
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Config")
//     },
//     {
//       title: 'Command',
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Command")
//     },
//     {
//       title: 'Comms',
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Comms")
//     },
//     {
//       title: 'Crew',
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Crew")
//     },
//     {
//       title: 'Force',
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Force")
//     },
//     {
//       title: 'Gear',
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Gear")
//     },
//     {
//       title: "Generator",
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Generator")
//     },
//     {
//       title: "Grenades",
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Grenades")
//     },
//     {
//       title: "Hardpoint",
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Hardpoint")
//     },
//     {
//       title: "Heavy Weapons",
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Heavy Weapon")
//     },
//     {
//       title: "Personnel",
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Personnel")
//     },
//     {
//       title: "Pilot",
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Pilot")
//     },
//     {
//       title: "Training",
//       items: cards.upgradeCards.filter(c => c.UpgradeType === "Training")
//     }
//   ]

//   return (
//     <>
//       <ScrollView>
//         {upgradeData.map((upgradeType) => (
//           <View style={{padding: 20}}>
//             <Text style={{fontWeight: "bold"}}>{upgradeType.title}</Text>
//             {upgradeType.items
//             .filter((upgradeCard) => {
//               return card.Upgrades.includes(upgradeCard.UpgradeType)
//             })
//             .map((upgradeCard) => {
//               <View>
//                 <Text>{upgradeCard.Name}</Text>
//               </View>
//             })}
//           </View>
//         ))}
//       </ScrollView>
//     </>
//   )
// }

function groupBy(list, keyGetter) {
  const map = new Map();
  list.forEach((item) => {
       const key = keyGetter(item);
       const collection = map.get(key);
       if (!collection) {
           map.set(key, [item]);
       } else {
           collection.push(item);
       }
  });
  return map;
}

const upgradeTypes = ["Config", "Command", "Comms", "Crew", "Force", "Gear", "Generator", "Grenades", "Hardpoint", "Heavy Weapons", "Personnel", "Pilot", "Training"]


const Upgrade = ({index, rank}) => {
  const [list, setList] = useGlobal("currentList");
  const [cards, setCards] = useGlobal("cards");
  const card = list.cards.Unit[rank][index];
  const [upgrade, setUpgrade] = useState(false);

  const addUpgrade = (upgradeCard) => {
    const newList = Object.assign({}, list)
    const upgradeExists = newList.cards.Unit[rank][index].CurrentUpgrades.filter((u) => u.Name === upgradeCard.Name).length > 0
    if(upgradeExists) return;

    newList.cards.Unit[rank][index].CurrentUpgrades.push(upgradeCard)
    setList(newList);
  }

  const removeUpgrade = (upgradeCard) => {
    const newList = Object.assign({}, list)
    newList.cards.Unit[rank][index].CurrentUpgrades = newList.cards.Unit[rank][index].CurrentUpgrades.filter((u) => u.Name !== upgradeCard.Name)
    
    setList(newList);
  }

  const validUpgrades = cards.upgradeCards.filter((upgradeCard) => {
    return card.Upgrades.includes(upgradeCard.UpgradeType)
  })

  const groupedUpgrades = groupBy(validUpgrades, (upgradeCard) => upgradeCard.UpgradeType)

  return(
    <View>
      <Button title="Add Upgrades" onPress={() => setUpgrade(true)} />
      <Overlay isVisible={upgrade}>
        <>
          <ScrollView>
            {upgradeTypes.map((upgradeType, i) => {
              const upgrades = groupedUpgrades.get(upgradeType)
              if(!upgrades) {
                return null;
              }
              return (
                <View style={{padding: 20}} key={upgradeType + i}>
                  <Text style={{fontWeight: "bold"}}>
                    {upgradeType}
                  </Text>
                  {upgrades.map((upgradeCard, j) => (
                    <View key={upgradeCard.Name + j} style={{flex: 1, flexDirection: "row" ,justifyContent: "space-between"}}>
                      <Text>{upgradeCard.Name}</Text>
                      <View style={{ flexDirection: "row"}}>
                        <Button title="+" onPress={() => addUpgrade(upgradeCard)} />
                        <Button title="-" onPress={() => removeUpgrade(upgradeCard)} />
                      </View>
                    </View>
                  ))}
                </View>
              )
            })}
          </ScrollView>
          <Button title="Done" onPress={() => setUpgrade(false)} />
        </>
      </Overlay>
    </View>
  )
}

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


  return(
    <>
      <Button title=":" onPress={() => setAlter(true)} />
      <Overlay isVisible={alter}>
        <View>
          <Upgrade index={index} rank={rank}/>
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
    card.CurrentUpgrades = []
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
            <View key={card.Name + index}>
              <View  style={{ backgroundColor: "#2B1C8C", color: "#fff", justifyContent: "space-between", flexDirection: "row"}}>
                <Text style={{ color: "#fff" }}>
                  {card.Name}
                </Text>
                <Text style={{ color: "#fff" }}>
                  {card.Cost}pts
                </Text>
                <Alter index={index} rank={card.Rank} />
              </View>
              <View>
                {card.CurrentUpgrades.map((upgrade, i) => (
                  <View key={i} style={{ backgroundColor: "#2B1C77" }}>
                    <Text style={{ color: "#fff" }}>{upgrade.Name}</Text>
                  </View>
                ))}
              </View>
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
