import { ExternalLink } from "lucide-react";
import ImageSlider from "./image-slider";
import TechLabel from "./tech-label";

type TechData = {
	title: string,
	iconSrc: string
}

type ComponentProps = {
	title: string,
	description: string,
	githubLink?: string,
	liveLink?: string,
	techData: TechData[],
}

function ProjectRow({title, description, githubLink, liveLink, techData}: ComponentProps) {
	return (<div className="w-full flex items-start mt-12">
		<div className="flex-shrink-0 w-[300px] h-[295px]">
			<ImageSlider 
				images={[
					"/images/flickle_print_1.jpg",
					"/images/selfiee.jpg",
				]}/>
		</div>

		{/* description */}
		<div className="flex flex-col ml-9 my-3 gap-6">
			{techData && techData.length > 0 && 
			<div className="flex gap-2">
				{techData.map(tech =>  (
					<TechLabel  key={tech.title} title={tech.title} iconSrc={tech.iconSrc}/>
				))}
			</div>
			}
			<h4 className="font-unigeo font-medium text-[28px]">{title}</h4>
			<p className="font-cabin text-lg leading-tight">{description}</p>
						
			<div className="flex flex-col gap-4 font-unigeo text-sm">
				{githubLink &&
				<a
					target="_blank"
					href={githubLink}
					className="group inline-flex items-center gap-2 font-unigeo text-sm relative w-fit"
				>
					<ExternalLink size={14} />
					<span>Visit site</span>
					<span
						className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-all duration-500 group-hover:w-full"
					/>
				</a>
				
				}
				{liveLink &&
				<a
					target="_blank"
					href={liveLink}
					className="group inline-flex items-center gap-2 font-unigeo text-sm relative w-fit"
				>
					<img src="/icons/github.png" alt="Github icon" className="w-[14px] h-[14px]"/>
					<span>View code</span>
					<span
						className="absolute bottom-0 left-0 h-[1px] w-0 bg-current transition-[width] duration-500 group-hover:w-full"
					/>
				</a>
				// <a target="_blank" href={liveLink} className="flex gap-2"><img src="/icons/github.png" alt="Github icon" className="w-[14px] h-[14px]"/>View code</a>
				}

			</div>
		</div>

					
	</div>);
}

export default ProjectRow;