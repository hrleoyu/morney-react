import React from "react";

// require( '../icons/money.svg');
// require('../icons/stiat.svg');
// require('../icons/tags.svg');
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons/', true, /\.svg$/));} catch (error) {console.log(error);}
//引入整个目录中的svg



type Props = {
    name : string
}


const Icon = (props : Props) => {
    return (
        <svg className={'iconNav'}>
            <use xlinkHref={'#' + props.name}></use>
        </svg>
    )
}

export default Icon