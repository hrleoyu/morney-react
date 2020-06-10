import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";

import {CategorySection} from "./money/CategorySection";
import {NoteSection} from "./money/NoteSection";
import {TagsSection} from "./money/TagsSection";
import {NumberSection} from "./money/NumberSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

type Category = '-' | '+'

function Money() {
    const [value,setValue] = useState({
       tags:[] as string[],
       note : '',
       category : '-' as Category,
       number : 0
    });

   //Partial<?> 括号中类型的部分
    const onChange = (obj:Partial<typeof value>) => {
        setValue({
            ...value,
            ...obj
        })
    };

    return(
        <MyLayout className={'xxx'}>
            <TagsSection value={value.tags} onChange={tags => onChange({tags})} />
            <NoteSection value={value.note} onChange ={note=> onChange({note})}/>
            <CategorySection value={value.category} onChange={category =>onChange({category}) }/>
            <NumberSection value={value.number} onChange={number=>onChange({number})} onOk={()=>{}}/>
        </MyLayout>
    ) ;
}

export default Money;