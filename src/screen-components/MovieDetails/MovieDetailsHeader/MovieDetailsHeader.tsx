import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {BackIcon} from '../../../images/icons';
import {colors} from '../../../colors';
import styles from './styles';

type MovieHeaderProps = {
  poster?: string;
  title?: string;
  movieLoading: boolean;
  movieError?: boolean;
  onGoBack: () => void;
};

const MovieHeader = ({
  poster,
  title,
  movieLoading,
  movieError,
  onGoBack,
}: MovieHeaderProps) => {
  if (movieLoading || movieError) {
    return (
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          style={styles.backIcon}
          hitSlop={{top: 24, left: 24, right: 24, bottom: 24}}
          onPress={onGoBack}>
          <BackIcon
            width={32}
            height={32}
            color={colors.white}
            onPress={onGoBack}
          />
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.imageWrapper}>
      <LinearGradient
        colors={['black', 'transparent', 'transparent', 'transparent']}
        style={styles.gradient}
      />
      <TouchableOpacity
        style={styles.backIcon}
        hitSlop={{top: 24, left: 24, right: 24, bottom: 24}}
        onPress={onGoBack}>
        <BackIcon
          width={32}
          height={32}
          color={colors.white}
          onPress={onGoBack}
        />
      </TouchableOpacity>
      <Text style={styles.title} ellipsizeMode="tail" numberOfLines={3}>
        {title}
      </Text>
      {poster && <Image source={{uri: poster}} style={styles.image} />}
      <LinearGradient
        colors={['transparent', 'transparent', 'transparent', 'black']}
        style={styles.gradient}
      />
    </View>
  );
};

export default MovieHeader;
