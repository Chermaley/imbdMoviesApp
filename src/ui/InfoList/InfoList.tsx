import React from 'react';
import {FlatList, Text, View} from 'react-native';
import styles from './styles';
import {ListRenderItemInfo} from '@react-native/virtualized-lists/Lists/VirtualizedList';

type InfoListProps = {
  data: string[];
};

const InfoList: React.FC<InfoListProps> = ({data}) => {
  const renderItem = ({item}: ListRenderItemInfo<string>) => (
    <View style={styles.infoItem}>
      <Text style={styles.infoItemText}>{item}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default InfoList;
