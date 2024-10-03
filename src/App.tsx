
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes'; 
import MoviePage from './pages/MoviePage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppRoutes />   
      <MoviePage />
    </BrowserRouter>
  );
};

export default App;
