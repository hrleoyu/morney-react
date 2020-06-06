import styled from "styled-components";

const TagsSection = styled.section`
  background: #feffff;
  display: flex;flex-direction: column;flex-grow: 1;justify-content: flex-end;align-items: flex-start;
  > ol {
    display: flex;flex-wrap: wrap;flex-direction: row;justify-content: center;
     >li{
      background: #fbf4b7; width: 80px;height: 80px;border-radius: 50%;display: inline-block;
      padding: 3px 18px;font-size: 14px;margin: 5px 5px;border: 1px solid #4e4f45;
      text-align: center;
       >.iconNav {display: block;width: 44px;height: 44px;margin-top: 4px;}
         }
          .none {visibility:hidden;}
            //不占位隐藏
        }
          >button {background: none;border: none;border-bottom: 1px solid ;color: #666;padding: 0 4px;
        margin: 5px 31px;}
`;

export {TagsSection}