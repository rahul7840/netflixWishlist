import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import "./index.css";
import Sdata from './Sdata';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 

function ncard(val){
    return(
        <Card
        // imgsrc={Sdata[0].imgsrc}
        // title={Sdata[0].title}
        // sname={Sdata[0].sname}
        // link={Sdata[0].link}
        imgsrc={val.imgsrc}
        title={val.title}
        sname={val.sname}
        link={val.link}
    />
 );

}
ReactDOM.render(<>


<h1 className='heading_style'>List of top series</h1>
    {Sdata.map(ncard)}
</>
    , document.getElementById('root')
);