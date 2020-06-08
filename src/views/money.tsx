import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

import {CategorySection} from "./money/CategorySection";
import {NoteSection} from "./money/NoteSection";
import {TagsSection} from "./money/TagsSection";
import {NumberSection} from "./money/NumberSection";

const MyLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
`;

function Money() {
    return(
        <MyLayout className={'xxx'}>
            <TagsSection/>

            <NoteSection/>

            <CategorySection/>

            <NumberSection/>

        </MyLayout>
    ) ;
}

export default Money;