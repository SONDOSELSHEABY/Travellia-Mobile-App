import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, StatusBar } from 'react-native';
import SearchResultComponent from '../components/SearchResultComponent/SearchResultComponent';

const SearchedCategory = () => {
  const categoryInCity = useRoute().params;
  const navigation = useNavigation();
  StatusBar.setBackgroundColor('#181818');
  StatusBar.setBarStyle('white');
  useEffect(() => {
    navigation.setOptions({
      title:
        categoryInCity.category.length > 1
          ? categoryInCity.title
          : categoryInCity.specifiedTitle,
      headerStyle: {
        backgroundColor: '#181818',
        borderBottomWidth: 0,
      },
      headerTitleStyle: {
        color: 'white',
      },
      headerTintColor: 'white',
    });
  }, [categoryInCity, navigation]);
  return (
    <FlatList
      data={categoryInCity.category}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <SearchResultComponent
          item={item}
          image={item.images[0]}
          name={item.name}
          rating={item.rating}
          locationName={item.location?.locationName}
          address={item.address}
          reviews={item.reviews}
          website={item.website}
          money={item.money}
        />
      )}
    />
  );
};

export default SearchedCategory;