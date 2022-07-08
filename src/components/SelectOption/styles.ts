import styled from "styled-components"


export const Container = styled.div<{selected:boolean}>`
  display:flex;
  border:2px solid ${props => props.selected ? '#496459' : '#16195C' };
  border-radius:10px;
  padding:15px;
  margin-bottom:15px;
  cursor:pointer;
  align-items:center;

  &:hover {
    border:2px solid #496459;
  }
`

export const IconArea = styled.div`
  width:60px;
  height:60px;
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#191A59;
  border-radius:50%;
`

export const Info = styled.div`
  margin-left:20px;
`

export const Title = styled.div`
  font-size:18px;
  font-weight:bold;
  margin-bottom:7px;
`

export const Description = styled.div`
  font-size:14px;
  color:#B8B8D4;
`
