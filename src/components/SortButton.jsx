import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

export const SortButton = () => {
	const navigate = useNavigate();

	const handleSortChange = (sortBy, order) => {
		const searchParams = new URLSearchParams(window.location.search);
		searchParams.set("sort_by", sortBy);
		searchParams.set("order", order);
		navigate({
			search: searchParams.toString(),
		});
	};

	return (
		<DropdownButton
			id="dropdown-basic-button"
			className="sort-button"
			title="Sort"
		>
			<Dropdown.Item
				onClick={() => handleSortChange("created_at", "asc")}
			>
				Date Asc
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => handleSortChange("created_at", "desc")}
			>
				Date Desc
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => handleSortChange("comment_count", "asc")}
			>
				Comment Count Asc
			</Dropdown.Item>
			<Dropdown.Item
				onClick={() => handleSortChange("comment_count", "desc")}
			>
				Comment Count Desc
			</Dropdown.Item>
			<Dropdown.Item onClick={() => handleSortChange("votes", "asc")}>
				Votes Asc
			</Dropdown.Item>
			<Dropdown.Item onClick={() => handleSortChange("votes", "desc")}>
				Votes Desc
			</Dropdown.Item>
		</DropdownButton>
	);
};
