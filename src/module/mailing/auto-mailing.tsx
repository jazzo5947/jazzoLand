import React from 'react';
import MailLayout from "./mail-layout";
import {getKamcoList} from "../parser/public-auction";

function AutoMailing() {

    getKamcoList();
    return (
        <div>
            <MailLayout/>
        </div>
    );
}

export default AutoMailing;