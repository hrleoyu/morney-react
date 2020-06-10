import {useState} from "react";


const useTags = () => {
    const [tags,setTags] = useState<string[]>(['服装','吃饭','住宿','交通','运动','购物',]);
    return{
        tags ,
        setTags
    }
};

export {useTags};
