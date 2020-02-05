import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Modal from '../Modal';
import styles from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/left_arrow.png')}
          style={{width: 20, height: 17}}
        />
      </View>
      <Text style={styles.title}>{'00:00'}</Text>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../assets/left_arrow.png')}
          style={{width: 20, height: 17}}
        />
      </View>
    </View>
  );
};

class Home extends Component {
  state = {
    isModalVisible: false,
  };
  onPressStart = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };
  onCloseModal = () => {
    this.setState({isModalVisible: false});
  };
  render() {
    return (
      <ImageBackground
        style={{width: '100%', height: '100%', justifyContent: 'space-between'}}
        source={require('../../assets/background.jpeg')}>
        <SafeAreaView style={{backgroundColor: '#22222240'}}>
          <Header />
        </SafeAreaView>
        <View
          style={{
            backgroundColor: '#22222240',
            paddingTop: 10,
            paddingLeft: 20,
            paddingBottom: 40,
          }}>
          <View style={{flex: 1}} />
          <TouchableOpacity
            style={[
              styles.buttonContainer,
              {backgroundColor: 'white', marginBottom: 10},
            ]}>
            <AntDesign name="plus" size={30} color="pink" />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              height: 70,
            }}>
            <TouchableOpacity style={styles.buttonContainer}>
              <MaterialCommunityIcons
                name="volume-mute"
                size={40}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonContainer}>
              <Ionicons name="ios-flash-off" size={40} color="white" />
            </TouchableOpacity>
            <View style={{flex: 1}} />
            <TouchableOpacity
              style={[styles.buttonContainer, {marginRight: 20}]}>
              <Ionicons name="ios-reverse-camera" size={40} color="white" />
            </TouchableOpacity>
          </View>
          <View
            style={{
              position: 'absolute',
              alignSelf: 'center',
              bottom: 20,
            }}>
            <View
              style={{
                borderWidth: 6,
                borderColor: 'white',
                borderRadius: 41,
              }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: 'red',
                  margin: 3,
                }}></TouchableOpacity>
            </View>
            <Text
              style={{
                color: 'white',
                fontWeight: 'bold',
                marginTop: 5,
                alignSelf: 'center',
              }}>
              {'B-ROLL'}
            </Text>
          </View>
          <View
            style={{
              width: '40%',
              position: 'absolute',
              flexDirection: 'row',
              justifyContent: 'space-between',
              bottom: 20,
              right: 0,
            }}>
            <Text style={{color: 'white'}}>INTERVIEW</Text>
            <Text style={{color: 'white'}}>PHOTO</Text>
          </View>
        </View>
        {/* <Modal
            isVisible={this.state.isModalVisible}
            onBackdropPress={this.onCloseModal}
          /> */}
      </ImageBackground>
    );
  }
}

export default Home;
