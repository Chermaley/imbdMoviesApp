import * as React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

export default React.forwardRef(
  (props: React.ComponentProps<Svg>, ref?: React.Ref<View>) => (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      ref={ref}
      {...props}>
      <Path
        d="M14.186 5.254a.866.866 0 00-1.226 0l-5.757 5.758a.69.69 0 000 .976l5.757 5.757c.34.34.886.34 1.226 0a.865.865 0 000-1.226L9.17 11.496l5.023-5.022a.863.863 0 00-.007-1.22z"
        fill="currentColor"
      />
    </Svg>
  ),
);
