import styled from "styled-components";
import React, {useState} from "react";

const Wrapper = styled.section`
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

type Props = {
    value:'-' | '+',
    onChange:(value:'-'|'+')=>void
}

const CategorySection:React.FC<Props> = (props) => {
    const [categoryList] = useState<('-'|'+')[]>(['-','+']);//缩小范围
    const category = props.value
    const categoryMap = {'-':'支出','+':'收入'};//哈希


    return(
        <Wrapper>
            <ul>
                {categoryList.map(c =>
                    <li  key={c} className={category === c ? 'active' : ''}
                        onClick={() => {props.onChange(c)}}
                    >{categoryMap[c]}</li>
                )}
            </ul>
        </Wrapper>
    )
};



export {CategorySection}