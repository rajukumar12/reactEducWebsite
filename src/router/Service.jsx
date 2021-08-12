// import React from 'react'


// const Service=(props)=>{
//     return <h1>I am {props.name} page </h1>
// }
// export  default Service;
import Sdata from './Sdata';
import React from 'react';
import Cards from './Cards'

const Service = () => {
    return (
        <>
         <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid">
                <div className="row  cards-div ">
                    <div className="col-10 mx-auto">
                        <div className="row gy-5">
                        {Sdata.map((datavl ,index)=>{
                            
                            return <Cards imgsrc={datavl.imgsrc}
                                title={datavl.title}
                                define={datavl.defination}
                                key={index}
                            />
                        })}
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
export default Service;

