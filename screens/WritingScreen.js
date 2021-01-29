import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class WritingScreen extends React.Component{
    render(){
        return (
            <View style = {styling.container}>
                <Text style = {{textAlign : 'center', fontSize : 23, marginBottom : 30}}>
                    Start writing your story below
                </Text>

                <View style = {styling.inputView}>
                    <TextInput
                    placeholder = "Story Title"
                    style = {styling.inputBox}>
                    </TextInput>
                </View>

                <View style = {styling.inputView}>
                    <TextInput
                    placeholder = "Author"
                    style = {styling.inputBox}>
                    </TextInput>
                </View>

                <View style = {styling.inputView}>
                    <TextInput
                    placeholder = "Write your story"
                    style = {styling.inputBox}
                    multiline = {true}>
                    </TextInput>
                </View>
            </View>
        );
    }
}

const styling = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputView:{
        flexDirection: 'row',
        margin: 20
      },
      inputBox:{
        width: 200,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20
      },
})