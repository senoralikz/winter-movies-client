import apiUrl from '../apiConfig'

import axios from 'axios'

export const movieIndex = user => {
  return axios({
    url: apiUrl + '/movies',
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Token token=${user.token}`
    }
  })
}

export const movieCreate = (movie, user) => {
  return axios({
    url: apiUrl + '/movies',
    method: 'POST',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Token token=${user.token}`
    },
    // send the movie object as our data for creating a movie
    data: { movie }
  })
}

// get a single movie
export const movieShow = (id, user) => {
  return axios({
    url: apiUrl + '/movies/' + id,
    method: 'GET',
    // Add an authorization header
    headers: {
      // we need the user, so we have access to their token
      'Authorization': `Token token=${user.token}`
    }
  })
}
