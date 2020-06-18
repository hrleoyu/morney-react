import {useEffect, useRef, useState} from "react";


const defaultTags =
[
    {id:1,name:'服装'},
    {id:2,name:'吃饭'},
    {id:3,name:'住宿'},
    {id:4,name:'交通'},
    {id:5,name:'运动'},
    {id:6,name:'购物'},
];

const useTags = () => {//封装一个自定义hook
    const [tags,setTags] = useState<{id:number,name:string}[]>([]);

    useEffect(() =>{
       let localTags =  JSON.parse(window.localStorage.getItem('tags' )||'[]');
        if (localTags.length === 0) {
            localTags = [
                {id:1,name:'服装'},
                {id:2,name:'吃饭'},
                {id:3,name:'住宿'},
                {id:4,name:'交通'},
                {id:5,name:'运动'},
                {id:6,name:'购物'},
            ];
        }
        setTags(localTags)
        console.log(localTags)
    },[]);
    useEffect(() => {
        window.localStorage.setItem('tags',JSON.stringify(tags))
    });
    const findTags = (id:number ) => tags.filter(tag => tag.id === id)[0];
    const deleteTag = (id:number) =>{setTags(tags.filter(tag => tag.id !== id))};
    const addTag = () => {
        const tagName = window.prompt('新标签名为：')
        console.log(tagName)
        if (tagName !== null){
            setTags([...tags,{id:Math.random(),name:tagName}])
        }
    };
    return{tags , addTag,setTags,findTags,deleteTag}
};

export {useTags};
