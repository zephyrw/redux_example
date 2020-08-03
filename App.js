import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TextInput,
  StatusBar,
  Button,
  Text,
  TouchableOpacity
} from 'react-native';

import {decrementAction, incrementAction} from './src/redux/slices/CountSlice';
import {connect} from 'react-redux';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }

  render() {
    return (
        <>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <View style={styles.container}>
              <TextInput style={styles.textInput} onChangeText={(text)=>{
                this.setState({
                  num: parseInt(text)
                })
              }}>{isNaN(this.state.num) ? 1 : this.state.num}</TextInput>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} activeOpacity = {.9} onPress={() => {
                  this.props.decrement(this.state.num)
                }}>
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.text}>{this.props.value}</Text>
                <TouchableOpacity style={styles.button} activeOpacity = {.9} onPress={() => {
                  this.props.increment(this.state.num)
                }}>
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
        </>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
  },
  textInput: {
    width: 160,
    height: 44,
    borderRadius: 3,
    borderColor: '#eee',
    borderWidth: 0.5,
    textAlign: 'center',
    fontSize: 17
  },
  buttonContainer: {
    flexDirection: 'row',
    height: 44,
    justifyContent: 'space-between',
    width: 160,
    alignItems: 'center',
    marginTop: 10
  },
  buttonText: {
    fontSize: 30,
    width: 44,
    height: 44,
    color: '#36a',
    borderColor: '#eee',
    borderWidth: 1,
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 17
  }

});

const mapStateToProps = (state) => {
  return {
    value: state.count.value,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    increment: (num) => dispatch(incrementAction(num)),
    decrement: (num) => dispatch(decrementAction(num)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
