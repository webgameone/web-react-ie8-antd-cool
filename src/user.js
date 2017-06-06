require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('fetch-ie8');

const React = require('react');
const ReactDOM = require('react-dom');

import HeaderComp from '../components/header'

//antd全家桶的css
import DatePicker from 'antd/lib/date-picker';
import 'antd/dist/antd.css';


function onChange(checked) {
  console.log(`switch to ${checked}`);
}


class App extends React.Component{
    render(){
        return(
            <div>
                <HeaderComp></HeaderComp>
                <h1>欢迎来到用户页面</h1>
                <DatePicker/>
                <a href="./index.html">去首页</a>
            </div>
        )
    }
}



ReactDOM.render(<App/>,document.getElementById('userPage'));
