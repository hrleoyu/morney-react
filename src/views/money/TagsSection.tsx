import styled from "styled-components";
import React, {FC, useState} from "react";


import Icon from "../../components/icon";

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

const TagsSection :React.FC = () => {
    const [tags,setTags] = useState<string[]>(['服装','吃饭','住宿','交通','运动','购物',]);
    const [icons,setIcons] = useState<string[]>(['fz','sw','zs','jt','yd','gw']);
    const [selectedTags,setSelectedTags] = useState<string[]> ([]);

    const onToggleTag = (tag:string) => {
    const index=selectedTags.indexOf(tag);
        if (index >= 0 ) {
            setSelectedTags(selectedTags.filter(t =>t !==tag ));
        }else {
            setSelectedTags([...selectedTags,tag])
        }
    };


    const onAdd = () => {
        const tagName = window.prompt('新标签名为：')
        console.log(tagName)
        if (tagName !== null){
            setTags([...tags,tagName])
            setIcons([...icons,'ty'])
        }
    };

    return (
      <Wrapper>
          <ol>
              {tags.map((tag,index) =>
                <li key={index} onClick={()=>onToggleTag(tag)} className={selectedTags.indexOf(tag) >= 0 ? 'active' : ''}>
                    {<Icon name={icons[index]}/>}
                    {tag}
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