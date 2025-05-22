import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainSection from './pages/main-section/main-section';
import NotFound from './pages/not-found/not-found';

function App() {

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<MainSection />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </Router>
  );
}

export default App;
