import React, { useEffect, useState } from 'react';
import { View, Text, Button, ScrollView, ActivityIndicator } from 'react-native';
import { API_DETAIL_URL } from '@env';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite } from '../../redux/favouriteSlice';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import styles from "./JobsDetail.style";

const JobsDetail = ({ route }) => {
  const { jobId } = route.params;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { width } = useWindowDimensions();
  const favorites = useSelector(state => state.favorites);

  useEffect(() => {
    fetch(`${API_DETAIL_URL}${jobId}`)
      .then(res => res.json())
      .then(json => setJob(json))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [jobId]);

  const isFavorite = favorites.some(fav => fav.id === job?.id);

  const handleAddFavorite = () => {
    if (!isFavorite && job) {
      dispatch(addFavorite(job));
    }
  };

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <ScrollView style={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{job.name}</Text>
      <Text style={{ color: '#e53935' }}>{job.company.name}</Text>
      <RenderHtml contentWidth={width} source={{ html: job.contents }} />
      <Button title="Submit" onPress={() => {}} />
      <Button title={isFavorite ? "Already in Favorites" : "Favorite Job"} onPress={handleAddFavorite} disabled={isFavorite} />
    </ScrollView>
  );
};

export default JobsDetail;
