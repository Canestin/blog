import { useUser } from "@supabase/auth-helpers-react";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import formateDate from "../../functions/formatDate";
import Layout from "../../layout/layout";
import { supabase } from "../../utils/supabase";
import Link from "next/link";

export default function ProfilePage() {
	const user = useUser();
	const [data, setArticles] = useState();

	useEffect(() => {
		if (user) {
			console.log(user);
		}
		supabase
			.from("profiles")
			.select("*, articles(*)")
			.eq("user_id", user.id)
			.single()
			.then((res) => {
				console.log("Data de chez Data !", res);
				setArticles(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [user]);
	return (
		<>
			<Head>
				<title>Profile</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className="container-article dark:text-white/80">
					<div className="article-div">
						<div className="profile-banner">
							<img
								src="https://png.pngtree.com/thumb_back/fh260/back_pic/02/66/55/50578b1ecd8c4ae.jpg"
								layout="responsive"
							/>
							<h2>{data ? data.full_name : "Chargement..."}</h2>
							<p>Articles</p>
						</div>
						<div className="contain-articles dark:bg-slate-800">
							{data ? (
								data.articles ? (
									data.articles.map((article) => (
										<div key={article.id} className="mb20 article-box">
											<div>
												<p className="mb10 text-zinc-400">
													{formateDate(article.created_at)}
												</p>
												<h3 className="dark:text-sky-500 ">{article.title}</h3>
												<p>{article.body.slice(0, 200) + "..."}</p>
											</div>

											<div>
												<img src={article.imageUrl} layout="responsive" />
											</div>
										</div>
									))
								) : (
									<h2>Aucun article</h2>
								)
							) : (
								<h2>Chargement...</h2>
							)}
						</div>
					</div>
					<div className="user-div">
						<div className="mb50">
							<div className="user-right-img">
								<img
									src="https://upload.wikimedia.org/wikipedia/commons/a/af/Arnold_Schwarzenegger_by_Gage_Skidmore_4.jpg"
									layout="responsive"
								/>
								<span className="ml20 text-sky-500">
									{data ? <h2> {data.full_name} </h2> : <h2>Chargement...</h2>}
								</span>
							</div>
							{data ? (
								<div className="mt20 ">
									<p className="pb-4 text-sky-300">{"@" + data.username} </p>
									<p> {data.description} </p>
								</div>
							) : (
								<h2>Chargement...</h2>
							)}

							<Link href="/profile/update">
								{/* <Image src={logo} width={90} height={50} /> */}
								<span className="cursor-pointer p-5 text-2xl text-orange-500">
									Mes informations
								</span>
							</Link>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);
}
