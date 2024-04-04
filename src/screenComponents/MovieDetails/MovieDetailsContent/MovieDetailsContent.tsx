import React from 'react';
import { Text, View} from 'react-native';
import styles from './styles';
import InfoList from '../../../ui/InfoList';

type MovieHeaderProps = {
  description: string;
  actors: string[];
  keywords: string;
};

const MovieDetailsContent = ({
  description,
  actors,
  keywords,
}: MovieHeaderProps) => {
  return (
    <View style={styles.content}>
      <View>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View>
        <Text style={styles.sectionTitle}>Actors</Text>
        <InfoList data={actors} />
      </View>
      <View>
        <Text style={styles.sectionTitle}>Keywords</Text>
        <InfoList data={keywords.split(',')} />
      </View>
    </View>
  );
};

export default MovieDetailsContent;
