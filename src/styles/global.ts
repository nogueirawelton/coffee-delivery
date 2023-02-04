import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
  --toastify-color-progress-light: ${(props) => props.theme['purple-500']}
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;

  @media (max-width: 1024px) {
    font-size: 93.75%;
  }

  @media (max-width: 768px) {
    font-size: 87.5%;
  }
}

body {
  -webkit-font-smoothing: antialiased;
  background: #FAFAFA;
}

body,
input,
textarea,
select,
button {
  line-height: 1.2;
  font: 400 1rem 'Roboto', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
strong {
  line-height: 1.4;
  font: 700 1rem 'Baloo 2',sans-serif;
}

button {
  cursor: pointer;

  &:disabled {
    filter: brightness(0.7);
    cursor: not-allowed;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

:focus {
  outline: 0;
  box-shadow: 0 0 0 2px #000;
}
`;
