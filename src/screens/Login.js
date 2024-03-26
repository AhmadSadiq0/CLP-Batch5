import { useEffect, useState } from 'react'
import { View, StyleSheet, TextInput, Button, DeviceEventEmitter } from 'react-native'

const Login = (props) => {
    console.log(props)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)


    useEffect(() => {
        const sub = DeviceEventEmitter.addListener('user', (user) => {
            console.log(user)
        })
        //removing the listerner when login screen is unmounted
    }, [])

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder='Enter Email'
                onChangeText={(t) => setEmail(e)}
            />
            <TextInput
                style={styles.input}
                placeholder='Enter Password'
                onChangeText={(t) => setEmail(e)}
            />
            <Button
                title='Submit'
                onPress={() => DeviceEventEmitter.emit('subscriber', { route: 'main' })}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    text: {
        fontSize: 18
    }, input: {
        height: 50,
        borderWidth: 1,
        margin: 5,
        padding: 5
    }
})

export default Login