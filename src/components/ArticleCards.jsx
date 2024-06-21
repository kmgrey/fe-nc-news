import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchArticles } from "../api";
import { SortButton } from "./SortButton";

export const ArticleCards = ({ limit, topic }) => {
	const [articles, setArticles] = useState([]);
	const [loading, setLoading] = useState(true);
	const location = useLocation();

	useEffect(() => {
		const searchParams = new URLSearchParams(location.search);
		const sortBy = searchParams.get("sort_by") || "created_at";
		const order = searchParams.get("order") || "desc";

		setLoading(true);
		fetchArticles(topic, sortBy, order)
			.then((articlesFromApi) => {
				setArticles(articlesFromApi);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error fetching articles :(", error);
				setLoading(false);
			});
	}, [topic, location.search]);

	const displayedArticles = limit ? articles.slice(0, limit) : articles;

	if (loading) return <p>Loading articles...</p>;

	return (
		<section>
			<SortButton />
			<ul className="article-card-container">
				{displayedArticles.map((article) => (
					<Link
						to={`/articles/${article.article_id}`}
						key={article.article_id}
					>
						<li className="article-card">
							<img
								src={article.article_img_url}
								alt={`Image for ${article.title}`}
							/>
							<h3>{article.title}</h3>
							<div className="text-container">
								<p className="author">{article.author}</p>
								<p className="topic">{article.topic}</p>
								<p className="date">
									{new Date(
										article.created_at
									).toLocaleDateString()}
								</p>
								<p>Comments: {article.comment_count}</p>
								<p>Votes: {article.votes}</p>
							</div>
						</li>
					</Link>
				))}
			</ul>
		</section>
	);
};
