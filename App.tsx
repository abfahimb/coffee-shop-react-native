import React from 'react';

import { OnboardFlow } from 'react-native-onboard';

export default function App() {
  return (
    <OnboardFlow
      pages={[
        {
          title: 'Welcome to my app',
          subtitle: 'This is page 1',
          imageUri: '',
          primaryButtonTitle: 'this is fahim',
        },
      ]}
      type={'fullscreen'}
      backgroundImageUri="https://i.ibb.co/M8qykdm/onboarding.png"
    />
  );
}
