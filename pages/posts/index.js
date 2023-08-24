import AllPosts from "../../components/posts/all-posts";
import { getAllPosts } from "../../lib/post-util";

const Posts = props => {
	return (
		<section>
			<AllPosts posts={props.posts} />
		</section>
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
