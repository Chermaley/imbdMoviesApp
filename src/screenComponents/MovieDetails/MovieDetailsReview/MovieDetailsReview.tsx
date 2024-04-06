import React, {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import StarIcon from '../../../images/icons/Star.tsx';
import {colors} from '../../../colors';
import {decode} from 'html-entities';

type ReviewProps = {
  author: string;
  dateCreated: string;
  body: string;
  rating?: number;
};

const Review: React.FC<ReviewProps> = ({author, dateCreated, rating, body}) => {
  const [fullReview, setFullReview] = useState(false);
  const toggleFullReview = () => setFullReview(!fullReview);

  const bodyText = fullReview ? body : `${body.slice(0, 210)}...`;

  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.author}>{author}</Text>
        {!!rating && (
          <View style={styles.row}>
            <StarIcon color={colors.gold} />
            <Text style={styles.ratingValue}>
              {rating} / <Text style={styles.ratingTotal}>10</Text>
            </Text>
          </View>
        )}
      </View>
      <Text style={styles.body}>{decode(bodyText)}</Text>
      <Text style={styles.toggle} onPress={toggleFullReview}>
        {fullReview ? 'Show less' : 'Show more'}
      </Text>
      <Text style={styles.date}>{dateCreated}</Text>
    </View>
  );
};

export default Review;
