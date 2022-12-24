import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import Profile from "../components/Profile/Profile";
import { useRouter } from "next/router";

export default function Login() {
	const route = useRouter();
	const session = useSession();
	const supabase = useSupabaseClient();

	return (
		<div className="w-full h-full flex justify-center items-center bg-slate-900">
			<div className="w-1/3 p-10 bg-white rounded-md">
				{!session ? (
					<Auth
						supabaseClient={supabase}
						appearance={{ theme: ThemeSupa }}
						providers={["github"]}
						theme="dark"
					/>
				) : (
					() => route.push("/profile")
					// <Profile session={session} />
				)}
			</div>
		</div>
	);
}
