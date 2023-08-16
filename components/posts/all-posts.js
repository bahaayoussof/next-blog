import PostGrid from "./post-grid";
import classes from "./all-posts.module.css";

const AllPosts = props => {
	return (
		<section className={classes.posts}>
			<PostGrid posts={props.posts} />
		</section>
	);
};

export default AllPosts;
