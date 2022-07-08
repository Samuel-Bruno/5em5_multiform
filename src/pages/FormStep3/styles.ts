import styled from "styled-components"


export const Container = styled.div`
  p {
    margin-top:0;
    font-size:13px;
    color:#B8B8D4;
  }
  h1 {
    margin 0;
    padding: 0;
    font-size:26px;
  }
  hr {
    height:1px;
    border:0;
    background:#16195C;
    margin:30px 0;
  }

  label {
    font-size:13px;
    display:block;
    margin-bottom:15px;
    
    input {
      margin-top:5px;
      display:block;
      box-sizing:border-box;
      width:100%;
      padding:20px 10px;
      border:2px solid #25CD89;
      border-radius:10px;
      color:white;
      outline:none;
      font-size:15px;
      background-color:#02044A;
    }
  }

  button,
  .backButton {
    background-color:#25CD89;
    border:0;
    outline:0;
    cursor:pointer;
    font-size:14px;
    margin-top:30px;
    padding:20px 40px;
    color:white;
    font-weight:bold;
    border-radius:10px;
  }
  .backButton {
    background-color:transparent;
    text-decoration:none;
    margin-right:20px;
  }
`