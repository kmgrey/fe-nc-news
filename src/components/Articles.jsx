import React from "react";
import { useLocation } from "react-router-dom";
import { ArticleCards } from "./ArticleCards";

export const Articles = () => {
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const topic = queryParams.get("topic");

	return (
		<section className="article-section">
			<h2>{topic ? `All ${topic} Articles` : 'All Articles'}</h2>
			<ArticleCards topic={topic} />
		</section>
	);
};
