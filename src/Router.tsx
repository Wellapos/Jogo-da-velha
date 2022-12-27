import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Game } from "./pages";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}
