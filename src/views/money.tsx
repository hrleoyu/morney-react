import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from "../components/icon";
import {CategorySection} from "./money/CategorySection";
import {NotesSection} from "./money/NotesSection";
import {TagsSection} from "./money/TagsSection";
import {NumberSection} from "./money/NumberSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  
  
  
  
`;

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