import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import User from "./pages/User";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        {/* Nested Routes */}
        <Route path="/user" element={<User />}>

          {/* Dynamic Route */}
          <Route path=":id" element={<UserProfile />} />

          <Route path="settings" element={<Settings />} />

        </Route>

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;