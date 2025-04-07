import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFavorite } from '../../redux/favouriteSlice';

const Favorite = () => {
  const favorites = useSelector(state => state.favorites);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={favorites}
      keyExtractor={item => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.company.name}</Text>
          <Text style={styles.location}>{item.locations[0]?.name}</Text>
          <Text style={styles.level}>{item.levels[0]?.name}</Text>
          <Button title="Remove" onPress={() => dispatch(removeFavorite(item.id))} />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 16,
    margin: 8,
    borderRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 18, fontWeight: 'bold' },
  location: { color: '#e53935' },
  level: { color: '#e53935', fontWeight: 'bold' }
});

export default Favorite;
