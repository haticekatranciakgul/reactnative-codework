import React from 'react';
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import useFetch from '../../hooks/useFetch/useFetch';
import { useNavigation } from '@react-navigation/native';
import styles from "./Jobs.style";


const Jobs = () => {
  const { data, loading } = useFetch();
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('JobDetail', { jobId: item.id })}
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text>{item.company.name}</Text>
      <Text style={styles.location}>{item.locations[0]?.name}</Text>
      <Text style={styles.level}>{item.levels[0]?.name}</Text>
    </TouchableOpacity>
  );

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
    />
  );
};

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: '#fff',
//     padding: 16,
//     margin: 8,
//     borderRadius: 8,
//     elevation: 2,
//   },
//   title: { fontSize: 18, fontWeight: 'bold' },
//   location: { color: '#e53935' },
//   level: { color: '#e53935', fontWeight: 'bold' }
// });

export default Jobs;
