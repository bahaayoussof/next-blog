import PostContent from "../../components/posts/post-detail/post-content";
import { getPostData } from "../../lib/post-util";

const PostDetail = props => {
	return (
		<section>
			<PostContent post={props.post} />
		</section>
	);
};

export function getStaticProps(context) {
	const { params } = context;
	const { slug } = params;
	const selectedPost = getPostData(slug);
	console.log("file: [slug].js:16 ~ getStaticProps ~ selectedPost:", selectedPost);
	return {
		props: {
			post: selectedPost,
		},
		revalidate: 600,
	};
}

export function getStaticPath() {
	const slugs = getPostFiles();
	console.log("file: [slug].js:26 ~ getStaticPath ~ slugs:", slugs);
	return {
		paths: slugs.map(slug => ({ params: { slug: slug } })),
		fallback: false,
	};
}

export default PostDetail;
