import { ActionButton, View, ViewProps } from '@adobe/react-spectrum';
import React from 'react';

export interface ButtonWrapperProps extends ViewProps<6> {
  children: React.ReactNode;
}

export function ButtonWrapper(props: ButtonWrapperProps) {
  const { children, ...rest } = props;
  return (
    <ActionButton
      isQuiet
      UNSAFE_style={{
        blockSize: 'unset',
        minInlineSize: 'unset',
        border: 'none',
      }}
    >
      <View {...rest} UNSAFE_style={{ display: 'flex' }}>
        {children}
      </View>
    </ActionButton>
  );
}
