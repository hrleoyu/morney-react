import React from "react";
import Layout from "../components/Layout";
import {useTags} from "../useTags";
import {Link, useParams} from 'react-router-dom'
import Icon from "../components/icon";
import ButtonList from "../components/Button";
import styled from "styled-components";
import Label from "../components/Input";





const ToBar = styled.header`
  display: flex;
  position: relative;
  line-height: 20px;
  padding: 14px 0 ;
  box-shadow: 0 0 5px rgba(0,0,0,0.25);
  background: #fbf4b7;
  >a{
    >svg{
    width: 20px;
    height: 20px;
    margin-left: 10px;
    }
    }
    >h3{
    position: absolute;
    left: 50%;
    font-size: 16px;
    transform: translate(-50%);
    }
`;



type Params = {
    id:string
}
const Tag:React.FC = (props) => {
    const {findTags} = useTags();
    let {id} = useParams<Params>();
    const tag = findTags(parseInt(id));
    return(
        <Layout>
            <ToBar>
                <Link to={'/tags'}>
                <Icon name={'left'}/>
                </Link>
                <h3>编辑标签</h3>
            </ToBar>
            <div>
                <Label>
                    <span>标签名</span>
                    <input type={'text'} placeholder={tag.name}
                    />
                </Label>
            </div>
            <ButtonList>删除标签</ButtonList>
        </Layout>
    )
};

export default Tag