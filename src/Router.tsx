import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Create, Game, Home, Lobby, OnlineGame } from './pages'

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/offline' element={<Game />} />

        <Route path='/create' element={<Create />} />

        <Route path='/:id/lobby' element={<Lobby />} />
        <Route path='/:id/game' element={<OnlineGame />} />
      </Routes>
    </BrowserRouter>
  )
}
