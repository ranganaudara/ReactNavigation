import React from 'react';
import { View, Text } from 'react-native';


export default class SecondScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Second Screen</Text>
            </View>
        );
    }
}