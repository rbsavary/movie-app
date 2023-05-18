import {Image, Text, StyleSheet, View} from 'react-native'


const Results = ({movie}) => {
  return (
  <View style={styles.card}>
    <Image style={styles.image} src={movie.Poster} />
    <View style={styles.content}>
      <Text>{movie.Title}</Text>
      <Text>{movie.Rated} {movie.Year}</Text>
      <Text>{movie.Plot}</Text>
    </View>
  </View>)
}

const styles = StyleSheet.create({
  card: {padding: 20, margin: 20, borderColor: 'gray', borderWidth: 1, },
  image: {height: 100, width: 100},
  titleText: {},
  subtitleText: {},
  descriptionText: {}
})

export default Results