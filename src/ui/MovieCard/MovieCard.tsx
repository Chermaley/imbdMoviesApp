import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

type MovieCardProps = {
  title: string;
  image: string;
  onPress: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({title, image, onPress}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <LinearGradient
        colors={['transparent', 'black']}
        style={styles.gradient}
      />
      {!imageLoaded && (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
      <Image
        style={{...styles.cardImage, display: imageLoaded ? 'flex' : 'none'}}
        source={{uri: image}}
        resizeMode={'cover'}
        onLoad={() => setImageLoaded(true)}
      />
      <Text style={styles.cardTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
