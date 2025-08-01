
import { BrowserRouter, Route, Routes } from "react-router"
import LoginForm from "./components/LoginForm"
import Register from "./components/Register"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
        <Route path="/" element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<Register />} />
        </Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App