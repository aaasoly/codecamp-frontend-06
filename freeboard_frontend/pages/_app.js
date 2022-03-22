import '../styles/globals.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

function MyApp({ Component, pageProps }) {

  const client = new ApolloClient ({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp // function 앞에 export default 쓰고 이부분은 지워도 됨. 똑같은 것
