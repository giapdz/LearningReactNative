import React, { Component ,useRef } from 'react';
import Button from 'react-native-button';
import Swipeout from '@arlenwang/react-native-swipeout';

import {
    Text, View, Alert, Platform, TextInput
} from 'react-native';
import EditModal from './EditModal';

export default class FlatListItem extends Component {
    constructor(props) {
        super(props);        
        this.state = {

        };
    }
    render() {        
        const swipeSettings = {
            autoClose: true,
            right: [
                {
                    onPress: () => {                                                              
                        const { movieComponent } = this.props;
                        //Show edit modal here !
                        movieComponent.refs.editModal.showEditModal({...this.props});
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
                                        const { movieComponent } = this.props;  
                                        //Call event, map in Container   
                                        movieComponent.props.onDeleteItemAction(this.props.id);                                                                     
                                    }
                                },
                            ],
                            { cancelable: true }
                        );
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.id,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: 'white',
                        backgroundColor: (this.props.itemIndex % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${this.props.name}, releaseYear=${this.props.releaseYear}`}
                    </Text>
                </View>                                
            </Swipeout>
        );
    }
}