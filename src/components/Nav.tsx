import styled from "styled-components";
import {NavLink} from "react-router-dom";
import React from "react";
import Icon from "./icon";



const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
  display:flex;
    >li {
       width: 33.333333%;
       text-align: center;
       
      >a{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      
      .iconNav {
      width: 32px;
      height: 32px;  
      }
      &.selected {
        text-shadow: 0 0 3px rgba(0,0,0,0.25);
        }
      }
    }
   }
`;

const Nav  = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink to="/tags" exact activeClassName={'selected'}>
                        <Icon name={'tags'}/>
                        标签
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/money" activeClassName={'selected'}>
                        <Icon name={'money'}/>
                        记账
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/statistics" activeClassName={'selected'}>
                        <Icon name={'stiat'}/>
                        统计
                    </NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav