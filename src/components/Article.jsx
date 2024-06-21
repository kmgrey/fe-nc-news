import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import { ArticleCards } from "./ArticleCards";
import { Comments } from "./Comments";
import { ArticleVotes } from "./ArticleVotes";
import { NewComment } from "./NewComment";
import { Error } from "./Error";
import { Loading } from "./Loading";

export const Article = () => {
	const { article_id } = useParams();
	const [article, setArticle] = useState(null);
	const [comments, setComments] = useState([]);
	const [articleExists, setArticleExists] = useState(true);

	useEffect(() => {
		fetchArticleById(article_id)
			.then((articleFromApi) => {
				setArticle(articleFromApi);
			})
			.catch((error) => {
				setArticleExists(false);
				console.error("Error fetching article :(", error);
			});
	}, [article_id]);

	const handleCommentPosted = (newComment) => {
		setComments([...comments, newComment]);
	};

	if (!articleExists) return <Error />;
	if (!article) return <Loading />;

	return (
		<>
			<section className="article">
				<article className="article-container">
					<h2>{article.title}</h2>
					<div className="text-container">
						<p className="topic">{article.topic}</p>
						<p className="date">
							{new Date(article.created_at).toLocaleDateString()}
						</p>
						<p className="author">{article.author}</p>
					</div>
					<img
						src={article.article_img_url}
						alt={`Image for ${article.title}`}
					/>
					<p>{article.body}</p>
					<ArticleVotes
						article_id={article_id}
						initialVotes={article.votes}
					/>
					<NewComment
						article_id={article_id}
						onCommentPosted={handleCommentPosted}
					/>
					<Comments article_id={article_id} />
				</article>
				<article className="sidebar">
					<ArticleCards limit={5} />
				</article>
			</section>
		</>
	);
};
