import FeaturedPosts from "../components/home-page/featured-posts";
import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
	{
		slug: "getting-started-with-nextjs",
		title: "Getting Started With NextJS",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"Next is the React framework for Production - it makes build fullstack React apps and sites a breeze and ships with built-in SSR",
		date: "2023-07-01",
	},
	{
		slug: "getting-started-with-nextjs2",
		title: "Getting Started With NextJS",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"Next is the React framework for Production - it makes build fullstack React apps and sites a breeze and ships with built-in SSR",
		date: "2023-07-01",
	},
	{
		slug: "getting-started-with-nextjs3",
		title: "Getting Started With NextJS",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"Next is the React framework for Production - it makes build fullstack React apps and sites a breeze and ships with built-in SSR",
		date: "2023-07-01",
	},
	{
		slug: "getting-started-with-nextjs4",
		title: "Getting Started With NextJS",
		image: "getting-started-with-nextjs.png",
		excerpt:
			"Next is the React framework for Production - it makes build fullstack React apps and sites a breeze and ships with built-in SSR",
		date: "2023-07-01",
	},
];

const HomePage = () => {
	return (
		<>
			<Hero />
			<FeaturedPosts posts={DUMMY_POSTS} />
		</>
	);
};

export default HomePage;
