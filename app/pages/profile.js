import React from "react";
import Profile from "../components/Profile/Profile";
import { supabase } from "../utils/supabase";

export default function ProfilePage({ user }) {
	console.log("Ma data de chez data ", user);
	return (
		<div>
			{/* <Profile /> */}
			<h1>NDOSS</h1>
		</div>
	);
}
export async function getServerSideProps({ params }) {
	const {
		data: { user },
		error,
	} = await supabase.auth.getUser();

	// let { data, error } = await supabase
	// 	.from("profiles")
	// 	.select(`username, website, avatar_url`)
	// 	.eq("id", await supabase.auth.currentUser())
	// 	.single();
	// if (data) {
	// 	setUsername(data.username);
	// 	setWebsite(data.website);
	// 	setAvatarUrl(data.avatar_url);
	// }
	if (error) {
		console.log("Error loading user data!");
	} else {
		console.log("Ma data de chez data ", user);
	}

	return {
		props: {
			user,
		},
	};
}
