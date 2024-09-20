import React, { Component } from 'react'
export class NewsItem extends Component {
    constructor(){
        super();
        console.log("im con from newsitem")
    }
            render() {
            let{title,discription,imageurl,newsurl}=this.props
            return (
                <div className='my-3'>
                    <div>
                    <div className="card" style={{width: "18rem"}}>
                <img src={imageurl}className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{discription}</p>
                    <a href={newsurl} target="_blank" className="btn btn-sm btn-primary">read more</a>
                </div>
                </div>
                </div>
                </div>
                    )
                }
}

export default NewsItem