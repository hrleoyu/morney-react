import React from "react";
import Layout from "../components/Layout";
import {useTags} from "../useTags";
import {Link, useParams,useHistory} from 'react-router-dom'
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
const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;



type Params = {
    id:string
}
const Tag:React.FC = (props) => {
    const {findTags,deleteTag} = useTags();
    let {id} = useParams<Params>();
    const tag = findTags(parseInt(id));
    const tagContent = (tag:{id:number;name:string}) => (
        <div>
            <Label>
                <span>标签名</span>
                <input type={'text'} placeholder={tag.name}
                       onChange={(e) => {tag.name= e.target.value}}
                />
            </Label>
            <Center>
                <ButtonList onClick={() => deleteTag(tag.id)}>删除标签</ButtonList>
            </Center>
        </div>
    );
    return(
        <Layout>
            <ToBar>
                <Link to={'/tags'}>
                <Icon name={'left'}/>
                </Link>
                <h3>编辑标签</h3>
            </ToBar>
            {tag ? tagContent(tag) : <Center>标签已删除</Center>}

            </Layout>
    )
};

export default Tag