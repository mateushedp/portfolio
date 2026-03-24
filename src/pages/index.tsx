import { MapPin, MoveRight, FileUser } from "lucide-react";
import ProjectRow from "@/components/project-row";
import TechBadge from "@/components/tech-badge";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


function Home() {
	const [menuOpen, setMenuOpen] = useState(false);
	return (
		<div className="w-full bg-beige text-mainGrey">
			<section className="md:min-h-screen w-full relative pb-8 px-4 md:px-[231px] flex flex-col md:justify-center pt-[92px] md:pt-0">
				<nav className="absolute top-0 left-0 w-full h-[92px] flex items-center justify-end px-4 md:px-[231px] z-10">
					{/* hamburguer - só no mobile */}
					<button
						className="md:hidden flex flex-col gap-1.5 p-2"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						<span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
						<span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
						<span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
					</button>

					{/* menu normal - só no desktop */}
					<ul className="hidden md:flex font-unigeo text-lg gap-11">
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

					{/* menu aberto - mobile */}
					<AnimatePresence>
						{menuOpen && (
							<motion.div
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.2 }}
								className="md:hidden absolute top-[92px] left-4 right-4 bg-beige flex flex-col items-center gap-6 py-8 font-unigeo text-lg rounded-lg border border-black drop-shadow-brutalist-md"
							>
								<a href="#about" onClick={() => setMenuOpen(false)}>About Me</a>
								<a href="#work" onClick={() => setMenuOpen(false)}>My Work</a>
							</motion.div>
						)}
					</AnimatePresence>
				</nav>

				<div className="flex flex-col gap-6 md:gap-0 items-center md:flex-row-reverse md:justify-between md:items-start w-full mt-2 md:mt-[92px]">
					<div className="w-full md:w-[495px]">
						<h1 className="text-center font-unigeo font-bold text-[40px] md:text-right md:text-[70px] leading-tight">creative frontend development</h1>
					</div>
					
					<div className="w-[250px]">
						<div className="w-[256px] h-[256px] rounded-full bg-[url('/images/selfiee.jpg')] bg-cover bg-center border-[3px] border-black drop-shadow-brutalist-lg"></div>
						<div className="w-full font-cabin mt-8 flex items-center flex-col text-center md:block md:text-left">
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
								<a 
									href="/cv.pdf" 
									download
									aria-label="Download CV"
								>
									<FileUser strokeWidth={1} />
								</a>
							</div>
						</div>
					</div>

					
				</div>
			</section>

			<section id="about" className="md:h-screen w-full pb-8 bg-[url('/images/white-line-pattern.svg')] bg-repeat bg-center bg-[length:80px_80px] px-4 md:px-[231px] flex flex-col justify-center">
				<h2 className="text-center">About Me</h2>
				<p className="font-cabin text-xl md:text-2xl text-mainGrey text-justify mt-9">
					Frontend development is where I've spent the last 3+ years, working mostly with React, Next.js and TypeScript. What sets me apart is that I genuinely enjoy the design side too — I pay attention to details, care about user experience, and can make UI decisions without needing everything handed to me. Beyond frontend, I have solid experience with backend development and DevOps, which gives me a good understanding of the full stack and lets me collaborate effectively across any team.
				</p>
				<div className="w-full h-[125px] mt-[76px] overflow-hidden px-1">
					{/* desktop */}
					<div className="hidden md:flex gap-8">
						<TechBadge title="HTML" iconSrc="/icons/html5.svg" />
						<TechBadge title="CSS" iconSrc="/icons/css3.svg" />
						<TechBadge title="Javascript" iconSrc="/icons/js.svg" />
						<TechBadge title="Tailwind" iconSrc="/icons/tailwindcss.svg" />
						<TechBadge title="React.js" iconSrc="/icons/reactjs.svg" />
						<TechBadge title="Next.js" iconSrc="/icons/nextjs.svg" />
						<TechBadge title="Figma" iconSrc="/icons/figma.svg" />
					</div>

					{/* mobile */}
					<motion.div
						className="md:hidden flex w-max"
						animate={{ x: [0, "-50%"] }}
						transition={{ duration: 25, repeat: Infinity, ease: "linear", repeatType: "loop" }}
					>
						<div className="flex gap-8 pr-8">
							<TechBadge title="HTML" iconSrc="/icons/html5.svg" />
							<TechBadge title="CSS" iconSrc="/icons/css3.svg" />
							<TechBadge title="Javascript" iconSrc="/icons/js.svg" />
							<TechBadge title="Tailwind" iconSrc="/icons/tailwindcss.svg" />
							<TechBadge title="React.js" iconSrc="/icons/reactjs.svg" />
							<TechBadge title="Next.js" iconSrc="/icons/nextjs.svg" />
							<TechBadge title="Figma" iconSrc="/icons/figma.svg" />
						</div>
						<div className="flex gap-8 pr-8">
							<TechBadge title="HTML" iconSrc="/icons/html5.svg" />
							<TechBadge title="CSS" iconSrc="/icons/css3.svg" />
							<TechBadge title="Javascript" iconSrc="/icons/js.svg" />
							<TechBadge title="Tailwind" iconSrc="/icons/tailwindcss.svg" />
							<TechBadge title="React.js" iconSrc="/icons/reactjs.svg" />
							<TechBadge title="Next.js" iconSrc="/icons/nextjs.svg" />
							<TechBadge title="Figma" iconSrc="/icons/figma.svg" />
						</div>
					</motion.div>
				</div>
			</section>

			<section id="work" className="w-full bg-[url('/images/white-line-pattern.svg')] bg-repeat bg-center bg-[length:80px_80px] md:px-[231px] flex flex-col py-20">
				<h2 className="text-center">My Work</h2>
				<div className="pt-4 pb-12">
					<ProjectRow
						title="Reelie"
						description="A daily movie guessing game inspired by Wordle. Guess the film of the day based on genre, runtime, release year, country and score  — each guess reveals how close you are through color-coded feedback."
						githubLink="https://github.com/mateushedp/reelie"
						liveLink="https://reelie.vercel.app/"
						techData={[
							{ title: "Tailwind", iconSrc: "/icons/tailwindcss.svg" },
							{ title: "React.js", iconSrc: "/icons/reactjs.svg" },
							{ title: "Next.js", iconSrc: "/icons/nextjs.svg" },
							{ title: "Prisma", iconSrc: "/icons/nextjs.svg" },
						]}
						images={[
							"/images/reelie-print-1.jpg",
							"/images/reelie-print-2.jpg"
						]}
					/>
					
				</div>
			</section>
		</div>
	);
}

export default Home;
