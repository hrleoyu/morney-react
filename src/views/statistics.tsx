import Layout from "../components/Layout";
import React, {useState} from "react";
import {CategorySection} from "./money/CategorySection";
import {RecordsItem, useRecords} from "../components/useRecords";
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
const Header = styled.h3`
  font-size: 18px;
  line-height: 20px;
  padding: 10px 16px;
`

function Statistics() {
    const [category,setCategory] = useState<'-'|'+'>('-');
    const {getName} = useTags();
    const {records} = useRecords();
    const hash:{[K:string] : RecordsItem[] } ={ }
    const selectCate = records.filter(r => r.category === category)

    selectCate.map(r => {
        const key = day(r.createdAt).format('YYYY-MM-DD');
        if (!(key in hash)){
            hash[key] = []
        }
        hash[key].push(r)
    })
    const array = Object.entries(hash).sort((a, b) => {
       if ( a[0] === b[0]) return 0
        if ( a[0] > b[0]) return -1
        if ( a[0] < b[0]) return 1
        return 0
    })

    return(
        <Layout>
            <CategorySection value={category} onChange={value => {
                setCategory(value)
            }}/>
            {array.map(x => <div>
                <Header>{x[0]}</Header>
                <div>
                    {x[1].map(r => {
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

                        </Item>
                    })}
                </div>
            </div>)}


        </Layout>
    ) ;
}
export default Statistics;