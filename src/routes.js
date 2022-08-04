import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'

import App from './pages/App'
import {PetList} from './pages/pet/index'
import {PersonList} from './pages/person/index'
import {AgendaList} from './pages/agenda/index'
import {Calculator} from './pages/calculator/index'


const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="agenda" element={<AgendaList />} />
        <Route path="pet" element={<PetList />} />
        <Route path="person" element={<PersonList />} />
        <Route path="calculator" element={<Calculator />} />
      </Routes>
    </BrowserRouter>
  )
}

export default router