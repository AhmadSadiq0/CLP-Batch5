import { View, StyleSheet, Text, Button } from 'react-native'

const TabTwo = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>TabTwo</Text>
           

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

export default TabTwo