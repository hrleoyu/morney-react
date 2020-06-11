import {useState} from "react";


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
    const [tags,setTags] = useState<{id:number,name:string}[]>(defaultTags);
    const findTags = (id:number ) => tags.filter(tag => tag.id === id)[0];
    return{tags , setTags,findTags}
};

export {useTags};
