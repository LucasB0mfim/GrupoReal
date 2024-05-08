import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  align-items: start;
  background-color: ${cores.white};

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`

export const Main = styled.main`
  width: 50%;
  height: calc(100vh - 53.2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`

export const Aside = styled.aside`
  width: 50%;
  height: calc(100vh - 77.2px);
  display: flex;
  align-items: top;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`

export const TextArea = styled.textarea`
  width: 90%;
  height: 480px;
  font-size: 14px;
  margin-top: 3.3%;
  resize: none;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  background-color: ${cores.white};
  box-shadow: 0px 0px 6px ${cores.darkGray};
  overflow-y: auto;

  /* Largura da barra de rolagem */
  &::-webkit-scrollbar {
    width: 10px;
  }

  /* Cor do controle da barra de rolagem */
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 10px;
  }

  /* Cor do fundo da barra de rolagem */
  &::-webkit-scrollbar-track {
    background-color: ${cores.gray};
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media (max-width: 768px) {
    height: 300px;
    margin-top: 10px;
  }
`

export const Btn = styled.button`
  width: 90%;
  height: 10%;
  margin-top: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: ${cores.white};
  font-weight: 600;
  background-color: ${cores.blue};
  cursor: pointer;
  transition: all linear 0.2s;

  &:hover {
    background-color: ${cores.darkBlue};
    transition: all linear 0.2s;
  }

  @media (max-width: 768px) {
    height: 50px;
  }
`
