import {useState} from 'react'
import {View} from "react-native"
import Banner from "../components/Banner"
import SearchField from "../components/SearchField"

const apiUrl = 'http://www.omdbapi.com/?apikey=2c0bcb9f&'
const LandingScreen = () => {
  const [movieResult, setMovieResult] = useState()

  const handleSearch = async (searchString) => {
    const result = await fetch(apiUrl+searchString).then((data) => data.json())
    setMovieResult(result)

  }

  return (
  <View style={{flex: 1}}>
    <Banner />
    <SearchField onSubmit={handleSearch}/>
  </View>
  )
}


export default LandingScreen