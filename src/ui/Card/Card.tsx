import React, {useState} from 'react';
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {colors} from '../../colors';

type CardProps = {
  title: string;
  image: string;
  onPress: () => void;
};

const Card: React.FC<CardProps> = ({title, image, onPress}) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const loadImageHandler = () => {
    setImageLoaded(true);
  };

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.95}>
      <LinearGradient
        colors={['transparent', 'transparent', 'transparent', 'black']}
        style={styles.gradient}
      />
      {!image && (
        <View style={styles.noImage}>
          <Text style={styles.noImageText}>No image</Text>
        </View>
      )}
      {image && (
        <>
          {!imageLoaded && image && (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color={colors.secondary} />
            </View>
          )}
          <Image
            style={[styles.cardImage, !imageLoaded && styles.hidden]}
            source={{uri: image}}
            resizeMode="cover"
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

export default Card;
