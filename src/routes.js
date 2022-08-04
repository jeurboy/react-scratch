import App from "./pages/App";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

const router = () =>{
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
      </BrowserRouter>
      )
}

export default router