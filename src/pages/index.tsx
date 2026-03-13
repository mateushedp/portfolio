import { MapPin, MoveRight } from "lucide-react";
import ProjectRow from "@/components/project-row";
import TechBadge from "@/components/tech-badge";

function Home() {
	return (
		<div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth bg-beige text-mainGrey">
			<section className="h-screen w-full snap-start relative px-[231px] flex flex-col justify-center">
				<nav className="absolute top-0 left-0 w-full h-[92px] flex items-center justify-end px-[231px] z-10">
					<ul className="font-unigeo text-lg flex gap-11">
						<li>
							<a href="#about" className="group flex items-center gap-1 transition-all duration-300">
								<span className="opacity-0 translate-x-[-8px] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
									<MoveRight/>
								</span>
								About Me
								
							</a>
						</li>
						<li>
							<a href="#work" className="group flex items-center gap-1 transition-all duration-300">
								<span className="opacity-0 translate-x-[-8px] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
									<MoveRight/>
								</span>
								My Work
							</a>
						</li>
					</ul>
				</nav>

				<div className="flex justify-between items-start w-full mt-[92px]">
					<div className="w-[250px]">
						<div className="w-[256px] h-[256px] rounded-full bg-[url('/images/selfiee.jpg')] bg-cover bg-center border-[3px] border-black drop-shadow-brutalist-lg"></div>
						<div className="w-full font-cabin mt-8">
							<h3 className="text-2xl font-bold leading-tight">Hi, I'm Mateus,</h3>
							<p className="leading-4">a front end developer focused on creating beautiful digital experiences.</p>
							<div className="flex items-end gap-1 font-semibold my-3">
								<MapPin size={16} />
								<p className="font-semibold leading-none -mb-[2px]"> Based in Brasil.</p>
							</div>
							<div className="flex gap-3">
								<a href="https://github.com/mateushedp" target="_blank"><img src="/icons/github.png" className="w-6 h-6" alt="Github icon" /></a>
								<a href="https://www.linkedin.com/in/mateus-pacheco-02b675153/" target="_blank"><img src="/icons/linkedin.png" className="w-6 h-6" alt="Linkedin icon" /></a>
								<a href="mailto:mateushedlundp@gmail.com" aria-label="Send Email"><img src="/icons/mail.png" className="w-6 h-6" alt="Mail icon" /></a>
							</div>
						</div>
					</div>

					<div className="w-[495px]">
						<h1 className="text-right font-unigeo font-bold text-[70px] leading-tight">creative frontend development</h1>
					</div>
				</div>
			</section>

			<section id="about" className="h-screen w-full bg-[url('/images/white-line-pattern.svg')] bg-repeat bg-center bg-[length:80px_80px] px-[231px] flex flex-col justify-center">
				<h2 className="text-center snap-start">About Me</h2>
				<p className="font-cabin text-2xl text-mainGrey text-justify mt-9">
					I’m a professional front end developer and UI designer who focuses on creating beautiful, intuitive experiences for users. With a passion for turning ideas into clean, functional interfaces, I bridge the gap between design and code. My work lives at the intersection of creativity and logic; whether it's crafting scalable design systems, prototyping sleek interfaces, or bringing UI to life with modern frameworks like React and Next.js, I approach every project with a user-first mindset and a designer’s eye for detail.
				</p>
				<div className="w-full h-8 mt-[76px] flex gap-8">
					<TechBadge title="HTML" iconSrc="/icons/html5.svg" />
					<TechBadge title="CSS" iconSrc="/icons/css3.svg" />
					<TechBadge title="Javascript" iconSrc="/icons/js.svg" />
					<TechBadge title="Tailwind" iconSrc="/icons/tailwindcss.svg" />
					<TechBadge title="React.js" iconSrc="/icons/reactjs.svg" />
					<TechBadge title="Next.js" iconSrc="/icons/nextjs.svg" />
					<TechBadge title="Figma" iconSrc="/icons/figma.svg" />
				</div>
			</section>

			<section id="work" className="h-screen w-full bg-[url('/images/white-line-pattern.svg')] bg-repeat bg-center bg-[length:80px_80px] px-[231px] flex flex-col pt-20">
				<h2 className="text-center snap-start">My Work</h2>
				<div className="min-h-screen pt-4 pb-12 overflow-y-auto scrollbar-hidden">
					<ProjectRow
						title="Flickle"
						description="Lorem ipsum dolor sit amet consectetur. Et volutpat tristique egestas eget. Lorem ipsum dolor sit amet consectetur. Et volutpat tristique egestas eget."
						githubLink="https://github.com/mateushedp/flickle"
						liveLink="https://flickle.vercel.app/"
						techData={[
							{ title: "Tailwind", iconSrc: "/icons/tailwindcss.svg" },
							{ title: "React.js", iconSrc: "/icons/reactjs.svg" },
							{ title: "Next.js", iconSrc: "/icons/nextjs.svg" },
							{ title: "Prisma", iconSrc: "/icons/nextjs.svg" },
						]}
					/>
					<ProjectRow
						title="Flickle"
						description="Lorem ipsum dolor sit amet consectetur. Et volutpat tristique egestas eget. Lorem ipsum dolor sit amet consectetur. Et volutpat tristique egestas eget."
						techData={[
							{ title: "Tailwind", iconSrc: "/icons/tailwindcss.svg" },
							{ title: "React.js", iconSrc: "/icons/reactjs.svg" },
							{ title: "Next.js", iconSrc: "/icons/nextjs.svg" },
							{ title: "Prisma", iconSrc: "/icons/nextjs.svg" },
						]}
					/>
					<ProjectRow
						title="Flickle"
						description="Lorem ipsum dolor sit amet consectetur. Et volutpat tristique egestas eget. Lorem ipsum dolor sit amet consectetur. Et volutpat tristique egestas eget."
						techData={[
							{ title: "Tailwind", iconSrc: "/icons/tailwindcss.svg" },
							{ title: "React.js", iconSrc: "/icons/reactjs.svg" },
							{ title: "Next.js", iconSrc: "/icons/nextjs.svg" },
							{ title: "Prisma", iconSrc: "/icons/nextjs.svg" },
						]}
					/>
				</div>
			</section>
		</div>
	);
}

export default Home;
