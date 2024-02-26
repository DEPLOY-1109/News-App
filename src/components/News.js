import React, { Component } from 'react'

import NewsItem from './NewsItem'

export class News extends Component {
    render() {
        return (
            <>
                <div className="container flex flex-wrap justify-center space-y-1 space-x-1 ">                
                    <h2 className="text-xl font-bold my-2">News Monkey- Top Headlines</h2>
                    <NewsItem title="Your Title here" desc="Your Desc Here" />
                    <NewsItem title="Demo Title" desc="Demo Desc is here" />
                    <NewsItem title="Demo Title" desc="Demo Desc is here" />
                    <NewsItem title="Demo Title" desc="Demo Desc is here" />
                    <NewsItem title="Demo Title" desc="Demo Desc is here" />
                    <NewsItem title="Demo Title" desc="Demo Desc is here" />
                    <NewsItem title="Demo Title" desc="Demo Desc is here" />
                    <NewsItem title="Demo Title" desc="Demo Desc is here" />
                    <NewsItem title="Demo Title" desc="Demo Desc is here" />
                </div>
            </>
        )
    }
}

export default News