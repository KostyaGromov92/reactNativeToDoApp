import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Note from './app/components/Note';

export default class App extends Component {

  state = {
    noteArray: [{'date': 'testdate', 'note' : 'testnote 1'}],
    noteText: '',
  }

  addNote = () => {
    if(this.state.noteText) {
      let date = new Date();
      this.state.noteArray.push( {date: date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(), 'note': this.state.noteText} );
      this.setState({noteArray: this.state.noteArray});
      this.setState({noteText: ''});
    }
  };

  deleteNote = (key) => {
    this.state.noteArray.splice(key, 1);
    this.setState({noteArray: this.state.noteArray});
  };

  render() {

    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={() => this.deleteNote(key)} />
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>- NOTE -</Text>
        </View>

        <ScrollView style={styles.scrollContainer}>
          {notes}
        </ScrollView>

        <View style={styles.footer}>

          <TouchableOpacity onPress={this.addNote} style={styles.abbButton}>
            <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>

          <TextInput style={styles.textInput}
            placeholder='> note'
            placeholderTextColor='white'
            underlineColorAndroid='transparent'
            onChangeText={(noteText) => this.setState({noteText})}
            value={this.state.noteText}
          />

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 10,
    borderBottomColor: '#ddd',
  },

  headerText: {
    color: 'white',
    fontSize: 18,
    padding: 26,
  },

  scrollContainer: {
    flex: 1,
    marginBottom: 100
  },

  footer: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0
  },

  abbButton: {
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    elevation: 8,
    justifyContent: 'center',
    marginBottom: -45,
    zIndex: 10,
  },

  addButtonText: {
    color: '#fff',
    fontSize: 24,
  },

  textInput: {
    alignSelf: 'stretch',
    color: '#fff',
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed'
  }
});
