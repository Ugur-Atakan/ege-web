import React from 'react'
import ArticleCard from './ArticleCard'
import AttorneyCard from './AttorneyCard';

const CardGrid = () => {
    const articles = [];
    for (let i = 0; i < 6; i++) {
        if (i == 5) articles.push (<AttorneyCard key={i} />);
        articles.push(<ArticleCard key={i+Math.random(0,i)} />);
    }

    return (
        <div className="grid grid-cols-3">
            {articles}
        </div>
    );
}


export default CardGrid;
