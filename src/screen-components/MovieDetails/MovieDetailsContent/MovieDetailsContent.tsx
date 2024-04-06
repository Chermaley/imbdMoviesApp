import React from 'react';
import {Text, View} from 'react-native';
import InfoList from '../../../ui/InfoList';
import {ReviewType} from '../../../api/models/MovieType.ts';
import MovieDetailsReview from '../MovieDetailsReview';
import {decode} from 'html-entities';
import styles from './styles';

type MovieHeaderProps = {
  description?: string;
  actors?: string[];
  keywords?: string;
  review?: ReviewType;
  loading?: boolean;
};

const MovieDetailsContent = ({
  description,
  actors,
  keywords,
  review,
}: MovieHeaderProps) => {
  return (
    <View style={styles.content}>
      {description && (
        <View>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.description}>{decode(description)}</Text>
        </View>
      )}
      {actors && (
        <View>
          <Text style={styles.sectionTitle}>Actors</Text>
          <InfoList data={actors} />
        </View>
      )}
      {!!keywords && (
        <View>
          <Text style={styles.sectionTitle}>Keywords</Text>
          <InfoList data={keywords.split(',')} />
        </View>
      )}
      {review && (
        <View style={styles.review}>
          <Text style={styles.sectionTitle}>Review</Text>
          <MovieDetailsReview
            author={review.author}
            body={review.reviewBody}
            dateCreated={review.dateCreated}
            rating={review.reviewRating}
          />
        </View>
      )}
    </View>
  );
};

export default MovieDetailsContent;
