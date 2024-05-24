import { Box, Button, Container, Divider, Heading } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import { CardUser } from '../components/CardUser'

export const Home = () => {
  return (
    <Container
      maxW={{ base: '100%', md: 'sm', lg: 'md', xl: 'lg' }}
      mx="auto"
      bgColor="#F0F2F5"
      height={{ base: '100vh', md: 500 }}
      mt={{ base: 0, md: 10 }}
      bgGradient="linear(to-l, #7896C2, tomato)"
      centerContent
    >
      <Container pt={2}>
        <Container maxW="lg" bg="white" pt={2}>
          <Box>
            <Divider color="gray.100" />
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              pt={2}
              pb={2}
            >
              <Heading as="h2" size="md" color="black">
                My projects
              </Heading>
              <Button
                as={Link}
                to="/Formulario-Proyecto"
                bg="wheat"
                color="tomato"
                _hover={{ color: 'wheat', background: 'tomato' }}
              >
                + Add Project
              </Button>
            </Box>
          </Box>
        </Container>
        <CardUser />
      </Container>
    </Container>
  )
}
