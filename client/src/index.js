import React from 'react';
import ReactDOM from 'react-dom';
import ApolloProvider  from "./ApolloProvider"

ReactDOM.render(
  <React.StrictMode>
   {/* Needed to import apollo provider lke this I don't know why */}
   {ApolloProvider}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
 