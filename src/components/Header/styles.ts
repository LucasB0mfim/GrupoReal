import styled from 'styled-components'
import { cores } from '../../styles'

export const Top = styled.header`
  padding: 10px 3%;
  background-color: ${cores.blue};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .icon--home {
    visibility: hidden;
    width: 20px;
    margin-left: 10px;
  }

  img {
    width: 100px;
  }
`

export const Link = styled.a`
  color: ${cores.lightGray};
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all linear 0.2s;

  &:hover {
    color: ${cores.white};
    transition: all linear 0.2s;

    .icon--home {
      visibility: visible;
    }
  }
`
