import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { fetchNews } from '../services/NewsService'; // servizio per le news

const NewsScreen = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((data) => setNews(data))
      .catch((err) => console.error("Error fetching news:", err));
  }, []);

  return (
    <View>
      <Text>News</Text>
      <FlatList
        data={news}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default NewsScreen;
