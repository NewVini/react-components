
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MoviePage from './pages/MoviePage';
const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/movies" element={<MoviePage />} /> 
    </Routes>
  );
};

export default AppRoutes;
