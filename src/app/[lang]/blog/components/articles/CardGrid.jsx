import React from 'react'
import ArticleCard from './ArticleCard'

const CardGrid = ({ articles ,lang }) => {
    const articlesConst = [];

    for (let i = 0; i < articles.length; i++) {
        articlesConst.push(<ArticleCard key={i} article={articles[i]} lang={lang} />);
    }

    return (
        <div className="grid lg:grid-cols-2 gap-x-14">
            {articlesConst}
        </div>
    );
}


export default CardGrid;
