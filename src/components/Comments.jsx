import React, { useState, useEffect } from "react";
import { fetchCommentsByArticle } from "../api";
import { DeleteComment } from "./DeleteComment";

export const Comments = ({ article_id }) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchCommentsByArticle(article_id)
			.then((commentsFromApi) => {
				setComments(commentsFromApi);
			})
			.catch((error) => {
				console.log("Error fetching comments :(", error);
			});
	}, [article_id, comments]);

	const handleDeleteComment = (deletedCommentId) => {
		setComments((currentComments) =>
			currentComments.filter(
				(comment) => comment.comment_id !== deletedCommentId
			)
		);
	};

	if (comments.length === 0) return <p>No comments yet...</p>;

	return (
		<section>
			<h3>Comments</h3>
			<ul className="comment-card-container">
				{comments.map((comment) => (
					<li className="comment-card" key={comment.comment_id}>
						<p>{comment.author}</p>
						<p>{comment.body}</p>
						<p>
							{new Date(comment.created_at).toLocaleDateString()}
						</p>
						<DeleteComment
							article_id={comment.article_id}
							comment_id={comment.comment_id}
							author={comment.author}
							onDelete={handleDeleteComment}
						/>
					</li>
				))}
			</ul>
		</section>
	);
};
