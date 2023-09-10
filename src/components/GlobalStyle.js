import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
ul {
  margin: 0;
  padding: 0;
  list-style:none
}
h1,
h2,
h3{
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
`;
