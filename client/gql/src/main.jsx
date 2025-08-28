// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// import './index.css'
// import App from './App.jsx'

// const client = new ApolloClient({
//   uri: "http://localhost:4000/",
//   cache: new InMemoryCache(),
  
// });

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <ApolloProvider client={client}>
//     <App />

//     </ApolloProvider>
//   </StrictMode>,
// )


import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
);
