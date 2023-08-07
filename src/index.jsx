import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PeoplePage from "./pages/peoplePage";
import PersonPage from "./pages/personDetailsPage"
import LoginPage from "./pages/loginPage";
import SiteHeader from './components/siteHeader'
import MoviesContextProvider from "./contexts/moviesContext";
import PeopleContextProvider from "./contexts/peopleContext";
import AuthContextProvider from "./contexts/authContext";
import ProtectedRoute from "./components/protectedRoute";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <BrowserRouter>
          <SiteHeader />
          <MoviesContextProvider>
            <PeopleContextProvider>
              <Routes>
                <Route path="/reviews/form" element={ <ProtectedRoute> <AddMovieReviewPage/> </ProtectedRoute> } />
                <Route path="/reviews/:id" element={ <ProtectedRoute> <MovieReviewPage/> </ProtectedRoute> } />
                <Route path="/movies/upcoming" element={ <UpcomingMoviesPage /> } />
                <Route path="/movies/favourites" element={ <ProtectedRoute> <FavouriteMoviesPage /> </ProtectedRoute> } />
                <Route path="/movies/popular" element={ <ProtectedRoute> <PopularMoviesPage /> </ProtectedRoute>} />
                <Route path="/movies/:id/similar" element={ <ProtectedRoute> <SimilarMoviesPage /> </ProtectedRoute> } />
                <Route path="/movies/:id" element={ <ProtectedRoute> <MoviePage /> </ProtectedRoute> } />
                <Route path="/people" element={ <ProtectedRoute> <PeoplePage /> </ProtectedRoute> } />
                <Route path="/people/:id" element={ <ProtectedRoute> <PersonPage /> </ProtectedRoute> } />
                <Route path="/" element={ <HomePage /> } />
                <Route path="*" element={ <Navigate to="/" /> } />
                <Route path="/login" element={<LoginPage />} />
              </Routes>
            </PeopleContextProvider>
          </MoviesContextProvider>
        </BrowserRouter>
      </AuthContextProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const rootElement = createRoot(document.getElementById("root"));
rootElement.render(<App />);
