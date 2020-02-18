// Components/Test.js

import React from 'react';
import {StyleSheet, View, Animated} from 'react-native';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topPosition: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.spring(this.state.topPosition, {
      toValue: 100,
      speed: 4, // Le temps est en milliseconds ici (3000ms = 3sec)
      bounciness: 30,
    }).start(); // N'oubliez pas de lancer votre animation avec la fonction start()
  }
  render() {
    return (
      <View style={styles.main_container}>
        <Animated.View
          style={[styles.animation_view, {top: this.state.topPosition}]}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subview_container: {},
  animation_view: {
    backgroundColor: 'red',
    width: 100,
    height: 100,
  },
});

export default Test;
