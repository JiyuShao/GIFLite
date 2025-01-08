import React from 'react';
import {
  View,
  Flex,
  Text,
  // useProvider,
  Item,
  ActionGroup,
  Divider,
} from '@adobe/react-spectrum';

import Share from '@spectrum-icons/workflow/Share';
import SaveFloppy from '@spectrum-icons/workflow/SaveFloppy';
import { ButtonWrapper } from '../../ui/button-wrapper';
// import Moon from '@spectrum-icons/workflow/Moon';
// import Light from '@spectrum-icons/workflow/Light';

export default function Header() {
  // const { colorScheme } = useProvider();

  // const toggleTheme = () => {
  //   setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  // };

  return (
    <View height="100%">
      <Flex
        height="100%"
        gap="size-300"
        alignItems="center"
        justifyContent="space-between"
      >
        <Flex gap="size-125">
          <ButtonWrapper>
            <Flex alignItems="end">
              <View
                height="size-350"
                width="size-150"
                borderRadius="regular"
                UNSAFE_style={{
                  backgroundColor: 'rgba(255, 193, 7, 1)',
                }}
              />
              <Text
                UNSAFE_style={{
                  fontWeight: 'bold',
                  fontSize: '10px',
                }}
              >
                GifLite
              </Text>
            </Flex>
          </ButtonWrapper>
          <Divider orientation="vertical" size="M" />
        </Flex>

        {/* 右侧主题切换按钮 */}
        <ActionGroup buttonLabelBehavior="hide">
          <Item key="share">
            <Share />
            <Text>Share</Text>
          </Item>

          <Item key="save">
            <SaveFloppy aria-label="Save to local" />
            <Text>Save</Text>
          </Item>

          {/* <Item key="theme">
            {colorScheme === 'dark' ? (
              <Moon aria-label="In dark theme" />
            ) : (
              <Light aria-label="In light theme" />
            )}
            <Text>Theme</Text>
          </Item> */}
        </ActionGroup>
      </Flex>
    </View>
  );
}
