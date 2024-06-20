import React, { useContext } from "react";
import { deleteCommentFromArticle } from "../api";
import { UserContext } from "../contexts/UserContext";

export const DeleteComment = ({ article_id, comment_id, author, onDelete }) => {
	const { currentUser } = useContext(UserContext);

	const handleDelete = () => {
		if (!currentUser) {
			alert("Please log in to delete a comment :)");
			return;
		}

		if (currentUser.username !== author) {
			alert("You can only delete your own comments!");
			return;
		}

		const userConfirmed = window.confirm("Delete comment?");
		if (!userConfirmed) {
			return;
		}

		deleteCommentFromArticle(comment_id)
			.then(() => {
				onDelete(comment_id);
			})
			.catch((error) => {
				console.error("Error deleting comment :(", error);
			});
	};

	return <button onClick={handleDelete}>Delete Comment</button>;
};
