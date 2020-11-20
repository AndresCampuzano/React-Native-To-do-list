import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function AddItem({ add }) {
  const [text, setText] = useState('')
  const handleChange = e => {
    setText(e)
  }
  const handleAdd = () => {
    add(text)
    setText('')
  }
  return (
    <View>
      <TextInput
        placeholder='Add item...'
        style={styles.input}
        onChangeText={handleChange}
        value={text}
      />
      <TouchableOpacity style={styles.btn} onPress={handleAdd}>
        <Icon name='plus' size={20} color='#fafafa' />
        <Text style={styles.btnText}>Add item</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 16
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#54ddd2'
  },
  btnText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fafafafa'
  }
})
