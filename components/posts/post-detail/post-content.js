import classes from "./post-content.module.css";
import PostHeader from "./post-header";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
const DUMMY_POST = {
	slug: "getting-started-with-nextjs",
	title: "Getting Started With NextJS",
	image: "getting-started-with-nextjs.png",
	date: "2023-07-01",
	content: "# This is the first post",
};

const PostContent = () => {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />

			<ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
		</article>
	);
};

export default PostContent;
