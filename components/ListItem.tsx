import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { item } from '../core/item'
import Icon from 'react-native-vector-icons/MaterialIcons'

type listItemProps = {
	item: item,
	deleteItem: (id: String) => void 
}

export default function ListItem({ item, deleteItem }: listItemProps) {
	return (
		<TouchableOpacity style={styles.listItem}>
			<View style={styles.listItemView}>
				<Text style={styles.listItemText}>{item.text}</Text>
				<Icon 
					name="close" 
					size={20} 
					color="red"
					onPress={() => deleteItem(item.id)}>
				</Icon>
			</View>
		</TouchableOpacity>	
	)
}

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
  checkedItemText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: 'green',
  },
  iconView: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 70,
  },
  editItemInput: {
    padding: 0,
    fontSize: 18,
  },
});
