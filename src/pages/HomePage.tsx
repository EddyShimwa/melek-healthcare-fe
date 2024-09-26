import About from "../components/landing/About";
import Booking from "../components/landing/Booking";
import Contact from "../components/landing/Contact";
import Hero from "../components/landing/Hero";
import Milestone from "../components/landing/Milestone";
import Offers from "../components/landing/Offers";
import Story from "../components/landing/Story";
import Values from "../components/landing/Values";
import WhyStatement from "../components/landing/WhyStatement";
import WhyUs from "../components/landing/WhyUs";

const HomePage = () => {
	return (
		<main>
			<Hero />
			<About />
			<Story />
			<WhyStatement />
			<Milestone />
			<Values />
			<WhyUs />
			<Offers />
			<Booking />
			<Contact />
		</main>
	);
};

export default HomePage;
