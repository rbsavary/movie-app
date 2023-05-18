import {Text, View} from "react-native"
import Banner from "../components/Banner"
import SearchField from "../components/SearchField"
const LandingScreen = () => {
  return (
  <View style={{flex: 1}}>
    <Banner />
    <SearchField />
  </View>
  )
}


export default LandingScreen