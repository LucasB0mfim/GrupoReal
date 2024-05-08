import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #eee;
`

export const Main = styled.main`
  width: 50%;
  height: calc(100vh - 53.2px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`

export const Aside = styled.aside`
  width: 50%;
  height: calc(100vh - 77.2px);
  display: flex;
  align-items: top;
  justify-content: center;
`

export const TextArea = styled.textarea`
  width: 90%;
  height: 80%;
  font-size: 14px;
  margin-top: 3.3%;
  resize: none;
  border: none;
  outline: none;
  border-radius: 10px;
  padding-left: 10px;
  padding-top: 10px;
  background-color: #ccc;
  box-shadow: 0px 0px 6px #2c2c2c;
`

export const Btn = styled.button`
  width: 90%;
  height: 10%;
  margin-top: 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  color: #eee;
  background-color: #092c4c;
  cursor: pointer;
  transition: all linear 0.2s;

  &:hover {
    background-color: #082540;
    transition: all linear 0.2s;
  }
`
