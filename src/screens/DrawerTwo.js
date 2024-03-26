import { View, StyleSheet, Text, Button } from 'react-native'

const TabOne = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>DrawerTwo</Text>
            
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