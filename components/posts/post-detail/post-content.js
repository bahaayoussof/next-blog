import ReactMarkdown from "react-markdown";
import { getAllPosts } from "../../../lib/post-util";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const PostContent = props => {
	const imagePath = `/images/posts/${props.slug}/${props.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />

			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
