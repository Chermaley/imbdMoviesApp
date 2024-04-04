import React, {useRef, useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import SearchIcon from '../../icons/Search.tsx';
import CloseIcon from '../../icons/Close.tsx';
import styles from './styles.ts';
import {colors} from '../../colors';

interface HomeHeaderProps {
  search: string;
  onSearchChange: (search: string) => void;
}

const HomeHeader = ({search, onSearchChange}: HomeHeaderProps) => {
  const searchInputRef = useRef<TextInput>(null);
  const [isSearching, setIsSearching] = useState(false);

  const pressSearchIconHandler = () => {
    setIsSearching(true);
    searchInputRef.current?.focus();
  };

  const pressCloseSearchIconHandler = () => {
    setIsSearching(false);
    onSearchChange('');
    Keyboard.dismiss();
  };

  const submitEditingHandler = () => {
    Keyboard.dismiss();
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.searchRow, !isSearching && styles.hiddenClass]}>
        <TextInput
          ref={searchInputRef}
          value={search}
          onChangeText={onSearchChange}
          placeholderTextColor="rgba(242, 241, 243, 0.5)"
          onBlur={submitEditingHandler}
          onSubmitEditing={submitEditingHandler}
          style={styles.searchInput}
          placeholder="Search"
          keyboardAppearance="dark"
          returnKeyType="search"
        />
        <TouchableOpacity
          onPress={pressCloseSearchIconHandler}
          hitSlop={{top: 24, left: 24, right: 24, bottom: 24}}>
          <CloseIcon width={24} height={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View style={[styles.headerRow, isSearching && styles.hiddenClass]}>
        <Text style={styles.headerTitle}>Movies</Text>
        <TouchableOpacity onPress={pressSearchIconHandler}>
          <SearchIcon color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;
