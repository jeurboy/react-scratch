import App from "./pages/App";
import {PetList} from "./pages/pet/index"
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
          <Route path="pet" element={<PetList />} />
        </Routes>
      </BrowserRouter>
      )
}

export default router