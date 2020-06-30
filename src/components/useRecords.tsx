import {useEffect, useState} from 'react'
import {useUpdate} from "./useUpdate";

export type RecordsItem = {
    tagIds:number[]
    note:string
    category:'+'|'-'
    amount:number
    createdAt:string
}

type newRecordsItem = {
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
    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])
    console.log(records);
    const addRecords = (newRecord:newRecordsItem) => {
        const record ={...newRecord,createdAt:(new Date()).toISOString()}
        if (record.amount <=0){
            alert('请输入金额')
            return false}
        if (record.tagIds.length===0){
             alert('请选择标签')
            return false
        }
        setRecords([...records,record]);
        return true
    };





    return{records,addRecords}
};

