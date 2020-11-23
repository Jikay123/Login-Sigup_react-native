/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{Component} from 'react';
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Button } from 'react-native';

export default class signup extends React.Component {
  state={
    email:"",
    password:""
  }
  render(){
    return (
      <View style={styles.container}>
      <View style={styles.title_logo}>
          <Image style={styles.imglogo}
            source={require('./image/icon_logo.png')}
          ></Image>
          <Text style={styles.txtlogo}>Welcome</Text>
          <Text style={styles.logo}>Sign Up</Text>
        </View>
        <View style={styles.content_main}>
        <View style={styles.title_input}>
          <Text style={styles.txt_input}>Email</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
           
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({email:text})}/>
        </View>
        <View style={styles.title_input}>
          <Text style={styles.txt_input}>Password</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <View style={styles.title_input}>
          <Text style={styles.txt_input}>Confirm Password</Text>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.buttonview}>
        <Button style={styles.loginbtn}
          title="Login"
          color="#ed1c24"
          
          onPress={() => Alert.alert('Simple Button pressed')}
        >
        </Button>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: 1,
            marginTop: 30,
          }}
        />
       
        </View>
        <View style={styles.viewOr}>
           <Text style={styles.txtOr}> OR</Text>
        </View>
        <View style={styles.icon}>
            <TouchableOpacity>
            <Image style={styles.imgicon}
            source = {require('./image/icon_fb.png')}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imgicon}
            source = {require('./image/instagram.png')}>
            </Image>
            </TouchableOpacity>
            <TouchableOpacity>
            <Image style={styles.imgicon}
            source = {require('./image/twitter.png')}>
            </Image>
            </TouchableOpacity>
        </View>
        <View style={styles.textfooter}>
          <Text style={styles.txtfooter1}>Don't have an account?  </Text>
          <TouchableOpacity>
            <Text style={styles.txtfooter2}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4262e',
  },
  title_logo: {
    marginTop:40,
    marginLeft:30,
    marginBottom:30,
  },
  imglogo: {
    width:70,
    height: 70,
  },
  logo:{
    fontWeight:"bold",
    fontSize:30,
    color:'#ffff',
  },
  txtlogo: {
    fontSize:25,
    color:'#ffff',
    marginTop:10,
    marginBottom:10,
  },
  content_main : {
    borderTopStartRadius: 50,
    borderTopEndRadius:50,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:'#ffff',
    flex:1,
  },
  inputView:{
    width:"80%",
    borderWidth:1,
    borderRadius:10,
    height:50,
    marginBottom:10,
    justifyContent:"center",
    padding:20
  },
  buttonview: {
  
    width:"80%",
    height:50,
    marginBottom:20,
    justifyContent:"center",
  },
  txt_input: {
    fontSize:15,
    fontWeight:"bold",

  },
  title_input: {
      color:"black",
      padding:10,
      width:'80%',
  },
  inputText:{
    height:50,
    color:"black"
  },
  forgot:{
    color:"black",
    fontSize:12,
    fontStyle:"italic",
    marginBottom:20,
  },

  loginText:{
    color:"white"
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  viewOr: {
    position:"relative",
    bottom: 38,
    backgroundColor:'white',
    width: 20
  },
  icon: {
    flexDirection:"row"
  },
  imgicon : {
    width: 30,
    height:30,
    marginLeft:10,
    marginRight:10
  },
  textfooter: {
    flexDirection:'row',
    marginTop:40
  },
  txtfooter2: {
    color: 'red',
    fontWeight: 'bold'
  }
});