import React, { useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'
import AddItem from './components/AddItem'
import Header from './components/Header'
import ListItem from './components/ListItem'

export default function App() {
  const [list, setList] = useState([
    { id: Math.random(), text: 'Milk' },
    { id: Math.random(), text: 'Sugar' },
    { id: Math.random(), text: 'Bread' }
  ])

  const handleDelete = id => {
    setList(prevItems => {
      return prevItems.filter(item => item.id !== id)
    })
  }
  const handleAddItem = text => {
    setList(prevItems => {
      return [{ id: Math.random(), text }, ...prevItems]
    })
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <AddItem add={handleAddItem} />
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ListItem item={item.text} id={item.id} handleDelete={handleDelete} />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26,
    backgroundColor: '#fff'
  }
})
