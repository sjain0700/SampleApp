

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
  Image
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { LoginHelper } from './helpers/service';
import { HAButton, HAButtonNoAction, HAButtonNoActionCards } from './CommonComponent/Buttons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Logo = require('./Images/logo.png');


const statusString = {
  Activate : 'Activate',
  Waiting :  'Waiting',
  Activated : 'Activated',
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showLoader: false,
      isActivated: false,
      status: 'Activate',
      bgColor: 'white',
    }
  }

/** 
 *  {
                    <Ionicons style={styles.checkMarkTaken1} name="ios-checkmark" />
                  } */
  
  render() {
   
    return (
      <View style={{ flex: 1}}>
           <View style={{alignSelf:'center',marginTop:400}}>
                          <Image source={Logo} style={{width: 70, height: 70, borderRadius: 5 }} />
            </View>
          {
          (this.state.status == statusString.Activate) &&
          <TouchableOpacity 
             accessible = {true}
          //  onBlur = {() => this.setState({bgColor: 'black'})}
            onPress={() => this._signInAsync()}>
            <View style={[styles.btntakehome, { marginTop: 100 }]}>
            <View style={{ alignContent: 'center', height: 16, width: 16, marginRight: 8, backgroundColor: this.state.bgColor, borderRadius: 8 }}>
                <AntDesign style={styles.checkMarkTaken} name="arrowup" />
            </View>
            
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>Activate</Text>
            </View>
          </TouchableOpacity>
          }
          {
          (this.state.status == statusString.Waiting) &&
            
          <View style={[styles.btntakehome, { marginTop: 100 }]}>
            <View style={{ alignContent: 'center', height: 16, width: 16, marginRight: 8, backgroundColor: '#rgba(68, 35, 186, 1)', borderRadius: 8 }}>
              <ActivityIndicator animating={this.state.showLoader} size="small" color="white" />
            </View>
            
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>Waiting</Text>
          </View>
           
          }

          {
            (this.state.status == statusString.Activated) &&
            <View style={[styles.btntakehome, { marginTop: 100, backgroundColor: '#rgba(1, 211, 120, 1)' }]}>
              <View style={{ alignContent: 'center', height: 16, width: 16, marginRight: 8, backgroundColor: 'white', borderRadius: 8 }}>
              <Ionicons style={styles.checkMarkTaken1} name="ios-checkmark" />
            </View>
              <Text style={{ color: 'white', fontSize: 14, fontWeight: '600' }}>Activated</Text>
            </View>
          }
        
      </View>
    );

  }

  // const App: () => React$Node = () => {
  //   return (
  //     <>
  //       <StatusBar barStyle="dark-content" />
  //       <SafeAreaView>
  //       {/* <View style={{marginTop:100, width: 150, alignSelf: 'center', backgroundColor: 'red', alignContent: 'center'}}> */}
  //       <TouchableOpacity onPress={()=> this._signInAsync()}>
  //         <View style={[styles.btntakehome, {marginTop: 400}]}>
  //           <View style={{alignContent: 'center', height: 20, width: 20,  backgroundColor: 'white', borderRadius: 10}}>
  //           {
  //             <AntDesign style={styles.checkMarkTaken} name="arrowup" />
  //           }
  //           </View>


  //             <Text style={{color:'white', fontSize:14, fontWeight:'400'}}>Activate</Text>

  //         </View>
  //         </TouchableOpacity>

  //       </SafeAreaView>
  //     </>
  //   );
  // };


  _signInAsync = async () => {

    // NetInfo.isConnected.fetch().then(async (isConnected) => {
    // const isConnected = await AppUpgradeHelper.checkNetwork();
    // if (isConnected) {
    //   this.setState({
    //     loader: true,
    //     btnEnable: false
    //   })
    this.setState({status: statusString.Waiting, showLoader: true})
    signedInResponse = await LoginHelper._signInAsync({
      "productId": "82jqp008d2l00",
      "emirate": "Abu Dhabi"
    })

    if (signedInResponse) {
      this.setState({status: statusString.Activated, showLoader: false})
      console.log('signedInResponse', signedInResponse)

    }
    else{
      this.setState({status: statusString.Activate, showLoader: false})
    }

    // } else {
    //   this.setState({
    //     loader: false,
    //     userData: {}
    //   })
    // }
    //}
    // else {
    //   this.setState({
    //     loader: false
    //   }) 
    // }

  };

}

const styles = StyleSheet.create({
  checkMarkTaken: {
    fontSize: 16,
    fontWeight: '600',
    //marginTop: -5,
    // marginRight: 6,
    color: '#rgba(68, 35, 186, 1)',

    // borderRadius: 5,
  },
  checkMarkTaken1: {
    fontSize: 18,
    fontWeight: 'bold',
    //marginTop: -5,
    // marginRight: 6,
    marginLeft: 5,
    color: '#rgba(1, 211, 120, 1)',

    // borderRadius: 5,
  },
  btntakehome: {
    backgroundColor: '#rgba(68, 35, 186, 1)',
    height: 35,
    width: 110,
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    color: 'white',
    paddingTop: 8, //Colors.paddingTop10,
    borderRadius: 17,
    fontSize: 12,
    // fontWeight: '400',
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: 'white',//Colors.primary,
    alignSelf: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

