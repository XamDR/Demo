import React from 'react'
import { useState } from 'react'
import { StyleSheet, View, Text, FlatList } from 'react-native'
import Header from './components/Header'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import { item } from './core/item'
import ListItem from './components/ListItem'
import { FAB } from 'react-native-elements';

export default function App() {

	const [counter, setCounter] = useState(1)

	const [items, setItems] = useState<item[]>([])

	const deleteItem = (itemId: String) => {
		setItems(prevItems => {
			return prevItems.filter(i => i.id !== itemId)
		})
	}

	const addItem = () => {
		setCounter(counter + 1)
		setItems(prevItems => {
			return [{ id: uuidv4(), text: `Nota ${counter}` }, ...prevItems]
		})
	}

  return (
    <View style={styles.container}>
			<Header title="Shopping List"></Header>
			<FlatList 
				data={items} 
				renderItem={({ item }) => 
					<ListItem item={item} deleteItem={deleteItem}></ListItem>}>
			</FlatList>
			<FAB 
				icon={{ name: 'add', color: 'white' }} 
				color='dodgerblue' 
				placement='right'
				onPress={() => addItem()}>
			</FAB>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1    
  },
})
