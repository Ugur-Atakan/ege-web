import React from 'react'
import ArticleCard from './ArticleCard'
import AttorneyCard from './AttorneyCard';

const CardGrid = ({ articles ,lang }) => {
    const articlesConst = [];

    for (let i = 0; i < articles.length; i++) {
        if (i === 5) {
            articlesConst.push(<AttorneyCard key={i} />);
            i++;
        }
        articlesConst.push(<ArticleCard key={i} article={articles[i]} lang={lang} />);
    }

    return (
        <div className="grid grid-cols-3">
            {articlesConst}
        </div>
    );
}


export default CardGrid;
