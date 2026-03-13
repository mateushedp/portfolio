
type ComponentProps = {
  title: string;
  iconSrc : string;
};

function TechLabel({ title, iconSrc  }: ComponentProps) {
	return (
		<div className="flex flex-row justify-center h-[29px] items-center gap-1 px-3 py-[6px] bg-mainGreen border border-black rounded-full drop-shadow-brutalist-md text-beige font-unigeo text-sm ">
			<img src={iconSrc} alt={`${title} icon`} className="w-4 h-4" />
			<p className="font-unigeo text-sm">{title}</p>
		</div>
	);
}

export default TechLabel;