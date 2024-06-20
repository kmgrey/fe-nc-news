import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../api';

export const ArticleCards = ({ limit }) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetchArticles()
			.then((articlesFromApi) => {
				setArticles(articlesFromApi);
				setLoading(false)
			})
			.catch((error) => {
				console.error('Error fetching articles :(', error);
			});
	}, []);

	const displayedArticles = limit ? articles.slice(0, limit) : articles;
	if (loading) return <p>Loading articles...</p>;

	return (
		<ul className="article-card-container">
			{displayedArticles.map((article) => (
				<Link to={`/articles/${article.article_id}`} key={article.article_id}>
					<li className="article-card">
						<img src={article.article_img_url} alt={`Image for ${article.title}`} />
						<h3>{article.title}</h3>
						<div className="text-container">
							<p className="author">{article.author}</p>
							<p className="topic">{article.topic}</p>
							<p className="date">{new Date(article.created_at).toLocaleDateString()}</p>
						</div>
					</li>
				</Link>
			))}
		</ul>
	);
};
