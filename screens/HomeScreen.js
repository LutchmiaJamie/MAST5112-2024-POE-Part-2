import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Animated, Image } from 'react-native';


const HomeScreen = ({ navigation }) => {

  const [lastBook, setLastBook] = useState(null);
  const [totalPagesRead, setTotalPagesRead] = useState(0);
  const [totalBooks, setTotalBooks] = useState(0);

  const addBook = (bookData) => {
    const { title, author, genre, pages } = bookData;
    setLastBook({ title, author, genre, pages });
    setTotalPagesRead(totalPagesRead + pages);
    setTotalBooks(totalBooks + 1);
  };
  
  const FadeInView = (props) => {
    const fadeAnim = useRef(new Animated.Value(0)).current

    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false
        }
      ).start();
    }, [fadeAnim])
    return (
      <Animated.View
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
      >
        {props.children}
      </Animated.View>
    );
  }

  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>HOME</Text>
        </View>
      </View>
      <View style={styles.content}>
      <FadeInView>
      <View style={styles.mainPicture}>
      <Image 
        style={styles.logoPicture}
        source={require('./img/book-icon.png')}
      />


      </View>
        <View style={styles.boxOutline}>
          <Text style={styles.boxheader}>Last Book Read</Text>
          {lastBook && (
            <>
              <Text style={styles.boxText}>
                Title: <Text style={styles.dataText}>{lastBook.title}</Text>
              </Text>
              <Text style={styles.boxText}>
                Author: <Text style={styles.dataText}>{lastBook.author}</Text>
              </Text>
              <Text style={styles.boxText}>
                Genre: <Text style={styles.dataText}>{lastBook.genre}</Text>
              </Text>
              <Text style={styles.boxText}>
                Number of Pages: <Text style={styles.dataText}>{lastBook.pages}</Text>
              </Text>
            </>
          )}
        </View>
        </FadeInView>
        <FadeInView>
        <View style={styles.boxOutline}>
          <Text style={styles.boxText}>
            Your Total Pages Read: <Text style={styles.dataText}>{totalPagesRead}</Text>
          </Text>
          <Text style={styles.boxText}>
            Average Pages Per Book: <Text style={styles.dataText}>
              {totalBooks > 0 ? Math.round(totalPagesRead / totalBooks) : 0}
            </Text>
          </Text>
        </View>
        </FadeInView>
        <Button
          title="Add Book"
          color="green"
          onPress={() => {
            navigation.navigate('AddBook', { addBook });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      backgroundColor: 'green',
      paddingVertical: 20,
      paddingHorizontal: 20,
    },
    headerBox: {
      backgroundColor: 'black',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 5,
    },
    headerText: {
      color: 'white',
      fontSize: 30,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    mainPicture: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoPicture: {
      width: '40%', 
      height: '40%', 
      resizeMode: 'contain' 
    },
    boxOutline: {
      borderWidth: 3,
      borderColor: 'black',
      padding: 20,
      marginBottom: 10,
      borderRadius: 5,
      backgroundColor: 'transparent',
    },
    boxheader: {
      fontSize: 30,
      color: 'black',
      fontWeight: 'bold',
    },
    boxText: {
      fontSize: 22.5,
      color: 'black',
    },
    dataText: {
      color: 'purple',
      fontWeight: 'bold'
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#ccc',
      paddingVertical: 10,
    },
    tabItem: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
  });

export default HomeScreen