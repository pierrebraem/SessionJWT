import { BrowserRouter, Routes, Route } from "react-router";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import Login from "./components/login/Login";
import Logout from "./components/Logout/Logout";
import User from "./components/User/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="register">
              <Route index element={<Register />} />
            </Route>
            <Route path="login">
              <Route index element={<Login />} />
            </Route>
            <Route path="logout">
              <Route index element={<Logout />} />
            </Route>
            <Route path="user">
              <Route index element={<User />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App