import React from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
} from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
const {width} = Dimensions.get('window');
function Login(props) {
  const [state, setState] = React.useState({
    email: '',
    password: '',
  });
  return (
    <View style={styles.container}>
      <View style={styles.title_logo}>
        <Image
          style={styles.imglogo}
          source={require('./image/icon_logo.png')}></Image>
        <Text style={styles.logo}>Sign In</Text>
      </View>
      <View style={styles.content_main}>
        <View
          style={{marginHorizontal: 20, marginVertical: 20, width: width - 40}}>
          <View style={styles.title_input}>
            <Text style={styles.txt_input}>Email</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholderTextColor="#003f5c"
            />
          </View>
          <View style={styles.title_input}>
            <Text style={styles.txt_input}>Password</Text>
          </View>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.inputText}
              placeholderTextColor="#003f5c"
            />
          </View>
          <TouchableOpacity
            style={{
              marginVertical: 10,
              justifyContent: 'flex-end',
              flexDirection: 'row',
            }}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          {/* <View style={styles.buttonview}>
            <Button
              style={styles.loginbtn}
              title="Login"
              color="#ed1c24"
              onPress={() => true}></Button>
            <View
              style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
                marginTop: 30,
              }}
            />
          </View> */}
          <TouchableScale
            activeScale={0.9}
            useNativeDriver
            onPress={() => true}
            style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>Login</Text>
          </TouchableScale>
          <View style={styles.viewOr}>
            <Text style={styles.txtOr}> OR</Text>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity style={{marginHorizontal: 10}}>
              <Image
                style={styles.imgicon}
                source={require('./image/icon_fb.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 10}}>
              <Image
                style={styles.imgicon}
                source={require('./image/instagram.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal: 10}}>
              <Image
                style={styles.imgicon}
                source={require('./image/twitter.png')}></Image>
            </TouchableOpacity>
          </View>
          <View style={styles.textfooter}>
            <Text style={styles.txtfooter1}>Don't have an account? </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('signup')}>
              <Text style={styles.txtfooter2}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4262e',
  },
  title_logo: {
    marginHorizontal: 10,
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imglogo: {
    width: 70,
    height: 70,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#ffff',
    textAlign: 'center',
  },
  content_main: {
    flex: 1,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  
  },
  inputView: {
    borderWidth: 1,
    flexDirection: 'row',
    borderRadius: 5,
  },
  buttonview: {
    justifyContent: 'center',
  },
  txt_input: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  title_input: {
    color: 'black',
    marginVertical: 10,
  },
  inputText: {
    flex: 1,
    color: 'black',
  },
  txtOr: {
    textAlign: 'center',
  },
  forgot: {
    color: 'black',
    fontSize: 12,
    fontStyle: 'italic',
  },

  loginText: {
    color: 'white',
  },
  title: {
    textAlign: 'center',
  },
  imgicon: {
    width: 30,
    height: 30,
  },
  textfooter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  txtfooter2: {
    color: 'red',
    fontWeight: 'bold',
  },
  appButtonContainer: {
    elevation: 3,
    backgroundColor: '#ed1c24',
    borderRadius: 5,
    marginBottom: 10,
    paddingVertical: 15,
  },
  appButtonText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
});
