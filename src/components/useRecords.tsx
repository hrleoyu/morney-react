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
        setRecords([...records,record])
    };

    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])

    return{records,addRecords}
};

