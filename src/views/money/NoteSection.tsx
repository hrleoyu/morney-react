import styled from "styled-components";
import React, {useRef, useState} from "react";

const Wrapper = styled.section`
  background: #feffff;
  padding: 0 16px;
  font-size: 14px;
    > label {
    display: flex;
    align-items: center;
      >span {
        margin-right: 16px; white-space: nowrap;
      }
        > input{
          display: block;
          width: 100%;
          height: 72px;
          background: none;
          border: none;
        }
    }
`;

type Props = {
    value:string,
    onChange:(value:string)=>void
}

const NoteSection :React.FC <Props> = (props) => {
    const [note,setNote] = useState('');
    console.log(note)
    const refInput = useRef<HTMLInputElement>(null);
    const onBlur = () => {
        if (refInput.current !== null){
        setNote(refInput.current.value)
        }
    };


    return(
        <Wrapper>
            <label>
                <span>备注</span>
                <input type={'text'} placeholder={'在这里添加备注呦~'}
                       ref={refInput}
                       defaultValue={note}
                       onBlur={onBlur}
                />
            </label>
        </Wrapper>
    )
}

export {NoteSection}