import React, { Component } from 'react';
import { View,Text, } from 'react-native';
import { StyleSheet } from 'react-native';
import api from '../services/api';
import style from '../../styles';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default class main extends Component {

    state = {
        docs: []
    };

    componentDidMount() {
        this.loadproducts();
    }

    loadproducts = async () => {
        const response = await api.get('/products');
        const { docs } = response.data;
        this.setState({ docs });
    };

    renderItem = ({item}) => (
        <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <TouchableOpacity onPress={() => {}}>
                <Text>Acessar</Text>
            </TouchableOpacity>
        </View>
    )

   render(){
       return (
        <View style={style.container}>
            <FlatList
            data={this.state.docs}
            keyExtractor={item => item._id}
            renderItem={this.renderItem}
            />
        </View>
       );
   } 
}
    main.navigationOptions = {
        title: 'Primary',
        headerStyle: {
            backgroundColor: '#2bcbba'
        },
        headerTintColor: "#000"
    }