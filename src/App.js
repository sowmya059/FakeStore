import { BrowserRouter } from 'react-router-dom'
import RouterProvider from './Components/RouterProvider'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <RouterProvider />
      </div>
    </BrowserRouter>
  )
}

export default App
