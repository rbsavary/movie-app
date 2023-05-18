import {Pressable, TextInput, Text, View} from 'react-native';


const SearchField = () => {
  return (
    <View>
      <TextInput style={{
        borderColor: 'gray',
        borderRadius: 5,
        borderWidth: 1, 
        margin: 10,
        paddingVertical: 0
      }}/>
      <Pressable>
        <Text>Search</Text>
      </Pressable>
    </View>
  )
}

export default SearchField