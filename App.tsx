import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
// import DraggableDiv from './components/DraggableDiv';

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        {/* <DraggableDiv /> */}

        <FlatCards />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
