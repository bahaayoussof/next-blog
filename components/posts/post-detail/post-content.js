import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
	slug: "getting-started-with-nextjs",
	title: "Getting Started With NextJS",
	image: "getting-started-with-nextjs.png",
	content: "# This is first post",
};

const PostContent = () => {
	const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
	return (
		<article className={classes.content}>
			<PostHeader title={DUMMY_POST.title} image={imagePath} />

			{DUMMY_POST.content}
		</article>
	);
};

export default PostContent;
