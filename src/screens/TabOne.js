import { View, StyleSheet, Text, Button, DeviceEventEmitter } from 'react-native'
import ListContextProvider, { ListContext } from '../context/ListContext';
import { useContext } from 'react';

const TabOne = (props) => {
    const { state, addItem } = useContext(ListContext)
    console.log('context state', state)
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TabOne</Text>
            <Button
                title='Go to Detials'
                onPress={() => props.navigation.navigate('Details')}
            />
            <Button
                title='Go to Drawer'
                onPress={() => props.navigation.navigate('Drawer')}
            />

            <Button
                title='Emit'
                onPress={() => {
                    DeviceEventEmitter.emit('subscriber', { route: 'auth' })
                    DeviceEventEmitter.emit('user', {
                        user: {
                            firstName: 'Alpha',
                            lastName: 'Bravo'
                        }
                    })

                }}
            />


            <Button
                title="Add Item To Context"
                color="#841584"
                onPress={() => addItem('Batch 5')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
        fontSize: 18
    }
})

export default TabOne