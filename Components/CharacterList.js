import React, { PureComponent } from 'react';
import { FlatList } from 'react-native';
import Character from "./Character";


export default class CharacterList extends PureComponent {

    _keyExtractor = (item) => item.id
    _renderItem = ({item}) => {
    let { path, extension} = item.thumbnail;

        return (
            <Character text={item.name} imageSource = {this.getImageSource(path, extension)}>
            </Character>
        )
    }

    getImageSource = (url, extension="jpg", size ='portrait_large') => {
        return `${url}/${size}.${extension}`

    }

    render() {
        return (
            <FlatList data={this.props.characters} keyExtractor = {this._keyExtractor} renderItem = {this._renderItem} numColumns ={3} onEndReached = {this.props.onEndReached}>

            </FlatList>
        )
    }
}