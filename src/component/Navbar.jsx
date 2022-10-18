import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  return (
    <Flex p={2} minWidth='max-content' alignItems='center' gap='2'>
    <Box p='2'>
      <Heading size='md'>SURENDRA</Heading>
    </Box>
    <Spacer />
    <ButtonGroup gap='2'>
      <Button colorScheme='teal'>About</Button>
      <Button colorScheme='teal'>Projects</Button>
      <Button colorScheme='teal'>Tech</Button>
      <Button colorScheme='teal'>Contact</Button>
    </ButtonGroup>
  </Flex>
  )
}

export default Navbar
