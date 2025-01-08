import React from 'react';
import { ActionButton, View, ViewProps } from '@adobe/react-spectrum';

export interface ButtonWrapperProps extends ViewProps<6> {
  children: React.ReactNode;
}

export function ButtonWrapper(props: ButtonWrapperProps) {
  const { children, ...rest } = props;
  return (
    <ActionButton
      isQuiet
      UNSAFE_style={{ blockSize: 'unset', minInlineSize: 'unset' }}
    >
      <View {...rest}>{children}</View>
    </ActionButton>
  );
}
