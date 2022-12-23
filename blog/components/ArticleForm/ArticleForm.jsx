import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaAt, FaMobileAlt } from "react-icons/fa";

export default function ArticleForm({ handleSubmit }) {
	return (
		<form onSubmit={handleSubmit} className="form-add">
			<input
				required
				type="text"
				name="title"
				placeholder="Tapez le titre de votre article"
			/>
			<input
				type="url"
				name="url"
				placeholder="Inserez l'url de l'image representatrice de votre article"
			/>
			<input
				required
				type="text"
				name="description"
				placeholder="Tapez la description"
			/>
			<textarea
				required
				name="content"
				rows="10"
				cols="10"
				placeholder="Tapez le contenu de votre article"
			></textarea>

			<button className="buttonsend">Poster</button>
		</form>
	);
}
