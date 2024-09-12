import React, {useState, useRef} from 'react';
import {View, Text, StyleSheet, PanResponder, Animated} from 'react-native';

const DraggableDiv = () => {
  const [dragging, setDragging] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        setDragging(true);

        pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: () => {
        setDragging(false);
        pan.flattenOffset();
      },
    }),
  ).current;

  return (
    <Animated.View
      style={[
        styles.draggable,
        pan.getLayout(),
        {backgroundColor: dragging ? '#d0d0d0' : '#f0f0f0'},
      ]}
      {...panResponder.panHandlers}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Drag Me</Text>
      </View>
      <View style={styles.content}>
        <Text>This is a draggable div.</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  draggable: {
    width: 300,
    height: 200,
    position: 'absolute',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  header: {
    backgroundColor: '#0078d4',
    padding: 10,
  },
  headerText: {
    color: 'white',
  },
  content: {
    padding: 20,
  },
});

export default DraggableDiv;
