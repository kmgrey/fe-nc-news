import React, { useState, useEffect } from 'react';
import { fetchArticles } from '../api';

export const Articles = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		fetchArticles()
			.then((articlesFromApi) => {
				setArticles(articlesFromApi);
			})
			.catch((error) => {
				console.error('Error fetching articles :(', error);
			});
	}, []);

	return (
		<section className="article-section">
			<h2>Articles Go Here</h2>
			<ul className="article-container">
				{articles.map((article) => (
					<li className="article-card" key={article.article_id}>
						<img src={article.article_img_url} />
						<h3>{article.title}</h3>
						<div className="text-container">
							<p className="author">{article.author}</p>
							<p className="topic">{article.topic}</p>
							<p className="date">{new Date(article.created_at).toLocaleDateString()}</p>
						</div>
					</li>
				))}
			</ul>
		</section>
	);
};
