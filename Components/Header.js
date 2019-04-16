import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, Dimensions } from 'react-native';
import Image from "react-native-scalable-image"
<Header hasTabs androidStatusBarColor = '#FFFFF' >
<Left>
  <Title>MARVEL</Title>
</Left>

</Header>

<Tabs initialPage={1}>
<Tab heading={
  <TabHeading >
     <Text>Movies</Text>
  </TabHeading>
}>
<Content>

</Content>
</Tab>

<Tab heading = {
  <TabHeading>
    <Text>Characters</Text>
  </TabHeading>
}> 
<Content>

</Content>
  
</Tab>

<Tab heading={
  <TabHeading>
    <Text>Series</Text>
  </TabHeading>

}>
<Content>

</Content>
</Tab>


</Tabs>