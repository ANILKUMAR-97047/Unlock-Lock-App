// Style your elements here
import styled from 'styled-components'

export const BgContainer = styled.div`
  background-image: linear-gradient(to bottom, #0b0c1e, #3c2940);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const LockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 140px;
`

export const Image = styled.img`
  width: 96px;
`

export const LockText = styled.p`
  color: #e2e8f0;
  font-size: 20px;
  margin-top: 20px;
  font-family: 'Roboto';
  line-height: 1.2;
`

export const Button = styled.button`
  color: #ffffff;
  background-color: #06b6d4;
  border-radius: 5px;
  border-width: 0px;
  font-size: 15px;
  padding: 5px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'Roboto';
`
