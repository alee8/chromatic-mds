import React from 'react';

import ComponentWrappers from '~tests/setupTests/ComponentWrappers';

export default function withProviders(storyFn) {
  return (
    <ComponentWrappers>
      {storyFn()}
    </ComponentWrappers>
  );
}
