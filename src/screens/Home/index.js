import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
  Text,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
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
            style={{
              width: 60,
              height: 40,
              backgroundColor: 'white',
            }}></TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 60,
              height: 40,
            }}>
            <Feather name="volume" size={20} />
          </TouchableOpacity>
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
