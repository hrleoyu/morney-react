import Layout from "../components/Layout";
import React, {useState} from "react";
import {CategorySection} from "./money/CategorySection";
import {useRecords} from "../components/useRecords";
import {useTags} from '../useTags'
import day from "dayjs";
import styled from "styled-components";

const Item = styled.div`
display: flex;
justify-content: space-between;
background: white ;
font-size: 18px;
line-height: 20px;
padding: 10px 16px ;
  >.note{
  margin-right: auto;
  margin-left: 16px;
  color: #666;
  }
`

function Statistics() {
    const [category,setCategory] = useState<'-'|'+'>('-');
    const {getName} = useTags();
    const {records} = useRecords();
    const selectCate = records.filter(r => r.category === category)


    return(
        <Layout>
            <CategorySection value={category} onChange={value => {
                setCategory(value)
            }}/>

            <div>
                {selectCate.map(r => {
                    return <Item>
                        <div className="tags">
                            {r.tagIds.map(tagId => <span>{getName(tagId)}</span>)}
                        </div>

                        {r.note && <div className="note">
                            {r.note}
                        </div> }

                        <div className="amount">
                            ￥{r.amount}
                        </div>


                        {day(r.createdAt).format('YYYY年MM月DD日')}
                    </Item>
                })}
            </div>
        </Layout>
    ) ;
}
export default Statistics;