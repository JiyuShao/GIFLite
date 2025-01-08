import React from 'react';
import {
  View,
  Image,
  Flex,
  Text,
  Item,
  Divider,
  MenuTrigger,
  Menu,
  Section,
} from '@adobe/react-spectrum';

import ShowMenu from '@spectrum-icons/workflow/ShowMenu';
import ChevronDown from '@spectrum-icons/workflow/ChevronDown';
import { ButtonWrapper } from '../../ui/button-wrapper';
import Undo from '@spectrum-icons/workflow/Undo';
import Redo from '@spectrum-icons/workflow/Redo';

export default function Header() {
  // const { colorScheme } = useProvider();

  // const toggleTheme = () => {
  //   setColorScheme(colorScheme === 'light' ? 'dark' : 'light');
  // };

  return (
    <View height="100%">
      <Flex height="100%" alignItems="center" justifyContent="space-between">
        {/* 左侧 */}
        <Flex alignItems="center" gap="size-50">
          {/* 项目logo */}
          <View marginStart="size-50">
            <ButtonWrapper width="size-300" height="size-300" padding="size-50">
              <View
                width="size-100"
                borderRadius="small"
                UNSAFE_style={{
                  backgroundColor: '#a85721',
                }}
              >
                <Text
                  alignSelf="center"
                  UNSAFE_style={{
                    fontWeight: 'bold',
                    fontSize: '9px',
                  }}
                >
                  Gif
                </Text>
              </View>
              <Text
                alignSelf="end"
                UNSAFE_style={{
                  fontWeight: 'bold',
                  fontSize: '9px',
                }}
              >
                Lite
              </Text>
            </ButtonWrapper>
          </View>

          <Divider
            orientation="vertical"
            alignSelf="center"
            size="M"
            height="size-250"
          />

          {/* 项目菜单 */}
          <MenuTrigger>
            <ButtonWrapper padding="size-50">
              <ShowMenu size="S" aria-label="Show menu" />
            </ButtonWrapper>
            <Menu onAction={key => alert(key)} width="static-size-2400">
              <Section>
                <Item key="new">New</Item>
                <Item key="open">Open</Item>
                <Item key="save">Save</Item>
              </Section>

              <Section>
                <Item key="undo">Undo</Item>
                <Item key="redo">Redo</Item>
                <Item key="cut">Cut</Item>
                <Item key="copy">Copy</Item>
                <Item key="paste">Paste</Item>
              </Section>

              <Section>
                <Item key="settings">Settings...</Item>
              </Section>
            </Menu>
          </MenuTrigger>

          {/* 项目名称 */}
          <MenuTrigger>
            <ButtonWrapper padding="size-50">
              <Flex alignItems="center" gap="size-50">
                <Text>Untitled-1</Text>
                <ChevronDown size="S" />
              </Flex>
            </ButtonWrapper>
            <Menu onAction={key => alert(key)} width="static-size-2400">
              <Section>
                <Item key="rename">Rename...</Item>
                <Item key="document-info">Document Info...</Item>
                <Item key="image-size">Image Size...</Item>
              </Section>

              <Section>
                <Item key="version-history">Version History</Item>
              </Section>
            </Menu>
          </MenuTrigger>
        </Flex>

        {/* 右侧 */}
        <Flex alignItems="center" gap="size-50">
          {/* 撤销重做 */}
          <ButtonWrapper padding="size-50">
            <Undo size="S" aria-label="Undo" />
          </ButtonWrapper>
          <ButtonWrapper padding="size-50">
            <Redo size="S" aria-label="Redo" />
          </ButtonWrapper>

          {/* Zoom Level */}
          <MenuTrigger>
            <ButtonWrapper padding="size-50">
              <Flex alignItems="center" gap="size-50">
                <Text>100%</Text>
                <ChevronDown size="S" />
              </Flex>
            </ButtonWrapper>
            <Menu onAction={key => alert(key)} width="static-size-2400">
              <Section>
                <Item key="zoom-in">Zoom In</Item>
                <Item key="zoom-out">Zoom Out</Item>
              </Section>

              <Section>
                <Item key="100%">100%</Item>
                <Item key="200%">200%</Item>
                <Item key="fit-to-screen">Fit to Screen</Item>
                <Item key="actual-size">Actual Size</Item>
              </Section>

              <Section>
                <Item key="full-screen-mode">Full Screen Mode</Item>
                <Item key="standard-screen-mode">Standard Screen Mode</Item>
              </Section>
            </Menu>
          </MenuTrigger>

          <Divider
            orientation="vertical"
            alignSelf="center"
            size="M"
            height="size-250"
          />

          {/* Profile */}
          <View marginEnd="size-50">
            <MenuTrigger>
              <ButtonWrapper
                padding="size-50"
                borderRadius="large"
                overflow="hidden"
              >
                <Image
                  width="size-300"
                  height="size-300"
                  src="https://avatars.githubusercontent.com/u/6871513?v=4&size=64"
                  objectFit="cover"
                  alt="Avatar"
                />
              </ButtonWrapper>
              <Menu onAction={key => alert(key)} width="static-size-2400">
                <Section title="Hello, I'm Jiyu Shao. Follow me on:">
                  <Item key="github">Github</Item>
                  <Item key="blog">Blog</Item>
                </Section>
              </Menu>
            </MenuTrigger>
          </View>
        </Flex>
      </Flex>
    </View>
  );
}
