import { Box, Button, HStack, Heading, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from 'react-icons/ai'

const Footer = () => {
  return (
  <Box bgColor={'blackAlpha.900'} minH={'40'} p={'16'} color={'white'}>

    <Stack direction={['column','row']}>

        <VStack alignItems={'stretch'} w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'} textAlign={['center','left']} >
                Subscribe to get Future Updates.
            </Heading>
            <HStack
            borderBottom={'2px solid white'} py={'2'}>
                <Input placeholder='Enter Your Email Here...'
                border={'none'}
                borderRadius={'none'}
                outline={'none'}
                focusBorderColor='none'
                />
                <Button
                p={'0'}
                colorScheme='purple'
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}
            
                >
                     <AiOutlineSend  size={30} />
                </Button>
            </HStack>
        </VStack>

        <VStack 
        w={'full'} 
        borderLeft={['none','1px solid white']}
        borderRight={['none','1px solid white']}
        >

            <Heading textTransform={'uppercase'} textAlign={'center'}>
                VIDEO HUB
            </Heading>
            <Text>All Rights Reserved</Text>

        </VStack>


        <VStack w={'full'} >
            <Heading size={'md'} textTransform={'uppercase '}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme='white'>
                <a target='blank' href="http://youtube.com/6packprogrammer">Youtube</a>

            </Button>

            <Button variant={'link'} colorScheme='white'>
                <a target='blank' href="http://instagram.com/tanmaydixit_0206">Instagram</a>

            </Button>

            <Button variant={'link'} colorScheme='white'>
                <a target='blank' href="http://github.com/6packprogrammer">Github</a>

            </Button>
        </VStack>

    </Stack>

  </Box>
    
  );
}

export default Footer

