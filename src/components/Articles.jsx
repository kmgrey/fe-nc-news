import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ArticleCards } from "./ArticleCards";
import { Error } from "./Error";
import { fetchTopics } from "../api";

export const Articles = () => {
	const [topics, setTopics] = useState([]);
	const [isValidTopic, setIsValidTopic] = useState(true);
	const location = useLocation();
	const queryParams = new URLSearchParams(location.search);
	const topic = queryParams.get("topic");

	useEffect(() => {
		fetchTopics()
			.then((topicsFromApi) => {
				setTopics(topicsFromApi);

				if (topic) {
					const topicExists = topicsFromApi.some(
						(t) => t.slug === topic
					);
					setIsValidTopic(topicExists);
				} else {
					setIsValidTopic(true);
				}
			})
			.catch((error) => {
				console.error("Error fetching topics :(", error);
			});
	}, [topic]);

	if (!isValidTopic) return <Error />;

	return (
		<section className="article-section">
			<h2>{topic ? `All ${topic} Articles` : "All Articles"}</h2>
			<ArticleCards topic={topic} />
		</section>
	);
};
