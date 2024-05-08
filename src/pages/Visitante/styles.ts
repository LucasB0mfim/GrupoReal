import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 100px;
  }
`

export const Title = styled.h1``

export const Box = styled.div`
  max-width: 1024px;
  width: 100%;
  margin-top: 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  p {
    margin: 5% 0;
  }
`

export const Collaborators = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 5%;
`

export const Operation = styled.div`
  margin-top: 5%;
`
