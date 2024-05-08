import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const Asidee = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
  }
`

export const Box = styled.div`
  height: 300px;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  border: none;
  border-radius: 10px;
  background-color: #062036;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  h1 {
    color: ${cores.white};
    margin-top: 40px;
  }
`

export const Btn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${cores.white};
  width: 90%;
  height: 60px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: ${cores.blue};
  transition: all linear 0.2s;

  &:hover {
    background-color: ${cores.darkBlue};
    transition: all linear 0.2s;
  }
`
export const CampoBtn = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
`
