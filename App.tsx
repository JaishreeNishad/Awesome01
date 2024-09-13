import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatiedCrads from './components/ElevatedCrads';
import FancyCards from './components/FancyCards';
// import DraggableDiv from './components/DraggableDiv';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <DraggableDiv /> */}

        <FlatCards />
        <ElevatiedCrads/>
        <FancyCards/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
