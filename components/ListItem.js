import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function ListItem({ item, id, handleDelete }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.viewStyles}>
        <Text>{item}</Text>
        <Icon
          name='remove'
          size={20}
          color='#b93333'
          onPress={() => handleDelete(id)}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomColor: '#f7f7f7',
    borderBottomWidth: 1,
    backgroundColor: '#f0f0f0'
  },
  viewStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
