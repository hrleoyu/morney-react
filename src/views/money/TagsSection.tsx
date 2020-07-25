import styled from "styled-components";
import React from "react";

import {useTags} from "../../useTags";


const Wrapper = styled.section`
  background: #feffff;
  display: flex;flex-direction: column-reverse;align-items: flex-start;flex-grow: 1;
  background-image: url("https://i.loli.net/2020/07/02/zp5cCtW3f2wykIb.jpg");
  background-size: cover;padding:16px;
  > ol {
        display:flex;
        flex-wrap: wrap;
        margin-bottom: 16px;
     >li{
      background: #fbf4b7;border-radius: 16px;display: inline-block;
      padding: 3px 16px;font-size: 14px;margin-right:12px;margin-top:4px;border: 1px solid #4e4f45;
      text-align: center;box-shadow: 0 0 0 rgba(0,0,0,0.25);
      
      &.active{
        box-shadow: 0 0 3px rgba(0,0,0,0.4);border: #f60;
         }    
      }
  }
`;

    // > li {
    //   background: #d9d9d9;
    //   height: 24px;
    //   line-height: 24px;
    //   border-radius: 12px;
    //   padding: 0px 16px;
    //   margin-right: 12px;
    //   margin-top: 4px;
    //   &.selected {
    //     background: #5a5a5a;
    //     color: #fff;

type Props = {
    value:number[]
    onChange:(obj:number[]) => void
}

const TagsSection :React.FC <Props> = (props) => {
    const {tags, setTags} = useTags();
    // const [icons,setIcons] = useState<string[]>(['fz','sw','zs','jt','yd','gw']);
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
            // setIcons([...icons,'ty'])
        }

    };

    // useEffect(()=>{
    //     let loaclicons = JSON.parse(window.localStorage.getItem('icons')||'[]')
    //     if(loaclicons.length === 0 ){
    //         loaclicons = [
    //             'fz','sw','zs','jt','yd','gw'
    //         ]
    //     }
    //     setIcons(loaclicons)
    // },[])

    // useUpdate(() => {
    //     window.localStorage.setItem('icons',JSON.stringify(icons))
    // },[icons])




    return (
      <Wrapper>
          <ol>
              {tags.map((tag,index) =>
                <li key={index} onClick={()=>onToggleTag(tag.id)} className={selectedTagIds.indexOf(tag.id) >= 0 ? 'active' : ''}>
                    {/* {<Icon name={icons[index]}/>} */}
                    {tag.name}
                </li>)}
              <li onClick={onAdd}>
                  {/* <Icon name={'ty'} /> */}
                  新增标签
              </li>
          </ol>
      </Wrapper>
    )
};


export {TagsSection}