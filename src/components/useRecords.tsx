import {useEffect, useState} from 'react'
import {useUpdate} from "./useUpdate";

type RecordsItem = {
    tagIds:number[]
    note:string
    category:'+'|'-'
    amount:number
}

export const useRecords = () => {
    const [records,setRecords] = useState<RecordsItem[]>([]);

    useEffect(()=>{
        setRecords(JSON.parse( window.localStorage.getItem('records') ||'[]'))
    },[])

    const addRecords = (record:RecordsItem) => {
        if (record.amount <=0){
            alert('请输入金额')
            return false}
        if (record.tagIds.length===0){
             alert('请选择标签')
            return false
        }
        setRecords([...records,record])
        return true
    };

    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])



    return{records,addRecords}
};

