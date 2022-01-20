import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

export default class Profile extends Component {
  constructor(){
    super()
    this.state={
      name:"",
      displayName:""
    }
  }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    
                }}>
                <TextInput
                placeholder={"Your Name"}
                style={styles.name}
                onChangeText={(text)=>{
                  this.setState({name:text})
                }}
                >
                </TextInput>

                <TouchableOpacity onPress={()=>{
                  this.setState({displayName:this.state.name})
                }}
                style={styles.saveButton}
                >
                <Text style={{color:'white',fontWeight:"bold"}}>Save</Text>
                </TouchableOpacity>

              <Text style={{alignSelf:"center",fontWeight:"bold"}}>Name: {this.state.displayName}</Text>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
name:{
  borderWidth:2,
  borderRadius:2,
  width:100,
  height:20,
  textAlign:"center",
  alignSelf:"center"
},
saveButton:{
  borderRadius:2,
  borderWidth:2,
  width:50,
  height:23,
  alignSelf:"center",
  textAlign:"center",
  margin:20,
  backgroundColor:"black"
}
})