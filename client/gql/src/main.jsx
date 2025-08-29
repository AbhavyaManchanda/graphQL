import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from "./App.jsx";
import "./index.css";
import { ApolloClient,HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from '@apollo/client/react';


//Is client ko <ApolloProvider> ke through React app me inject kar diya, taake sari app ke components GraphQL ke hooks (useQuery, useMutation) use kar saken.
const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/" }),
  cache: new InMemoryCache(), //response data ko local cache me rakhta hai taake queries fast ho.
});



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <App />

    </ApolloProvider>
  </StrictMode>,
)
