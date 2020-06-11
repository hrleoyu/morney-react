import React from "react";
import Layout from "../components/Layout";
import {useTags} from "../useTags";
import {useParams} from 'react-router-dom'

type Params = {
    id:string
}

const Tag:React.FC = (props) => {
    const {findTags} = useTags();
    let {id} = useParams<Params>();
    const tag = findTags(parseInt(id));
    console.log(tag)
    return(
        <Layout>
            <div>{tag.name}</div>
        </Layout>
    )
};

export default Tag