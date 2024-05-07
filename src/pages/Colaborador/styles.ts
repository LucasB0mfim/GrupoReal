import { Link } from 'react-router-dom'

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: calc(100vh - 77.2px);

  img {
    width: 200px;
    margin-top: 20px;
  }
`

export const ConversionArea = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ConversionAreatwo = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`

export const Converter = styled.textarea`
  width: 90%;
  height: 80%;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 16px;
  border: none;
  background-color: #cccccc;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 1px 40px #c2c2c2;
`

export const ConverterTwo = styled.textarea`
  width: 90%;
  height: 80%;
  resize: none;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 16px;
  border: none;
  background-color: #cccccc;
  border-radius: 5px;
  outline: none;
  box-shadow: 0px 1px 40px #c2c2c2;
  margin-top: 22px;
`

export const Btn = styled.button`
  color: #fff;
  width: 90%;
  height: 50px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background-color: #092c4c;
  transition: all linear 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #0e3e6a;
    transition: all linear 0.2s;
  }
`
