import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Back from '../../../icons/Back';
import { colors } from '../../../colors';
import styles from './styles';

type MovieHeaderProps = {
  poster: string;
  title: string;
  onGoBack: () => void;
};

const MovieHeader = ({ poster, title, onGoBack }: MovieHeaderProps) => {
  return (
    <View style={styles.imageWrapper}>
      <LinearGradient
        colors={['black', 'transparent', 'transparent', 'transparent']}
        style={styles.gradient}
      />
      <TouchableOpacity           style={styles.backIcon}
 hitSlop={{ top: 24, left: 24, right: 24, bottom: 24 }}         onPress={onGoBack}>
        <Back
          width={32}
          height={32}
          color={colors.white}
          onPress={onGoBack}
        />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: poster }} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'transparent', 'transparent', 'black']}
        style={styles.gradient}
      />
    </View>
  );
};

export default MovieHeader;
