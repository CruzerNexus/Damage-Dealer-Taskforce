import React, { setGlobal, useGlobal, useEffect } from 'reactn';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import NestedListView, { NestedRow } from 'react-native-nested-listview';

const CommandCard = ({ _id, Name, imageUrl }) => {
  
  return (
    <View>
      <View>
        <Text style={cardStyles.text}>{Name}</Text>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 418, height: 600 }}
        />
      </View>
    </View>
  )
}

const Unit = ({ _id, Name, imageUrl }) => {
  
  return (
    <View>
      <View>
        <Text style={cardStyles.text}>{Name}</Text>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 420, height: 294 }}
        />
      </View>
    </View>
  )
}

const Upgrade = ({ _id, Name, imageUrl }) => {
  
  return (
    <View>
      <View>
        <Text style={cardStyles.text}>{Name}</Text>
        <Image
          source={{ uri: imageUrl }}
          style={{ width: 200, height: 309 }}
        />
      </View>
    </View>
  )
}

const BattlePlan = ({ id, name }) => {
  
  return (
    <View>
      <View>
        <Text style={cardStyles.text}>{name}</Text>
      </View>
    </View>
  )
}

const Catalogue = () => {
  const [cards, setCards] = useGlobal("cards");
  const commandCardData = [
    {
      title: 'Command Cards',
      items: [
        {
          title: 'Rebel',
          items: cards.commandCards.filter(c => c.Faction === "Rebel")
        },
        {
          title: 'Imperial',
          items: cards.commandCards.filter(c => c.Faction === "Imperial")
        },
        {
          title: 'Republic',
          items: cards.commandCards.filter(c => c.Faction === "Galactic Republic")
        },
        {
          title: 'Separatist',
          items: cards.commandCards.filter(c => c.Faction === "Separatist Alliance")
        },
        {
          title: 'Neutral',
          items: cards.commandCards.filter(c => c.Faction === "Neutral")
        }
      ],
    },
  ]
  const unitCardData = [
    {
      title: 'Unit Cards',
      items: [
        {
          title: 'Rebel',
          items: cards.unitCards.filter(c => c.Faction === "Rebel")
        },
        {
          title: 'Imperial',
          items: cards.unitCards.filter(c => c.Faction === "Imperial")
        },
        {
          title: 'Republic',
          items: cards.unitCards.filter(c => c.Faction === "Galactic Republic")
        },
        {
          title: 'Separatist',
          items: cards.unitCards.filter(c => c.Faction === "Separatist Alliance")
        },
      ],
    },
  ]
  const upgradeCardData = [
    {
      title: 'Upgrade Cards',
      items: [
        {
          title: 'Rebel',
          items: cards.upgradeCards.filter(c => c.Faction === "Rebel")
        },
        {
          title: 'Imperial',
          items: cards.upgradeCards.filter(c => c.Faction === "Imperial")
        },
        {
          title: 'Republic',
          items: cards.upgradeCards.filter(c => c.Faction === "Galactic Republic")
        },
        {
          title: 'Separatist',
          items: cards.upgradeCards.filter(c => c.Faction === "Separatist Alliance")
        },
        {
          title: 'Neutral',
          items: cards.upgradeCards.filter(c => c.Faction === "Neutral")
        }
      ],
    },
  ]
  const battlePlanCardData = [
    {
      title: 'Battle Plan Cards',
      items: [
        {
          title: 'Deployment',
          items: cards.battlePlanCards.filter(c => c.type === "deployment")
        },
        {
          title: 'Condition',
          items: cards.battlePlanCards.filter(c => c.type === "condition")
        },
        {
          title: 'Objective',
          items: cards.battlePlanCards.filter(c => c.type === "objective")
        },
      ]
    }
  ]

    return (
      <>
        <ScrollView>
          <View style={cardStyles.container}>
            <NestedListView
              style={StyleSheet.nList} 
              data={commandCardData}
              getChildrenName={(node) => 'items'}
              renderNode={(node, level) => {
                if(node.Name) {
                  return (
                    <CommandCard key={node._id} Name={node.Name} imageUrl={node.imageUrl} />
                  )
                } else {
                  return (
                    <NestedRow
                      level={level}
                    >
                      <Text>{node.title}</Text>
                    </NestedRow>
                  )
                }
              }}
            />
            <NestedListView
              style={StyleSheet.nList} 
              data={unitCardData}
              getChildrenName={(node) => 'items'}
              renderNode={(node, level) => {
                if(node.Name) {
                  return (
                    <Unit key={node._id} Name={node.Name} imageUrl={node.imageUrl} />
                  )
                } else {
                  return (
                    <NestedRow
                      level={level}
                    >
                      <Text>{node.title}</Text>
                    </NestedRow>
                  )
                }
              }}
            />
            <NestedListView
              style={StyleSheet.nList} 
              data={upgradeCardData}
              getChildrenName={(node) => 'items'}
              renderNode={(node, level) => {
                if(node.Name) {
                  return (
                    <Upgrade key={node._id} Name={node.Name} imageUrl={node.imageUrl} />
                  )
                } else {
                  return (
                    <NestedRow
                      level={level}
                    >
                      <Text>{node.title}</Text>
                    </NestedRow>
                  )
                }
              }}
            />
            <NestedListView
              style={StyleSheet.nList} 
              data={battlePlanCardData}
              getChildrenName={(node) => 'items'}
              renderNode={(node, level) => {
                if(node.name) {
                  return (
                    <BattlePlan key={node._id} name={node.name} />
                  )
                } else {
                  return (
                    <NestedRow
                      level={level}
                    >
                      <Text>{node.title}</Text>
                    </NestedRow>
                  )
                }
              }}
            />
          </View>
          {/* {cards.commandCards.map((card) => (
            <CommandCard key={card._id} Name={card.Name} imageUrl={card.imageUrl} />
          ))}
          {cards.unitCards.map((card) => (
            <Unit key={card._id} Name={card.Name} imageUrl={card.imageUrl} />
          ))}
          {cards.upgradeCards.map((card) => (
            <Upgrade key={card._id} Name={card.Name} imageUrl={card.imageUrl} />
          ))}
          {cards.battlePlanCards.map((card) => (
            <BattlePlan key={card.id} name={card.name} />
          ))} */}
        </ScrollView>
      </>
    )
}

const cardStyles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: "#000"
  },
  container: {
    backgroundColor: 'rgb(255, 255, 255)',
  },
  node: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'rgb(0, 0, 0)',
  },
})

export default Catalogue;