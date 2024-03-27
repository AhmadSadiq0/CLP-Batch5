import { View, StyleSheet, Text, Button, DeviceEventEmitter } from 'react-native'
import ListContextProvider, { ListContext } from '../context/ListContext';
import { useContext } from 'react';
import useCart from '../zustandStore/cart';
import useUser from '../zustandStore/user';

const TabOne = (props) => {
    const { state, addItem } = useContext(ListContext)
    console.log('context state', state)

    const { cart, addToCart, removeItemFromCart, clear } = useCart()
    console.log('cart ==>', cart)

    const { user, changePhoneNumber, changePhoneNumberWithImmer } = useUser()
    console.log('User ==>', user)

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

            <Button
                title="Add Item To Zustand Cart"
                color="#841584"
                onPress={() => addToCart('Pants')}
            />
            <Button
                title="Remove Item From Zustand Cart"
                color="#841584"
                onPress={() => removeItemFromCart()}
            />

            <Button
                title="Clear From Zustand Cart"
                color="#841584"
                onPress={() => clear()}
            />
            <Button
                title="Update User Phone"
                color="#841584"
                onPress={() => changePhoneNumber('90000')}
            />
            <Button
                title="Update User Phonn with immer"
                color="#841584"
                onPress={() => changePhoneNumberWithImmer('10000AA')}
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