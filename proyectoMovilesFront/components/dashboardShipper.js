import React from 'react';
import { Center, Container, Heading, Text } from 'native-base';

export default function Shipper() {
    return <Center>
        <Container>
          <Heading>
            A component library for the
            <Text color="emerald.500"> React Ecosystem</Text>
          </Heading>
          <Text mt="3" fontWeight="medium">
            NativeBase is a simple, modular and accessible component library that
            gives you building blocks to build you React applications.
          </Text>
        </Container>
      </Center>;
  }