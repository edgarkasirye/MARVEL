import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Dimensions } from 'react-native';
import { Header, Content, TabHeading, Tabs, Tab, Left, Title } from 'native-base';
import Character from "./Components/Character"
import CharacterDetail from "./Components/CharacterDetail"
import {getCharacters} from "./api"
import CharacterList from "./Components/CharacterList"

const OFFSET_SIZE = 20;

export default class App extends Component {

  state = {
    characters: []

  }
  OFFSET = 0;

  handleEndreached = () => {
    this.OFFSET += OFFSET_SIZE;
    if (this.OFFSET>1480){
      return
    }
    this.loadCharacters();
  }

  loadCharacters = async () => {
    try{
      let Data = await getCharacters(this.OFFSET);
      let {characters} = this.state;
      this.setState({characters:[...characters,...Data.data.data.results]})
    }
    catch(error){
      alert(error);

    }
  }
  componentDidMount(){
    this.loadCharacters();

  }

  render() {

    let {characters} = this.state;
    let { width } = Dimensions.get("window");
    return (
      <View style={styles.container}>
        <CharacterList characters = {characters} onEndReached = {this.handleEndreached}/>
        </View>
 
    
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170923',
    flexDirection: "row"
  },

});
