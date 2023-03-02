import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import router from './routes'


const GlobalStyle = createGlobalStyle`
  *{
    margin:0px;
    padding: 0px;
    box-sizing: border-box;
  }
`
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GlobalStyle />
    <RouterProvider router={router} />
    </>
  )
}

export default App
