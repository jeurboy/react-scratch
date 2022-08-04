import App from "./pages/App";
import {PetList} from "./pages/pet/index"
import {PersonList} from "./pages/person/index"
import {AgendaList} from "./pages/agenda/index"

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
          <Route path="agenda" element={<AgendaList />} />
          <Route path="pet" element={<PetList />} />
          <Route path="person" element={<PersonList />} />
        </Routes>
      </BrowserRouter>
      )
}

export default router