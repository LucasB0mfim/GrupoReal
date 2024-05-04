import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Asidee = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
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
    color: #fff;
    margin-top: 40px;
  }
`

export const Btn = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  width: 90%;
  height: 60px;
  margin-bottom: 10px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: #092c4c;
  transition: all linear 0.2s;

  &:hover {
    background-color: #082540;
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
