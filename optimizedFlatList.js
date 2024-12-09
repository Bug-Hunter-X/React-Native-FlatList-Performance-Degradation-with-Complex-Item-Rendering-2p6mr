import React, { useMemo } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';

// ... data

const Item = React.memo(({ item }) => { //Using React.memo for optimization
  const complexCalculation = useMemo(() => {
    // Simulate a complex calculation
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += i;
    }
    return result;
  }, [item]);

  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Text>{complexCalculation}</Text> {/*This calculation is now memoized*/}
    </View>
  );
});

const OptimizedFlatList = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Item item={item} />}
      />
  );
};

const styles = StyleSheet.create({
  // ... styles
});
export default OptimizedFlatList;