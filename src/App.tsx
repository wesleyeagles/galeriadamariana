import { ApolloProvider } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import { client } from './lib/apollo'


function App() {


  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
      <ChakraProvider>
        <Router />
      </ChakraProvider>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
