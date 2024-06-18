import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchArticleById } from '../api';
import { ArticleCards } from './ArticleCards';

export const Article = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState(null);

	useEffect(() => {
		fetchArticleById(article_id)
			.then((articleFromApi) => {
				setArticle(articleFromApi);
			})
			.catch((error) => {
				console.error('Error fetching article :(', error);
			});
	}, [article_id]);

	if (!article) return <p>Loading...</p>;

	return (
		<section className="article">
			<div className="article-container">
				<h2>{article.title}</h2>
				<div className="text-container">
					<p className="topic">{article.topic}</p>
					<p className="date">{new Date(article.created_at).toLocaleDateString()}</p>
					<p className="author">{article.author}</p>
				</div>
				<img src={article.article_img_url} alt={`Image for ${article.title}`} />
				<p>{article.body}</p>
			</div>
			<div class="sidebar">
				<ArticleCards limit={5} />
			</div>
		</section>
	);
};
