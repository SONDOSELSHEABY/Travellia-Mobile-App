import { View, Text, StyleSheet,ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatButton from '../components/CategoryButton'; 
import Discover from '../components/Discover/Discover';


const Search = () => {
  const pictures = {
    picture1: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS22xEXvcTlk1a0FIqUg3Gmrp9sqAZ8GZzdQ&usqp=CAU://cnn-arabic-images.cnn.io/cloudinary/image/upload/w_1920,c_scale,q_auto/cnnarabic/2022/12/30/images/229561.jpg",
      caption: "New York City",
    },
    picture2: {
      url: "https://img.freepik.com/free-photo/singapore-cityscape-twilight_335224-686.jpg?size=626&ext=jpg&ga=GA1.1.2116175301.1700611200&semt=ais",
      caption: "Singapore",
    },
    picture3: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgVE9sjTfm6wsVHto-QzWm3DOfhV3FVzx5vQ&usqp=CAU",
      caption: "Rome",
    },
    picture4: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdTWeFNtL-D9o9LwbUo_-72915Pd-hwokKw&usqp=CAU",
      caption: "Paris",
    },
  };
  const Card = ({ picture }) => {
    return (
      <View style={styles.card}>
        <ImageBackground
          source={{ uri: picture.url }}
          resizeMode="cover"
          style={styles.backgroundImage}
          imageStyle={{ borderRadius: 10 }}
        >
          <Text style={styles.caption}>{picture.caption}</Text>
        </ImageBackground>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
      <View>
        <CatButton />
      </View>
      
      <View>
        <Discover />
      </View>
      <View>
        <Text style={styles.text}>Destinations travelers love</Text>
      <View style={styles.containerCard}>
        <View style={styles.row}>
          <Card picture={pictures.picture1} />
          <Card picture={pictures.picture2} />
        </View>
        <View style={styles.row}>
          <Card picture={pictures.picture3} />
          <Card picture={pictures.picture4} />
        </View>
      </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#181818',
    flex: 1,
  },
  text:{
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    padding: 10,
    paddingHorizontal:20,
  },
  containerCard: {
    flex: 1,
    alignItems: "center",
    margin:10,
    padding: 5,
   
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  card: {
    width: 150,
    height: 150,
    marginHorizontal: 5,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  caption: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    marginTop: 120,
    paddingHorizontal:10,
    
  },
});
