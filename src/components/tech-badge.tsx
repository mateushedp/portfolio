
type ComponentProps = {
  title: string;
  iconSrc : string;
};

function TechBadge({ title, iconSrc  }: ComponentProps) {
	return (
		<div className="flex flex-col justify-center w-[100px] h-[120px] items-center gap-3 p-3 bg-mainGreen border border-black rounded-lg drop-shadow-brutalist-md text-beige font-unigeo text-sm">
			<img src={iconSrc} alt={`${title} icon`} className="w-[48px] h-auto" />
			<p className="font-unigeo text-base">{title}</p>
		</div>
	);
}

export default TechBadge;