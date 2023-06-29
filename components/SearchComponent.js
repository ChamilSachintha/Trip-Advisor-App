import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import axios from 'axios';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const fetchSuggestions = async (text) => {
    try {
      const response = await axios.get(
        `https://api.example.com/autocomplete?query=${text}`
      );
      setSuggestions(response.data.suggestions);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (text) => {
    setQuery(text);
    fetchSuggestions(text);
  };

  return (
    <View>
      <TextInput
        placeholder="Search..."
        value={query}
        onChangeText={handleInputChange}
      />
      <FlatList
        data={suggestions}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default SearchComponent;
