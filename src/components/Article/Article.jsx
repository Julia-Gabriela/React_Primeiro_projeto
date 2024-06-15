import React from "react";

import"./styles.css";

export class Article extends React.Component {
    render() {
        return (
            
            <article id="article">
               <a href={this.props.link}><img src={this.props.thumbnail} alt="this.props.title"/></a> 

                <div className="article-infos">
                    <h2>{this.props.title}</h2>
                    <h3>{this.props.provider}</h3>

                    <p>
                        {this.props.description}
                    </p>
                </div>
            </article>
        )
    }
}