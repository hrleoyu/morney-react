import Layout from "../components/Layout";
import React from "react";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../components/icon";
import {Link} from "react-router-dom";
import ButtonList from "../components/Button";

function Tags() {
    const TagList = styled.ol`
    font-size: 16px;
      >li{
      border-bottom: 1px solid #efb681; 
      line-height: 20px;         
      margin:0 16px;
        >a{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 12px 8px; 
        }
      }
`;

    const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

    const {tags,setTags,addTag} = useTags();
    return (
        <Layout>
            <TagList>
            {tags.map(tag =>
                <li key={tag.id}>
                    <Link to={'/tags/' + tag.id}>
                    {tag.name}
                    <Icon name={'right'}/>
                    </Link>
                </li>
            )}
            </TagList>
            <Center>
            <ButtonList onClick={addTag}>新增标签</ButtonList>
            </Center>
            </Layout>
    );
}

export default Tags