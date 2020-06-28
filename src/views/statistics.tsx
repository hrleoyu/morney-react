import Layout from "../components/Layout";
import React, {useState} from "react";
import {CategorySection} from "./money/CategorySection";
import {useRecords} from "../components/useRecords";
import {useTags} from '../useTags'

function Statistics() {
    const [category,setCategory] = useState<'-'|'+'>('-');
    const {getName} = useTags();
    const {records} = useRecords();
    console.log(records);
    return(
        <Layout>
            <CategorySection value={category} onChange={value => {
                setCategory(value)
            }}/>

            <div>
                {records.map(r => {
                    return <div>
                        {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        {r.amount}
                    </div>
                })}
            </div>

        </Layout>
    ) ;
}
export default Statistics;