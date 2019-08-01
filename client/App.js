import React, { setGlobal, useGlobal, useEffect } from "reactn";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Header, Button } from "react-native-elements";
import { NativeRouter, Route, Link } from "react-router-native";
// import AsyncStorage from '@react-native-community/async-storage';
import axios from "axios";

import Catalogue from "./src/pages/catalogue";
import CreateList from "./src/pages/createList";
import EditList from "./src/pages/editList";

setGlobal({
  cards: [],
  lists: [],
  currentList: {}
});

const Home = () => {
  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/legionBack.jpg")}
          style={{
            width: "100%",
            height: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#000"
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 30 }}>
            Damage-Dealer: Taskforce
          </Text>
        </ImageBackground>
      </View>
      <View>
        <View style={styles.link}>
          <Link to= "/new">
            <Text style={styles.linkText}>New Legion</Text>
          </Link>
        </View>
        <View style={styles.link}>
          <Text style={styles.linkText}>My Legions</Text>
        </View>
        <View style={styles.link}>
          <Link to= "/catalogue">
            <Text style={styles.linkText}>Card Catalogue</Text>
          </Link>
        </View>
        <View style={styles.link}>
          <Text style={styles.linkText}>Donate</Text>
        </View>
      </View>
    </>
  );
};

const HomeIcon = () => (
  <Link to="/">
    <Text style={{color:"#fff"}}>Home</Text>
  </Link>
)

export default function App() {
  const [cards, setCards] = useGlobal("cards");

  const getCards = async () => {
    const result = await axios.get("http://10.0.2.2:8000/cards");
    setCards(result.data);
    
  };

  useEffect(() => {
    getCards();
  }, []);

  return (
    <NativeRouter>
      <View style={styles.overall}>
        <Header
          backgroundColor="#3825B8"
          leftComponent={<HomeIcon />}
          centerComponent={{
            text: "Damage-Dealer: Taskforce",
            style: { color: "#fff", fontSize: 18 }
          }}
        />
        <Route exact path="/" component={Home} />
        <Route path="/new" component={CreateList} />
        {/* <Route path="/lists" component={Lists} /> */}
        <Route path="/edit" component={EditList} />
        <Route path="/catalogue" component={Catalogue} />
      </View>
      
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  overall: {
    flex: 1,
    backgroundColor: "#000"
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    marginBottom: 1,
    backgroundColor: "#2B1C8C"
  },
  buttonTitle: {
    fontSize: 20
  },
  link: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#2B1C8C",
    borderWidth: 1,
    borderColor: '#000',
    height: 40
  },
  linkText: {
    fontSize: 20,
    color: "#fff",
  }
});
