import Head from "next/head";
import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData, getPostFiles } from "../../lib/post-util";

const PostDetail = props => {
	return (
		<>
			<Head>
				<title>{props.post.title}</title>
				<meta name="description" content={props.post.excerpt} />
			</Head>
			<PostContent post={props.post} />
		</>
	);
};

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;
	const selectedPost = getPostData(slug);
	return {
		props: {
			post: selectedPost,
		},
		revalidate: 600,
	};
}

export function getStaticPaths() {
	const slugs = getPostFiles();

	const paths = slugs.map(slug => ({ params: { slug: slug } }));
	return {
		paths,
		fallback: true,
	};
}

export default PostDetail;
