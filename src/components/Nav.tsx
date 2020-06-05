import styled from "styled-components";
import {Link} from "react-router-dom";
import React from "react";
require( './icons/money.svg');
require('./icons/stiat.svg');
require('./icons/tags.svg');


const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0,0,0,0.25);
  > ul {
  display:flex;
    >li {
    width: 33.333333%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
      .iconNav {
      width: 32px;
      height: 32px;  
      }
    }
  }
`;

const Nav  = () => {
    return (
        <NavWrapper>
            <ul>
                <li>
                    <svg className={'iconNav'}>
                        <use xlinkHref={'#tags'}></use>
                    </svg>
                    <Link to="/tags">标签</Link>
                </li>
                <li>
                    <svg className={'iconNav'}>
                        <use xlinkHref="#money"></use>
                    </svg>
                    <Link to="/money">记账</Link>
                </li>
                <li>
                    <svg className={'iconNav'}>
                        <use xlinkHref={'#stiat'}></use>
                    </svg>
                    <Link to="/statistics">统计</Link>
                </li>
            </ul>
        </NavWrapper>
    )
}

export default Nav