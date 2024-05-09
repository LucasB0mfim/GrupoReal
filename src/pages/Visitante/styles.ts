import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

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
  font-size: 30px;
  @media (max-width: ${breakpoints.tablet}) {
    p {
      padding: 0px 15px;
    }
  }
`

export const FunctionSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10% 0 0 0;
  font-size: 30px;
  @media (max-width: ${breakpoints.tablet}) {
    p {
      padding: 0px 15px;
    }
  }
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
  display: flex;

  a {
    color: ${cores.black};
  }
`

export const SubTitle = styled.h3`
  width: 300px;
  margin-top: 20px;
`

export const Boxlink = styled.div`
  display: flex;
  justify-content: space-between;
  width: 461px;
  position: relative;
  background-color: red;
`
export const LinkL = styled.img``

export const LinkV = styled.img``

export const BoxL = styled.div`
  width: 300px;
  position: relative;
  ${LinkL} {
    border-radius: 0px;
    width: 45px;
    position: absolute;
    bottom: 38%;
    left: 57%;
    transition: transform 0.3s;
  }
  ${LinkL}:hover {
    transform: scale(1.1);
  }
`

export const BoxV = styled.div`
  width: 300px;
  position: relative;
  ${LinkV} {
    border-radius: 0px;
    width: 45px;
    position: absolute;
    bottom: 38%;
    left: 57%;
    transition: transform 0.3s;
  }
  ${LinkV}:hover {
    transform: scale(1.1);
  }
`
