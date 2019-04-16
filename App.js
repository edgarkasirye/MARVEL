import React, { Component } from 'react';
import { Platform, StyleSheet,Text, View, Dimensions } from 'react-native';
import { Header, Content, TabHeading, Tabs, Tab, Left, Title, Container, Button, Icon,Body } from 'native-base';
import Character from "./Components/Character"
import CharacterDetail from "./Components/CharacterDetail"
import {getCharacters} from "./api"
import CharacterList from "./Components/CharacterList"
import Head from "./Components/HeaderText"


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
      <Container style={{backgroundColor: "#170923" ,flex:1}}>

       <Header androidStatusBarColor = "#170923" transparent style = {{backgroundColor: '#170923'}}>

       <Button transparent style = {{flex : 1}}>
       <Icon name="ios-menu"/> 
       </Button> 
          <Body style = {{flex : 6}}> 
             <Head edgar = "THE MARVEL CINEMATIC UNIVERSE"/>  
          </Body>
      
      </Header>
      <Tabs initialPage={1} >
        <Tab heading={
          <TabHeading  style = {{backgroundColor: "#7B3E4B"}}>
             <Text style = {{color : "white"}}>Movies</Text>
          </TabHeading>
        }> 
        <Content>
            <Text>Kampala</Text> 
        </Content>
        </Tab> 

        <Tab heading = {
          <TabHeading style = {{backgroundColor: "#7B3E4B"}}>
            <Text style = {{color : "white"}}>Characters</Text>
          </TabHeading>
        }> 
        <Content>
          <CharacterList characters = {characters} onEndReached = {this.handleEndreached}/>
        </Content>
          
        </Tab>

        <Tab heading={
          <TabHeading style = {{backgroundColor: "#7B3E4B"}}>
            <Text style = {{color : "white"}}>Series</Text> 
          </TabHeading>

        }> 
        <Content>
          <Text>Uganda</Text>
        </Content> 
        </Tab>


      </Tabs>
   
      
 
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#170923',
    flexDirection: "row"
  },

});
