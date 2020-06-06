import styled from "styled-components";

const CategorySection = styled.section`
  >ul {
    display: flex;
    >li {
      width: 50%;
      text-align: center;
      background: #f6d672;
      font-size: 24px;
      padding: 16px 0 ;
      position: relative;
      &.active::after{
        content: '';
        display: block;
        height: 3px;
        position: absolute;
        bottom: 0;
        width: 100%;
        left: 0;
        background: #333333;
        
      }
    }
  }
`;

export {CategorySection}