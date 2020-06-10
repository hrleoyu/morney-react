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
    const [obj,setObj] = useState({
       tags:[] as string[],
       note : '',
       category : '-' as Category,
       number : 0
    });
    return(
        <MyLayout className={'xxx'}>
            <TagsSection value={obj.tags} onChange={(tags) =>
                setObj({
                    ...obj,
                    tags:tags
                })
            } />
            <NoteSection
                value={obj.note}
                onChange ={(note) => {
                    setObj({
                        ...obj,
                        note:note
                    })
                }}
            />

            <CategorySection
                value={obj.category}
                onChange={(category) => {
                    setObj({
                        ...obj,
                        category: category
                    })
                }}
            />

            <NumberSection
                value={obj.number}
                onChange={(number)=>{
                   setObj({
                       ...obj,
                       number: number
                   })
                }}
                onOk={()=>{}}
            />

        </MyLayout>
    ) ;
}

export default Money;