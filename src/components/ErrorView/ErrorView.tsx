import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles.ts';

type ErrorViewProps = {
  onRetry: () => void;
};

const ErrorView: React.FC<ErrorViewProps> = ({onRetry}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={require('../../images/Error.png')} style={styles.img} />
      <Text style={styles.message}>Something went wrong.</Text>
      <TouchableOpacity onPress={onRetry}>
        <Text style={styles.retry}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ErrorView;
