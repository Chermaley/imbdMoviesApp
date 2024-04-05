import React, {useState} from 'react';
import {ActivityIndicator, Image, Text, TouchableOpacity, View,} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {colors} from '../../colors';

type MovieCardProps = {
  title: string;
  image: string;
  onPress: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({title, image, onPress}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const loadImageHandler = () => {    
    setImageLoaded(true)
  }

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.95}>
      <LinearGradient
        colors={['transparent','transparent','transparent', 'black']}
        style={styles.gradient}
      />
      {image && (
        <>
          {!imageLoaded && image && (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color={colors.secondary} />
              </View>
          )}
          <Image
            style={{
              ...styles.cardImage,
              opacity: imageLoaded ? 1 : 0,
            }}
            source={{uri: image}}
            resizeMode={'cover'}
            onLoad={loadImageHandler}
          />
        </>
      )}
      <Text style={styles.cardTitle} ellipsizeMode="tail" numberOfLines={1}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default MovieCard;
