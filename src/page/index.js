require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('fetch-ie8');

const React = require('react');
const ReactDOM = require('react-dom');

import HeaderComp from '../components/header'

//antd全家桶的css
import { Slider } from 'antd';
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
                <Slider defaultValue={30} />
                <DatePicker/>
                <h1>欢迎来到首页!!!</h1>
                <a href="./user.html">去用户页面</a>
            </div>
        )
    }
}



ReactDOM.render(<App/>,document.getElementById('app'));
