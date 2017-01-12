import React, {Component, PropTypes} from 'react';
import {
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  Text
 } from 'react-native';

// import {
//   LoginManager,
//   AccessToken
// } from 'react-native-fbsdk';

import Icon from 'react-native-vector-icons/FontAwesome';

import * as firebase from 'firebase'

export default class LoginScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    }
  }
  componentDidMount(){
    Animated.timing(this.state.fadeAnim, {toValue: 1}).start();
  }

  // loginFacebook () {
  //   const auth = firebase.auth()
  //   const provider = firebase.auth.FacebookAuthProvider
  //   LoginManager.logInWithReadPermissions(['public_profile', 'email', 'user_friends'])
  //     .then((result) => {
  //       if (result.isCancelled) {
  //         window.alert('Login cancelled')
  //       } else {
  //         AccessToken.getCurrentAccessToken()
  //           .then(accessTokenData => {
  //             const credential = provider.credential(accessTokenData.accessToken)
  //             return auth.signInWithCredential(credential)
  //           })
  //           .then(credData => {
  //             console.log(credData)
  //             // this.props.mapScreen()
  //           })
  //           .catch(err => {
  //             window.alert('Login cancelled')
  //             console.log(err)
  //           })
  //       }
  //     },
  //     (error) => {
  //       window.alert(`Login fail with error: ${error}`)
  //     })
  // }

  render(){
    return (
      <Image
        source={require('../../img/login_background.jpg')}
        style={styles.container}
      >
        <StatusBar
          translucent={true}
          backgroundColor="rgba(0, 0, 0, 0.2)"
          barStyle="light-content"
          style={styles.statusBar} />
        <TouchableOpacity
          accessabilityLabel="Skip Login"
          accessabilityTrait="button"
          style={styles.skip}
          onPress={() => this.props.skipLogin()}
        >
          <Image
            source={require('../../img/x.png')}
          />
        </TouchableOpacity>
        <Animated.View style={[styles.section, {opacity: this.state.fadeAnim}]}>
          <Text style={styles.h1}>Paramap</Text>
          <Text style={styles.h2}>Making the world accessible, together.</Text>
        </Animated.View>


          <View style={[styles.loginButtonWrapper]} >
            <Icon.Button name='facebook' size={30} style={styles.facebookButton} backgroundColor='#3b5998' onPress={() => {/*this.loginFacebook()*/}}>
              <Text style={styles.facebookButtonText}>Login With Facebook</Text>
            </Icon.Button>
          </View>
      </Image>
      );
  }
}
const width = Dimensions.get('window').width;

LoginScreen.propTypes = {
  skipLogin: PropTypes.func.isRequired
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 26,
    width: undefined,
    height: undefined,
  },
  statusBar: {
    paddingBottom: 20,
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  h1: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: Math.round(74 * (width / 375)),
    color: '#032250',
    backgroundColor: 'transparent',
  },
  h2: {
    textAlign: 'center',
    fontSize: 17,
    color: '#032250',
    marginVertical: 20,
  },
  skip: {
    position: 'absolute',
    right: 0,
    top: 20,
    padding: 15,
  },
  loginButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebookButton: {
    width: 0.78 * width,
    height: 58,
    justifyContent: 'center',
    alignItems: 'center'
  },
  facebookButtonText: {
    fontSize: width / 20,
    color: '#F7F7F7',
    fontWeight: 'bold',
    marginLeft: 20
  }
})