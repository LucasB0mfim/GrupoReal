import styled from 'styled-components'
import { cores } from '../../styles'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100px;
  }

  > p {
    margin-bottom: 10px;
  }
`

export const Title = styled.h1`
  color: ${cores.blue};
  margin: 25px 0;
  font-size: 30px;
`

export const HelloSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10% 0 0 0;
`

export const FunctionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10% 0 0 0;
`

export const CollaboratorsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10% 0 5% 0;
`

export const IconBox = styled.div`
  display: flex;
  justify-content: center;

  img {
    border-radius: 50%;
  }
`

export const Icon = styled.div`
  margin: 5%;

  a {
    color: ${cores.black};
  }
`

export const SubTitle = styled.h3`
  cursor: pointer;
  width: 300px;

  &:hover {
    color: ${cores.blue};
  }
`
