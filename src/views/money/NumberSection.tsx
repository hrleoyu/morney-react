import styled from "styled-components";

const NumberSection = styled.section`
  display: flex;
  flex-direction: column;
  >output {
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25);}
     >.pad { 
       
        background: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        //#fda085
        > button{
        
        float: left;
        width: 25%;
        height: 64px;
        border-radius: 4px;
        font-size: 16px;
        background-color: rgba(0,0,0,0.01);
        opacity: 0.5;
        &.ok {
        height: 128px;
        float: right;
        }  
        &.zero {
        width: 50%;
        }
     }
  }
`;

export {NumberSection}