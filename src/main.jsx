import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import  {CounterContextProvider}  from './context/CounterContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CounterContextProvider>
      {/* ##CRIANDO O PROVIDER DO CONTEXT */}
      <App />
    </CounterContextProvider>
  </React.StrictMode>,
)
