import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Footer, Navbar } from './Components'
import { Home } from './Pages'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

const App = () => {
  return (
    <div>
      <section>
        <Navbar />
      </section>

      <section>
        <RouterProvider router={router} />
      </section>
      
      <section>
        <Footer />
      </section>
    </div>
  )
}

export default App
