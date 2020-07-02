import styled from "styled-components";
import React, {useRef} from "react";
import Label from "../../components/Input";

const Wrapper = styled.section`
  background: #feffff;
  padding: 0 16px;
  font-size: 14px;
   
`;

type Props = {
    value:string,
    onChange:(value:string)=>void
}

const NoteSection :React.FC <Props> = (props) => {
    const note = props.value;
    const refInput = useRef<HTMLInputElement>(null);
    const onBlur = () => {
        if (refInput.current !== null){
            props.onChange(refInput.current.value)
        }
    }

    return(
        <Wrapper>
            <Label>
                <span>备注</span>
                <input type={'text'} placeholder={'在这里添加备注呦~'}
                       ref={refInput}
                       defaultValue={note}
                       onBlur={onBlur}
                />
            </Label>
        </Wrapper>
    )
}

export {NoteSection}