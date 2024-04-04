import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {colors} from '../../colors';

type MovieCardProps = {
  title: string;
  image: string;
  onPress: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({title, image, onPress}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.95}>
      <LinearGradient
        colors={['transparent', 'black']}
        style={styles.gradient}
      />
      {image && (
        <>
          {!imageLoaded ||
            (!image && (
              <View style={styles.loader}>
                <ActivityIndicator size="large" color={colors.secondary} />
              </View>
            ))}
          <Image
            style={{
              ...styles.cardImage,
              display: imageLoaded ? 'flex' : 'none',
            }}
            source={{uri: image}}
            resizeMode={'cover'}
            onLoad={() => setImageLoaded(true)}
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
