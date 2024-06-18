import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCommentsByArticle } from '../api';

export const Comments = () => {
	const { article_id } = useParams();
	const [comments, setComments] = useState([]);

	useEffect(() => {
		fetchCommentsByArticle(article_id)
			.then((commentsFromApi) => {
				setComments(commentsFromApi);
			})
			.catch((error) => {
				console.log('Error fetching comments :(', error);
			});
	}, [article_id]);

	if (comments.length === 0) return <p>No comments yet...</p>;

	return (
		<section>
			<h3>Comments</h3>
			<ul className="comment-card-container">
				{comments.map((comment) => (
					<li className="comment-card" key={comment.comment_id}>
                        <p>{comment.author}</p>
						<p>{comment.body}</p>
                        <p>{new Date(comment.created_at).toLocaleDateString()}</p>
					</li>
				))}
			</ul>
		</section>
	);
};
