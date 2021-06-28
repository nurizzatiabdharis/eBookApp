import React from 'react'
import {
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

const DetailsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/Image/book-big.png')} style={styles.bookImage} />
            <Text style={styles.title}>Yves Saint Laurent</Text>
            <Text style={styles.author}>Suzy Menkes</Text>
            <View style={{ flexDirection: 'row', marginVertical: 10, alignSelf: 'center' }}>
                <Ionicons name="ios-star-sharp" size={14} color="#FFC41F" />
                <Ionicons name="ios-star-sharp" size={14} color="#FFC41F" />
                <Ionicons name="ios-star-sharp" size={14} color="#FFC41F" />
                <Ionicons name="ios-star-sharp" size={14} color="#FFC41F" />
                <Ionicons name="ios-star-half-sharp" size={14} color="#FFC41F" />
                <Text style={{ marginLeft: 5, fontWeight: '500', color: '#06070D' }}>4.5
                    <Text style={{ color: '#06070D', opacity: 0.5 }}>/ 5.0</Text>
                </Text>
            </View>
            <Text style={styles.description}>
                A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.
            </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={styles.smallBtn}>
                    <Ionicons name="ios-book-outline" size={24} />
                    <TouchableOpacity style={[styles.smallBtnText, { marginLeft: 15 }]}>
                        <Text>Preview</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.smallBtn}>
                    <MaterialCommunityIcons name="comment-processing-outline" size={24} />
                    <TouchableOpacity style={{ marginLeft: 15 }}>
                        <Text style={styles.smallBtnText}>Reviews</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('Read')} style={styles.mainBtn}>
                <Text style={styles.mainBtnText}>Read Book</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        //alignItems: 'center'
    },
    bookImage: {
        marginBottom: 25,
        alignSelf: 'center'
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 5,
        textAlign: 'center',
        color: '#06070D',
    },
    author: {
        fontSize: 14,
        color: '#06070D',
        opacity: 0.5,
        marginBottom: 5,
        textAlign: 'center'
    },
    description: {
        fontSize: 14,
        color: '#06070D',
        opacity: 0.5,
        lineHeight: 24,
        marginTop: 10,
    },
    smallBtn: {
        backgroundColor: '#fff',
        paddingHorizontal: 40,
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: "#E0E0E0",
        shadowOffset: {
            width: 0,
            height: 11,
        },
        shadowOpacity: 0.57,
        shadowRadius: 15.19,
        elevation: 23,
        borderRadius: 8,
        marginTop: 20,
        marginBottom: 40,
    },
    smallBtnText: {
        fontSize: 14,
        color: '#06070D',
    },
    mainBtnText: {
        fontSize: 16,
        color: '#fff'
    },
    mainBtn: {
        backgroundColor: '#06070D',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 117,
        paddingVertical: 18,
        borderRadius: 16,
    },
});

export default DetailsScreen
