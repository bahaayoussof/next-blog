import Head from "next/head";
import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

const Posts = props => {
	return (
		<>
			<Head>
				<title>All Posts</title>
				<meta
					name="description"
					content="A list of all programming-related tutorials and posts!"
				/>
			</Head>
			<AllPosts posts={props.posts} />
		</>
	);
};

export function getStaticProps() {
	const posts = getAllPosts();
	return {
		props: {
			posts,
		},
	};
}

export default Posts;
