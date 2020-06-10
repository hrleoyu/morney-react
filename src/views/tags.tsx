import Layout from "../components/Layout";
import React from "react";
import {useTags} from "../useTags";
import styled from "styled-components";
import Icon from "../components/icon";

function Tags() {
    const TagList = styled.ol`
    font-size: 16px;
      >li{
      border-bottom: 1px solid #faf3be; 
      line-height: 20px;    
      padding: 12px 16px  ;
      margin-left: 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      }
`;
    const ButtonList = styled.button`
    font-size: 18px;
    padding: 4px 4px;
    background:#faf3be;
    border-radius: 4px;
    margin-top: 20px;
`;
    const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

    const {tags,setTags} = useTags();
    return (
        <Layout>
            <TagList>
            {tags.map(tag =>
                <li key={tag}>
                    {tag}
                    <Icon name={'right'}/>
                </li>
            )}
            </TagList>
            <Center>
            <ButtonList>新增标签</ButtonList>
            </Center>
            </Layout>
    );
}

export default Tags