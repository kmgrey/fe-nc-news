import React, { useState, useContext } from "react";
import { postCommentToArticle } from "../api";
import { UserContext } from "../contexts/UserContext";

export const NewComment = ({ article_id, onCommentPosted }) => {
	const [commentBody, setCommentBody] = useState("");
	const { currentUser } = useContext(UserContext);

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!currentUser) {
			alert("You must be logged in to post a comment :)");
			return;
		}

		const newComment = {
			username: currentUser.username,
			body: commentBody,
		};

		postCommentToArticle(article_id, newComment)
			.then((comment) => {
				setCommentBody("");
				onCommentPosted(comment);
			})
			.catch((error) => {
				console.log("Error posting comment :(", error);
			});
	};

	return (
		<form onSubmit={handleSubmit}>
			<textarea
				rows="4"
				cols="50"
				placeholder="New comment..."
				value={commentBody}
				onChange={(event) => setCommentBody(event.target.value)}
				required
			/>
			<button type="submit">Post Comment</button>
		</form>
	);
};
