import React, { Component, useState } from 'react';
import Button from 'react-native-button';
// import FlatListItem from './FlatListItem';
import EditModal from './EditModal';
import Swipeout from '@arlenwang/react-native-swipeout';
import {
    Text, View, Image, Alert, Platform, TextInput, FlatList
} from 'react-native';

export default MovieComponent = (props) => {
    const [movieName, setMovieName] =useState('');
    const [releaseYear, setReleaseYear] = useState('');
    const [movie, setMovie]= useState({id:'', name: '', releaseYear: ''})
    const [modalVisible, setModalVisible] = useState(false);
    
    const renderItem =({item, index}) => (
        <Swipeout autoClose={true} right= {[
            {
                onPress: () => {                                                              
                    
                    //Show edit modal here !
                    setMovie({id: item.id.toString(), name: item.name, releaseYear: item.releaseYear.toString()})
                    setModalVisible(true);
                },
                text: 'Edit', type: 'primary'
            },
            {
                onPress: () => {
                    Alert.alert(
                        'Alert',
                        'Are you sure you want to delete ?',
                        [
                            { text: 'No', onPress: () => console.log('Cancel pressed'), style: 'cancel' },
                            {
                                text: 'Yes', onPress: () => { 
                                    //Call event, map in Container   
                                    props.onDeleteItemAction(item.id);                                                                     
                                }
                            },
                        ],
                        { cancelable: true }
                    );
                },
                text: 'Delete', type: 'delete'
            }
        ]}>
        <View style={{
            flex: 1,
        }}>
            <Text style={{
                padding: 10,
                fontWeight: 'bold',
                fontSize: 17,
                color: 'white',
                backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
            }}>
                {`${item.name}, releaseYear=${item.releaseYear}`}
            </Text>
        </View>                                
    </Swipeout>
    )
        return (
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                <Text style={{ margin: 10, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>
                    Redux Saga tutorials - Movies list
                </Text>
                <Text style={{ margin: 10, color: 'black', fontSize: 20 }}>
                    New movie information
                </Text>
                <View style={{ height: 100, margin: 10 }}>
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1 }}
                        onChangeText={(text) => setMovieName(text)}
                        value={movieName}
                        placeholder='Enter new movie name'
                    />
                    <TextInput style={{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120 }}
                        onChangeText={(text) => setReleaseYear(text)}
                        value={releaseYear}
                        placeholder='Release year'
                        keyboardType='numeric'
                    />
                </View>
                <View style={{ height: 70, flexDirection: 'row' }}>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => {
                            props.onFetchMovies('asc');                            
                        }}>
                        Fetch movies
                    </Button>
                    <Button
                        containerStyle={{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
                        style={{ fontSize: 18, color: 'white' }}
                        onPress={() => { 
                            if (!movieName.length || !releaseYear.length) {
                                alert('You must enter movie name and release Year');
                                return;
                            }                 
                            props.onAddMovie({name: movieName, releaseYear: releaseYear});
                            setMovieName('');
                            setReleaseYear('');
                        }}>
                        Add Movie
                    </Button>
                </View>
                <FlatList
                    data={props.movies}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                />
                <EditModal modalVisible={modalVisible} setModalVisible={setModalVisible} movie={movie} setMovie={setMovie}  movieComponent={props}/> 
            </View>);
    
}