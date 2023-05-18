import {Pressable, TextInput, Text, View} from 'react-native';


const SearchField = () => {
  return (
    <View style={{
      flexDirection: 'row',
      padding: 10,
    }}>
      <TextInput style={{
        borderColor: 'gray',
        borderRadius: 5,
        flex: 1,
        borderWidth: 1, 
        margin: 10,
        paddingVertical: 0
      }}/>
      <Pressable style={{
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'gray',
        borderRadius: 5,
      }}>
        <Text style={{color: 'white', fontWeight: '600', fontSize: 18}}>Search</Text>
      </Pressable>
    </View>
  )
}

export default SearchField