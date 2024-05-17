import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const MoviesScreen = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://dummyapi.online/api/movies');
      const data = await response.json();
      setMovies(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching movies: ', error);
      setLoading(false);
    }
  };

  const renderMovieItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => openIMDbLink(item.imdb_url)}
        activeOpacity={0.5}>
        <View style={styles.movieItem}>
          <Image
            source={{uri: item?.image}}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.movieInfo}>
            <Text style={styles.title}>{item.movie}</Text>
            <Text style={styles.rating}>Rating: {item.rating}</Text>
            <Text style={styles.rating}>URL: {item.imdb_url} </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const openIMDbLink = url => {
    // This function could be implemented to open the IMDb link in a browser
    Linking.openURL(url).catch(err => console.error('Error opening URL:', err));
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="blue" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Movies</Text>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMovieItem}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: 'lightgreen',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: '900',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black',
  },
  listContent: {
    flexGrow: 1,
  },
  movieItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
  },
  // image: {
  //   width: 100,
  //   height: 150,
  //   borderRadius: 5,
  // },
  movieInfo: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  rating: {
    fontSize: 16,
    marginTop: 5,
    color: 'white',
    backgroundColor: 'blue',
  },
});

export default MoviesScreen;
