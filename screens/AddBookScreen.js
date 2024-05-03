import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Animated } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

const AddBookScreen = ({ navigation, route }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [pages, setPages] = useState('');
  
  const genreData = [
    { key: 'Action and adventure', value: 'Action and adventure' },
    { key: 'Alternate history', value: 'Alternate history' },
    { key: 'Anthology', value: 'Anthology' },
    { key: 'Chick lit', value: 'Chick lit' },
    { key: "Children's", value: "Children's" },
    { key: 'Classic', value: 'Classic' },
    { key: 'Comic book', value: 'Comic book' },
    { key: 'Coming-of-age', value: 'Coming-of-age' },
    { key: 'Crime', value: 'Crime' },
    { key: 'Drama', value: 'Drama' },
    { key: 'Fairytale', value: 'Fairytale' },
    { key: 'Fantasy', value: 'Fantasy' },
    { key: 'Graphic novel', value: 'Graphic novel' },
    { key: 'Historical fiction', value: 'Historical fiction' },
    { key: 'Horror', value: 'Horror' },
    { key: 'Mystery', value: 'Mystery' },
    { key: 'Paranormal romance', value: 'Paranormal romance' },
    { key: 'Picture book', value: 'Picture book' },
    { key: 'Poetry', value: 'Poetry' },
    { key: 'Political thriller', value: 'Political thriller' },
    { key: 'Romance', value: 'Romance' },
    { key: 'Satire', value: 'Satire' },
    { key: 'Science fiction', value: 'Science fiction' },
    { key: 'Short story', value: 'Short story' },
    { key: 'Suspense', value: 'Suspense' },
    { key: 'Thriller', value: 'Thriller' },
    { key: 'Western', value: 'Western' },
    { key: 'Young adult', value: 'Young adult' },
    { key: 'Art/architecture', value: 'Art/architecture' },
    { key: 'Autobiography', value: 'Autobiography' },
    { key: 'Biography', value: 'Biography' },
    { key: 'Business/economics', value: 'Business/economics' },
    { key: 'Crafts/hobbies', value: 'Crafts/hobbies' },
    { key: 'Cookbook', value: 'Cookbook' },
    { key: 'Diary', value: 'Diary' },
    { key: 'Dictionary', value: 'Dictionary' },
    { key: 'Encyclopedia', value: 'Encyclopedia' },
    { key: 'Guide', value: 'Guide' },
    { key: 'Health/fitness', value: 'Health/fitness' },
    { key: 'History', value: 'History' },
    { key: 'Home and garden', value: 'Home and garden' },
    { key: 'Humor', value: 'Humor' },
    { key: 'Journal', value: 'Journal' },
    { key: 'Math', value: 'Math' },
    { key: 'Memoir', value: 'Memoir' },
    { key: 'Philosophy', value: 'Philosophy' },
    { key: 'Prayer', value: 'Prayer' },
    { key: 'Religion, spirituality, and new age', value: 'Religion, spirituality, and new age' },
    { key: 'Textbook', value: 'Textbook' },
    { key: 'True crime', value: 'True crime' },
    { key: 'Review', value: 'Review' },
    { key: 'Science', value: 'Science' },
    { key: 'Self help', value: 'Self help' },
    { key: 'Sports and leisure', value: 'Sports and leisure' },
    { key: 'Travel', value: 'Travel' }
  ];


  const addBook = () => {
    if (!title || !author || !genre || !pages) {
      alert('Please fill in all fields');
      return;
    }
    const book = { title, author, genre, pages: parseInt(pages) };
    route.params.addBook(book);
    navigation.goBack();
  };
    const cancel = () => {
      navigation.goBack();
    };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerBox}>
          <Text style={styles.headerText}>ADD BOOK</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.boxOutline}>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.input}
              placeholder="Title"
              placeholderTextColor="black"
              onChangeText={setTitle}
              value={title}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Author"
              placeholderTextColor="black"
              onChangeText={setAuthor}
              value={author}
            />
          </View>
          <View style={styles.selectListContainer}>
          <SelectList
            setSelected={setGenre}
            data={genreData}
            placeholder="Genre"
            selected={genre}
            label="Genre"
            inputStyles={{ color: 'black', fontSize: 22.5 }}
            dropdownTextStyles={{ color: 'black', fontSize: 22.5 }}
          />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Number of Pages"
              placeholderTextColor="black"
              onChangeText={setPages}
              value={pages}
              keyboardType="numeric"
            />
          </View>
        </View>
        <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button title="Cancel" color="green" onPress={cancel} />
          </View>
          <View style={{ marginLeft: 40 }} />
          <View style={styles.buttonWrapper}>
          <Button title="Add Book" color="green" onPress={addBook} />
          </View>
        </View>
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
  boxOutline: {
    borderWidth: 3,
    borderColor: 'black',
    padding: 30,
    marginBottom: 30,
    marginTop: 30,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  input: {
    fontSize: 22.5,
    color: 'black',
  },
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 20,
  },
  selectListContainer: {
    width: '100%',
    marginBottom: 20,
  },  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.4,
  },
});

export default AddBookScreen;