import styled from "styled-components";
import React, {FC, useEffect, useState} from "react";
import Icon from "../../components/icon";
import {useTags} from "../../useTags";

const Wrapper = styled.section`
  background: #feffff;
  display: flex;flex-direction: column;flex-grow: 1;justify-content: flex-end;align-items: flex-start;
  > ol {
    display: flex;flex-wrap: wrap;flex-direction: row;justify-content: flex-start;
       width:100%;height:180px;overflow: auto;box-shadow: 0 0 3px rgba(0,0,0,0.25);border-radius: 4px;
     >li{
      background: #fbf4b7; width: 80px;height: 80px;border-radius: 50%;display: inline-block;
      padding: 5px 18px;font-size: 14px;margin: 5px 6.5px;border: 1px solid #4e4f45;
      text-align: center;box-shadow: 0 0 0 rgba(0,0,0,0.25);
       >.iconNav {display: block;width: 44px;height: 44px;margin-top: 4px;}
      &.active{
        box-shadow: 0 0 5px rgba(0,0,0,0.4);border: #f60;
         }    
      }
  }
`;

type Props = {
    value:number[]
    onChange:(obj:number[]) => void
}

const TagsSection :React.FC <Props> = (props) => {
    const {tags, setTags} = useTags();
    const [icons,setIcons] = useState<string[]>(['fz','sw','zs','jt','yd','gw']);
    const selectedTagIds = props.value

    const onToggleTag = (tagId:number) => {
    const index=selectedTagIds.indexOf(tagId);
        if (index >= 0 ) {
            props.onChange(selectedTagIds.filter(t =>t !==tagId ));
        }else {
            props.onChange([...selectedTagIds,tagId])
        }
    };

    const onAdd = () => {
        const tagName = window.prompt('新标签名为：')
        if (tagName !== null){
            setTags([...tags,{id:Math.random(),name:tagName}])
            setIcons([...icons,'ty'])
        }

    };
    useEffect(() => {
        window.localStorage.getItem('newicon',JSON.stringify(icons))
    },[setIcons])


    return (
      <Wrapper>
          <ol>
              {tags.map((tag,index) =>
                <li key={index} onClick={()=>onToggleTag(tag.id)} className={selectedTagIds.indexOf(tag.id) >= 0 ? 'active' : ''}>
                    {<Icon name={icons[index]}/>}
                    {tag.name}
                </li>)}
              <li onClick={onAdd}>
                  <Icon name={'ty'} />
                  新增
              </li>
          </ol>
      </Wrapper>
    )
};


export {TagsSection}