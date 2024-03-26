import { View, StyleSheet, Text, Button,  } from 'react-native'


const Home = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home</Text>
            <Button
                title='Go to Detials'
                onPress={() => props.navigation.navigate('Details')}
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

export default Home