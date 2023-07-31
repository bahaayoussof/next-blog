import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image src="/images/site/avatar.jpg" alt="Profile Image" width={300} height={300} />
			</div>

			<h1>Hi, I'm Blogger</h1>

			<p>I blog about web development - especially frontend frameworks like React</p>
		</section>
	);
};

export default Hero;
