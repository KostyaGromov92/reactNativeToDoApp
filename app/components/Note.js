import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>

        <TouchableOpacity onPress={this.props.deleteMethod} style={styles.noteDelete}>
          <Text style={styles.noteDeleteText}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: 'relative',
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: '#ededed',
  }, 
  
  noteText: {
    paddingLeft: 20,
    borderLeftWidth: 10,
    borderLeftColor: '#E91E63',
  },

  noteDelete: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 10,
    right: 10,
    top: 10,
    backgroundColor: '#2980b9',
    justifyContent: 'center',
    alignItems: 'center',
    width: 20
  },

  noteDeleteText: {
    color: 'white',
  }

});
