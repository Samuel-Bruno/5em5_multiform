import styled from "styled-components"


export const Container = styled.div`
  display:flex;
  align-items:center;
  margin:20px 0;
  
  a {
    width:100%;
    text-decoration:none;
    display:flex;
    align-items:center;
  }
`

export const Info = styled.div`
  flex:1;
  margin-right:20px;
`

export const Title = styled.div`
  text-align:right;
  font-size:15px;
  color:white;
  margin-bottom:5px;
  font-weight:bold;
`

export const Description = styled.div`
  text-align:right;
  font-size:13px;
  color:white;
`

export const IconArea = styled.div`
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#494A7C;
  display:flex;
  justify-content:center;
  align-items:center;
`

export const Point = styled.div<{active:boolean}>`
  width:6px;
  height:6px;
  border-radius:50%;
  border:3px solid #494A7C;
  margin-left:30px;
  margin-right:-6px;
  background-color: ${props => props.active ? '#35CD89' : 'transparent' };
`
