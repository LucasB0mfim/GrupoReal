import { createGlobalStyle } from 'styled-components'

export const cores = {
  white: '#fff',
  black: '#111',
  blue: '#092c4c',
  darkBlue: '#082540',
  gray: '#ccc',
  lightGray: '#A3A3A3',
  darkGray: '#2c2c2c',
  red: '#ff4c4c'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyles = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
}
`
