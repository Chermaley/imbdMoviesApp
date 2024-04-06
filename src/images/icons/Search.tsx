import React from 'react';
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
        d="M15.15 13.692h-.768l-.272-.263a6.29 6.29 0 001.526-4.111 6.317 6.317 0 10-6.318 6.318 6.29 6.29 0 004.111-1.526l.263.272v.768l4.86 4.85L20 18.552l-4.85-4.86zm-5.832 0a4.368 4.368 0 01-4.374-4.374 4.368 4.368 0 014.374-4.374 4.368 4.368 0 014.374 4.374 4.368 4.368 0 01-4.374 4.374z"
        fill="currentColor"
      />
    </Svg>
  ),
);
