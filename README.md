
# Full Stack Development 2 - Assignment.

__Name:__ Grzegorz Piotrowski

## Features.

+ Popular movies page
+ Popular people page
+ Person details page (parameterised URL)
+ Similar movies page (parameterised URL)
+ Data caching
+ Additional movie filters:
  + Minimum popularity
  + Released after
  + Released before
+ Pagination of movie listing pages
+ Data hyperlinking:
  + Cast listed in movie details page
  + Movies listed in person details page
+ Protected/Private routes, simple login/auth
+ Extended storybook

## Feature Design.

#### Popular people page.

> Lists movies from the Popular movies endpoint of TMDB.

![][popular-movies]

#### Person details page.

> Shows the biography, photo, personal info and movies related to the person.

![][person-details-page]

#### Similar movies page.

> Lists similar movies from the movie/${id}/similar endpoint of TMDB.

![][similar-movies-page]

#### Data caching.

> Data retreived from TMDB is cached locally.

![][data-caching]

#### Additional movie filters.

> Additional movie filters introduced: popularity, released after/before date.

![][movie-filter]

#### Pagination of movie listing pages.

> All pages listing movies are paginated and the user can navigate through pages by using the arrows.

![][movie-pagination]

#### Data hyperlinking.

> Pages showing different types of data are hyperlinked. Movie details page links to the cast members.

![][data-linking-cast]

> Person details page links to movies.

![][data-linking-movies]

#### Protected/Private routes, simple login/auth.

> Not logged in user can only view the Home page, the rest of the routes is revealted and accessible after logging in.

![][login-private-routes]

> Not logged in users have limited options on the navigation header.

![][login-public-routes]

## Storybook.

> For every new component, a story has been created in the storybook.

![][storybook-image]

## Authentication

Not logged in users can only access the Home page and the login page.

#### Protected routes 

+ /reviews/form (Protected) - non functioning route to add a movie review.
+ /reviews/{review_id} (Protected) - The full text of a movie review.
+ /movies/upcoming (Protected) - Lists paginated movies from the movie/upcoming endpoint
+ /movies/favourites (Protected) - Lists movies marked as favourites
+ /movies/popular (Protected) - Lists paginated movies from the movie/popular endpoint
+ /movies/{movie_id}/similar (Protected) - A list of similar movies.
+ /movies/{movie_id} (Protected) - Detailed information on a specific movie.
+ /people (Protected) - Lists paginated people from the person/popular endpoint
+ /people/{person_id} (Protected) - A specific actor's bio + movies listed
+ /login (Public) - Login Page
+ / (Public) - Home Page - Lists paginated movies from the movie/discover endpoint

## Additional Information.

+ siteHeader navigation options depend on the auth token - not logged in user has limited nav options presented.

[data-caching]: ./images/data-caching.jpg
[data-linking-cast]: ./images/data-linking-cast.jpg
[data-linking-movies]: ./images/data-linking-movies.jpg
[login-private-routes]: ./images/login-private-routes.jpg
[login-public-routes]: ./images/login-public-routes.jpg
[movie-filter]: ./images/movie-filter.jpg
[movie-pagination]: ./images/movie-pagination.jpg
[people-page]: ./images/people-page.jpg
[person-details-page]: ./images/person-details-page.jpg
[popular-movies]: ./images/popular-movies.jpg
[similar-movies-page]: ./images/similar-movies-page.jpg
[storybook-image]: ./images/storybook.jpg