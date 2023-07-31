import Link from "next/link";
import classes from "./main-navigation.module.css";
const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<Link href="/">
				<div className={classes.logo}>Next Blog</div>
			</Link>
			<nav>
				<ul>
					<li>
						<Link href="/posts">Posts</Link>
					</li>
					<li>
						<Link href="/contact">Contact Us</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default MainNavigation;
