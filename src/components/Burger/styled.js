import styled from "styled-components";


export const Burger = styled.div`
width: 380px;
margin: auto;
height: 380px;
// overflow: scroll;
text-align: center;
font-weight: bold;
font-size: 1.25rem;

@media (min-width: 500px) amd (max-height: 400px){
  width: 350px;
  height: 300px;
}

@media (min-width: 500px) amd (min-height: 401px){
  width: 450px;
  height: 400px;
}

@media (min-width: 1000px) amd (min-height: 700px){
  width: 700px;
  height: 600px;
}

`