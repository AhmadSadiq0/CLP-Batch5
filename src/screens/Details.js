import { View, StyleSheet, Text } from 'react-native'

const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details</Text>
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

export default Home