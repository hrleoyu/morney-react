import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from "../components/icon";


const TagsSection = styled.section`
  background: #feffff;
  display: flex;flex-direction: column;flex-grow: 1;justify-content: flex-end;align-items: flex-start;
  > ol {
    display: flex;flex-wrap: wrap;flex-direction: row;justify-content: center;
     >li{
      background: #fbf4b7; width: 80px;height: 80px;border-radius: 50%;display: inline-block;
      padding: 3px 18px;font-size: 14px;margin: 5px 5px;border: 1px solid #4e4f45;
      text-align: center;
       >.iconNav {display: block;width: 44px;height: 44px;margin-top: 4px;}
         }
          .none {visibility:hidden;}
            //不占位隐藏
        }
          >button {background: none;border: none;border-bottom: 1px solid ;color: #666;padding: 0 4px;
        margin: 5px 31px;}
`;

const NotesSection = styled.section`
  background: #feffff;
  padding: 0 16px;
  font-size: 14px;
    > label {
    display: flex;
    align-items: center;
      >span {
        margin-right: 16px; white-space: nowrap;
      }
        > input{
          display: block;
          width: 100%;
          height: 72px;
          background: none;
          border: none;
        }
    }
`;

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




const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  
  
  
  
`

function Money() {
    return(
        <MyLayout className={'xxx'}>
            <TagsSection>
                <ol>
                    <li>
                        <Icon name={'fz'}/>
                        服装
                    </li>
                    <li>
                        <Icon name={'sw'}/>
                        吃饭
                    </li>
                    <li>
                        <Icon name={'zs'}/>
                        住宿
                    </li>
                    <li>
                        <Icon name={'jt'}/>
                        交通
                    </li>
                    <li>
                        <Icon name={'yd'}/>
                        运动
                    </li>
                    <li>
                        <Icon name={'gw'}/>
                        购物
                    </li>
                    <li className={'none'}></li>
                    <li className={'none'}></li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                    <span>备注</span>
                    <input type={'text'} placeholder={'在这里添加备注呦~'}/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className={'active'}>支出</li>
                    <li >收入</li>
                </ul>
            </CategorySection>
            <NumberSection>
                <output>
                    100
                </output>
                <div className={'pad clearfix' }>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className={'ok'}>OK</button>
                    <button className={'zero'}>0</button>
                    <button>.</button>

                </div>
            </NumberSection>
        </MyLayout>
    ) ;
}

export default Money;