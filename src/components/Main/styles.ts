import styled from 'styled-components'

export const Mainn = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;

  img {
    width: 400px;
  }

  @media (max-width: 768px) {
    width: 0%;
    height: 0%;
    img {
      display: none;
    }
  }
`
