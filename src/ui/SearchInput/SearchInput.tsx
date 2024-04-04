import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

interface SearchInputProps extends TextInputProps {}

const SearchInput: React.FC<SearchInputProps> = props => {
  return <TextInput {...props} />;
};

export default SearchInput;
