"use client"

import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --primary-color: #007bff;
    --text-color: #333;
    --background-light: #f9f9f9;
    --header-bg: rgba(0, 0, 0, 0.4);
    --box-bg: rgba(255, 255, 255, 0.2);
    --font-manrope: var(--font-manrope), sans-serif; /* Manrope font variable */
    --font-lora: var(--font-lora), serif; /* Lora font variable */
  }

  html {
    scroll-behavior: smooth;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--font-manrope); /* Default to Manrope */
    line-height: 1.6;
    font-size: 16px;
    color: var(--text-color);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-manrope); /* Manrope for headings */
    font-weight: 600;
    margin-top: 1.5em;
    margin-bottom: 0.5em;
    color: #222;
  }

  p {
    margin-bottom: 1em;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  * {
    box-sizing: border-box;
  }

  button {
    font-family: inherit;
  }

  /* Material Icons */
  .material-icons {
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: 20px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: 'liga';
    -webkit-font-smoothing: antialiased;
    transition: color 0.3s ease;
  }

  /* Smooth transitions for all elements */
  * {
    transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
  }
`

export default GlobalStyle
