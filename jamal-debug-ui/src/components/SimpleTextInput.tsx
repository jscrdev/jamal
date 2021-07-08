import React, {FC} from "react";
import "./SimpleText.css";

type SimpleTextInputProps = {
    caption: string;
    reference: any;
    backgroundColor?: string;
};

const SimpleTextInput: FC<SimpleTextInputProps> = ({
                                                       caption,
                                                       reference,
                                                       backgroundColor = "white"
                                                   }) => {
    return (
        <div className="SimpleTextInput_Caption" style={{backgroundColor: backgroundColor}}>
            <div className="textbox_caption" style={{backgroundColor: backgroundColor}}>{caption}</div>
            <textarea className="SimpleTextInput_TextArea" ref={reference}
                      style={{backgroundColor: backgroundColor, width: "99%"}}
                      defaultValue="" onChange={() => {}}/>
        </div>
    );
};

export default SimpleTextInput;
