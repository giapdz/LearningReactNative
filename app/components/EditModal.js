import React, { Component, useState, useRef } from 'react';
import {
    AppRegistry, FlatList, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions,
    TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
var screen = Dimensions.get('window');
export default EditModal =(props)=> {
    
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         id: '',
    //         name: '',
    //         releaseYear: ''
    //     };
    //     this.myModal =React.createRef();
    // }
    // showEditModal = (item) => {        
    //     this.setState({   
    //         id: item.id.toString(),         
    //         name: item.name,
    //         releaseYear: item.releaseYear.toString(),            
    //     });  
    //     this.myModal.current.open();      
    // }
    // render() {
        return (
            <Modal
                // ref={this.myModal}
                isOpen={!!props.modalVisible}
                style={{
                    justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 0, shadowRadius: 10,
                    width: screen.width - 80, height: 280
                }}
                position='center'
                backdrop={true}
                onClosed={() => {
                    // alert("Modal closed");
                    props.setModalVisible(false) 
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>Movie's information</Text>
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 20,
                        marginBottom: 10,
                        borderBottomWidth: 1
                    }}
                    onChangeText={(text) => props.setMovie(prevState=>({...prevState, name:text}))}
                    placeholder="Movie's name"
                    value={props.movie?.name}
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 10,
                        marginBottom: 20,
                        borderBottomWidth: 1
                    }}

                    onChangeText={(text) => props.setMovie(prevState=>({...prevState, releaseYear:text}))}
                    placeholder="Year of release"
                    value={props.movie?.releaseYear}
                />
                <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 70,
                        marginRight: 70,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen'
                    }}
                    onPress={() => {
                        if (props.movie?.name.length == 0 || props.movie?.releaseYear.length == 0) {
                            alert("You must enter food's name and description");
                            return;
                        }
                        //Update existing Movie => define in Container                        
                        props.movieComponent.onUpdateItemAction(props.movie);
                        props.setModalVisible(!props.modalVisible)                      
                    }}>
                    Save
                </Button>

            </Modal>
        );
    // }
}