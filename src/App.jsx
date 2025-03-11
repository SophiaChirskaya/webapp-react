import HomePage from "./pages/HomePage"
import MoviePage from "./pages/MoviePage"
import DefaultLayout from './layouts/DefaultLayout'
import { BrowserRouter, Router, Route } from "react-router"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index path="/" element={<HomePage/>} />
          <Route path="/movies/:id" element={<MoviePage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
