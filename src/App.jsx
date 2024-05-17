import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import { FormProject } from './pages/FormProject'
import { Home } from './pages/Home'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#F1E4E8',
      },
    },
  },
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Formulario-Proyecto" element={<FormProject />} />
      </Routes>
    </ChakraProvider>
  )
}

export default App
