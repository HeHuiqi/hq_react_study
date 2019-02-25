

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import AppBase from './AppBase'
// import LoginControl from "./Greeting";
import HqList from "./HqList";
// import HqForm from "./HqForm";
// import HqCalculator from "./HqCalculator";
// import HqGroup from './HqGroup'
// import HqProductTable from "./HqProductTable";
import HqFileChoose from "./HqFileChoose";


ReactDOM.render(
    <HqList numbers={[1,2,3,4,5,6,7,8,9,10]}/>,
    document.getElementById('root'),
);

