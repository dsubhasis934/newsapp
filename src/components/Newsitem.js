import React, { Component } from 'react'


export default class Newsitem extends Component {


    render() {
        let { title, description, imageurl, urlContent, author, date } = this.props; //in function based components we just pass props in function but in class based components we need to declare this.prop for access class and also declare property names here.
        return (
            <div>
                <div className="card my-2">
                    <img src={!imageurl ? "https://images.wsj.net/im-522290/social" : imageurl} alt="..." className="card-img-top" />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{!description ? "there is no description" : description}</p>
                        <a href={urlContent} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Learn More</a>
                        {/* toGMTString() function convert time in exatc gmt time */}
                        <p className="card-text"><small className="text-muted">By {author} updated {new Date(date).toGMTString()}</small></p>
                    </div>
                </div>
            </div >
        )
    }
}

