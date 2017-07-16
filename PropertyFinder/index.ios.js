'use strict';

var React = require('react');
var ReactNative = require('react-native');

var styles = ReactNative.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return <ReactNative.Text style={styles.text}>Hej världen med JSX syntax</ReactNative.Text>
  }
}

ReactNative.AppRegistry.registerComponent('PropertyFinder', function() { return PropertyFinderApp});
