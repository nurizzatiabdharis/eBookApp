import React from 'react'
import {
    Text,
    View,
    Button,
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PopularBooks = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Fashionopolis',
        author: 'Dana Thomas',
        image: require('../assets/Image/book-1.png'),
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Fashionopolis',
        author: 'Dana Thomas',
        image: require('../assets/Image/book-2.png'),
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Fashionopolis',
        author: 'Dana Thomas',
        image: require('../assets/Image/book-3.png'),
    },
];

const NewestBooks = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3adfsddsfc',
        title: 'Fashionopolis',
        author: 'Dana Thomas',
        image: require('../assets/Image/book-small-1.png'),
    },
    {
        id: '3ac68afc-c605-48d3-a4f8f-dhgfhjdgsfse2',
        title: 'Fashionopolis',
        author: 'Dana Thomas',
        image: require('../assets/Image/book-small-2.png'),
    },
];

const HomeScreen = ({ navigation }) => {

    const renderPopularBooksItem = ({ item }) => (
        <View style={styles.popularBooksItemWrapper}>
            <Image source={item.image} />
            <Text style={[styles.booksItemTitle, { marginTop: 20 }]}>{item.title}</Text>
            <Text style={styles.booksItemAuthor}>{item.author}</Text>
        </View>
    )

    const renderNewestBooksItem = ({ item }) => (
        <View style={styles.newestBooksItemWrapper}>
            <TouchableOpacity
                style={{ marginRight: 28 }}
                onPress={() => navigation.navigate('Details')}
            >
                <Image source={item.image} />
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'flex-start', flexDirection: 'column' }}>
                <Text style={[styles.booksItemTitle, { marginTop: 10 }]}>{item.title}</Text>
                <Text style={styles.booksItemAuthor}>{item.author}</Text>
                <View style={{ flexDirection: 'row', marginVertical: 10, }}>
                    <Ionicons name="ios-star-sharp" size={14} color="#FFC41F" />
                    <Ionicons name="ios-star-sharp" size={14} color="#FFC41F" />
                    <Ionicons name="ios-star-sharp" size={14} color="#FFC41F" />
                    <Ionicons name="ios-star-sharp" size={14} color="#FFC41F" />
                    <Ionicons name="ios-star-half-sharp" size={14} color="#FFC41F" />
                </View>
            </View>
            <Ionicons name="bookmark-outline" size={20} />
        </View>
    )
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerWrapper}>
                <Image
                    source={{
                        uri: 'https://i1.wp.com/i.pinimg.com/736x/b2/b6/31/b2b63133e6a976fb765d01b9f94f828b--profil-picture-ideas-profile-picture-ideas-instagram.jpg'
                    }}
                    style={styles.headerAvatar} />
                <Text style={styles.headerTitle}>Hi, Anna!</Text>
                <Ionicons name="ios-search" size={24} />
            </View>

            <View style={styles.sectionWrapper}>
                <Text style={styles.sectionTitle}>Popular Books</Text>
                <FlatList
                    data={PopularBooks}
                    renderItem={renderPopularBooksItem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            </View>

            <View style={styles.sectionWrapper}>
                <Text style={styles.sectionTitle}>Newest Books</Text>
                <FlatList
                    data={NewestBooks}
                    renderItem={renderNewestBooksItem}
                    keyExtractor={item => item.id}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    headerWrapper: {
        flexDirection: 'row',
        marginHorizontal: 25,
        alignItems: 'center',
    },
    headerAvatar: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    headerTitle: {
        fontSize: 16,
        flex: 1,
        marginLeft: 12,
    },
    sectionWrapper: {
        marginLeft: 28,
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        marginBottom: 30
    },
    popularBooksItemWrapper: {
        marginRight: 24,
    },
    booksItemTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 5,
    },
    booksItemAuthor: {
        fontSize: 12,
    },
    newestBooksItemWrapper: {
        flexDirection: 'row',
        marginRight: 28,
        marginBottom: 24,
    },
});

export default HomeScreen
