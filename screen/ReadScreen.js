import React, { useLayoutEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ReadScreen = ({ navigation }) => {
    bs = React.createRef();
    fall = new Animated.Value(1);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <View style={{ flexDirection: 'row' }}>
                    <Icon.Button name="bookmark-outline"
                        onPress={() => console.log('bookmark')}
                        backgroundColor='#fff'
                        color='#BDBDBD'
                        style={{ marginRight: -15 }}
                        size={25}
                    />
                    <Icon.Button name="cog-outline"
                        onPress={() => bs.current.snapTo(0)}
                        backgroundColor='#fff'
                        color='#BDBDBD'
                        size={25}
                    />
                </View>
            ),
        });
    }, [navigation]);

    const renderContent = () => (
        <View
            style={{
                backgroundColor: 'white',
                padding: 30,
                height: 450,
                marginTop: -10,
            }}
        >
            <Text>Swipe down to close</Text>
            <View>
                <Text>Font</Text>
            </View>
            <View>
                <Text>Size</Text>
            </View>
            <View>
                <Text>Light</Text>
            </View>
            <View>
                <Text>Mode</Text>
            </View>
        </View>
    );
    const sheetRef = React.useRef(null);
    return (
        <>
            <View>
                {/* <ScrollView
                    style={styles.container}
                    showsVerticalScrollIndicator={false}
                > */}
                <Text style={styles.author}>J. K. Rowling</Text>
                <Text style={styles.book}>Harry Potter And the Sorcerer's Stone</Text>
                <Text style={styles.chapter}>Chapter 1</Text>
                <Text style={styles.title}>The Boy Who Lived</Text>
                <Text style={styles.text}>
                    Mr. And Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange ormysterious, because they just didn't hold with such nonsense. Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man withhardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and hadnearly twice the usual amount of neck, which came in very
                    flew up to try and pull Harry safely onto one of their brooms, but it was no good -- every time they got near him, the broom would jump higher still. They dropped lower and circled beneath him, obviously hoping to catch him if he fell. Marcus
                    Flint seized the Quaffle and scored five times without anyone noticing.
                    {'\n'}"Come on, Hermione," Ron muttered desperately.
                    {'\n'}Hermione had fought her way across to the stand where Snape stood, and was now racing along the row behind him; she didn't even stop to say sorry as she knocked Professor Quirrell headfirst into the row in front. Reaching Snape, she crouched down, pulled out her wand, and whispered a few, well- chosen words. Bright blue flames shot from her wand onto the hem of Snape's robes.
                    It took perhaps thirty seconds for Snape to realize that he was on fire. A sudden yelp told
                </Text>
                {/* </ScrollView> */}
            </View>
            {/* <ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.author}>J. K. Rowling</Text>
                <Text style={styles.book}>Harry Potter And the Sorcerer's Stone</Text>
                <Text style={styles.chapter}>Chapter 1</Text>
                <Text style={styles.title}>The Boy Who Lived</Text>
                <Text style={styles.text}>
                    Mr. And Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much. They were the last people you'd expect to be involved in anything strange ormysterious, because they just didn't hold with such nonsense. Mr. Dursley was the director of a firm called Grunnings, which made drills. He was a big, beefy man withhardly any neck, although he did have a very large mustache. Mrs. Dursley was thin and blonde and hadnearly twice the usual amount of neck, which came in very
                    flew up to try and pull Harry safely onto one of their brooms, but it was no good -- every time they got near him, the broom would jump higher still. They dropped lower and circled beneath him, obviously hoping to catch him if he fell. Marcus
                    Flint seized the Quaffle and scored five times without anyone noticing.
                    {'\n'}"Come on, Hermione," Ron muttered desperately.
                    {'\n'}Hermione had fought her way across to the stand where Snape stood, and was now racing along the row behind him; she didn't even stop to say sorry as she knocked Professor Quirrell headfirst into the row in front. Reaching Snape, she crouched down, pulled out her wand, and whispered a few, well- chosen words. Bright blue flames shot from her wand onto the hem of Snape's robes.
                    It took perhaps thirty seconds for Snape to realize that he was on fire. A sudden yelp told
                </Text>
            </ScrollView> */}
            <View style={{
                flex: 1,
                shadowColor: '#000000',
                shadowOffset: { width: 0, height: 0 },
                shadowRadius: 5,
                shadowOpacity: 0.5,
            }}>
                <BottomSheet
                    ref={this.bs}
                    // snapPoints={[330, 0]}
                    renderContent={renderContent}
                    // initialSnap={1}
                    snapPoints={['50%', 0]}
                    initialSnap={1}
                    callbackNode={this.fall}
                    enabledGestureInteraction={true}
                />
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff'
    },
    author: {
        fontSize: 16,
        textAlign: 'center'
    },
    book: {
        fontSize: 27,
        textAlign: 'center'
    },
    chapter: {
        fontSize: 16,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        lineHeight: 28,
    }
});

export default ReadScreen
