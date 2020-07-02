import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";


import {CategorySection} from "./money/CategorySection";
import {NoteSection} from "./money/NoteSection";
import {TagsSection} from "./money/TagsSection";
import {NumberSection} from "./money/NumberSection";
import {useRecords} from "../components/useRecords";


const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;


type Category = '-' | '+'

const defaultValue = {
    tagIds:[] as number[],
    note : '',
    category : '-' as Category,
    amount : 0
}

function Money() {
    const [selected,setSelected] = useState(defaultValue);
    const {addRecords,} = useRecords()

   //Partial<?> 括号中类型的部分
    const onChange = (obj:Partial<typeof selected>) => {
        setSelected({
            ...selected,
            ...obj
        })
    };
    const submit = () => {
        if (addRecords(selected)){
        alert('保存成功');
        setSelected(defaultValue);
        }
    };

    return(
        <MyLayout className={'xxx'}>

            <TagsSection value={selected.tagIds} onChange={tagIds => onChange({tagIds })} />
            <NoteSection value={selected.note} onChange ={note=> onChange({note})}/>
            <CategorySection value={selected.category} onChange={category =>onChange({category}) }/>
            <NumberSection value={selected.amount} onChange={amount=>onChange({amount})} onOk={submit}/>

        </MyLayout>
    ) ;
}

export default Money;