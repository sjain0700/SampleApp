

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';

import { ServiceHelper } from './helpers/service';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { SampleButton } from './CommonComponent/Buttons';
const Logo = require('./Images/logo.png');


const statusString = {
  Activate: 'Activate',
  Waiting: 'Waiting',
  Activated: 'Activated',
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoader: false,
      isActivated: false,
      status: 'Activate',
      bgColor: 'white',
      backgroundColor: 'red',
      color: 'white'
    }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ alignSelf: 'center', marginTop: 400 }}>
          <Image source={Logo} style={styles.logoStyle} />
        </View>
        {
          (this.state.status == statusString.Activate) &&
          <SampleButton text = {statusString.Activate}  onPress={() => this.apiCall()}
              style={[styles.btntakehome, { marginTop: 100 }]}
              imageFont = {
                <AntDesign style={styles.checkMarkTaken} name="arrowup" />
              }
           >
          </SampleButton>
        }

        {
          (this.state.status == statusString.Waiting) &&
          <View style={[styles.btntakehome, { marginTop: 100 }]}>
            <View style={{ alignContent: 'center', height: 16, width: 16, marginRight: 8, 
                           backgroundColor: '#rgba(68, 35, 186, 1)', borderRadius: 8 }}>
              <ActivityIndicator animating={this.state.showLoader} size="small" color="white" />
            </View>
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>{statusString.Waiting}</Text>
          </View>
        }

        {
          (this.state.status == statusString.Activated) &&
          <SampleButton text = {statusString.Activated} onPress={null}
                style={[styles.btntakehome, { marginTop: 100, backgroundColor: '#rgba(1, 211, 120, 1)' }]}
              imageFont = {
                <Ionicons style={styles.checkMarkTaken1} name="ios-checkmark" />
              }
           >
          </SampleButton>
        }

      </View>
    );
  }


  apiCall = async () => {
    this.setState({ status: statusString.Waiting, showLoader: true })
    let signedInResponse = await ServiceHelper._requestAsync({
      "productId": "82jqp008d2l00",
      "emirate": "Abu Dhabi"
    })

    if (signedInResponse) {
      this.setState({ status: statusString.Activated, showLoader: false })
      console.log('signedInResponse', signedInResponse)

    }
    else {
      this.setState({ status: statusString.Activate, showLoader: false })
    }
  };
}

const styles = StyleSheet.create({
  logoStyle:{
      width: 70, 
      height: 70, 
      borderRadius: 5 
  },
  checkMarkTaken: {
    fontSize: 16,
    fontWeight: '600',
    color: '#rgba(68, 35, 186, 1)',
  },
  checkMarkTaken1: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 5,
    color: '#rgba(1, 211, 120, 1)',
  },
  btntakehome: {
    backgroundColor: '#rgba(68, 35, 186, 1)',
    height: 35,
    width: 110,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
    paddingTop: 8,
    borderRadius: 17,
    fontSize: 12,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',
    alignSelf: 'center',
  }
});

