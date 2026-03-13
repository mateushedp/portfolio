import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Direction = -1 | 0 | 1;

type ImageSliderProps = {
  images: string[];
};

export default function ImageSlider({ images }: ImageSliderProps) {
	// page = current index, direction = slide direction
	const [[page, direction], setPage] = useState<[number, Direction]>([0, 0]);

	// paginate function with direction typed
	const paginate = (newDirection: Direction) => {
		setPage(([prevPage]) => {
			let nextPage = prevPage + newDirection;
			if (nextPage < 0) nextPage = images.length - 1;
			if (nextPage >= images.length) nextPage = 0;
			return [nextPage, newDirection];
		});
	};

	// Variants with typed custom parameter
	const variants: Variants = {
		enter: (direction: Direction) => ({
			x: direction > 0 ? 300 : -300,
			opacity: 0,
			position: "absolute" as const,
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
		}),
		center: {
			zIndex: 1,
			x: 0,
			opacity: 1,
			position: "absolute" as const,
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
		},
		exit: (direction: Direction) => ({
			zIndex: 0,
			x: direction < 0 ? 300 : -300,
			opacity: 0,
			position: "absolute" as const,
			top: 0,
			left: 0,
			width: "100%",
			height: "100%",
		}),
	};

	return (
		<div className="relative w-full h-full overflow-hidden rounded-lg border border-black drop-shadow-brutalist-md bg-black">
			<AnimatePresence initial={false} custom={direction}>
				<motion.img
					key={page}
					src={images[page]}
					custom={direction}
					variants={variants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{ duration: 0.5, ease: "easeInOut" }}
					className="absolute top-0 left-0 w-full h-full object-top object-cover"
					alt={`slide-${page}`}
					style={{ pointerEvents: "none" }}
				/>
			</AnimatePresence>

			<button
				onClick={() => paginate(-1)}
				className="absolute top-1/2 left-2 -translate-y-1/2 p-2 rounded-full z-20
             bg-black/60 backdrop-blur-[16px] backdrop-saturate-200
             border border-white/50 shadow-md"
				aria-label="Previous Slide"
			>
				<ChevronLeft size={34} color="#fff" />
			</button>
			<button
				onClick={() => paginate(1)}
				className="absolute top-1/2 right-2 -translate-y-1/2 p-2 rounded-full z-20
             bg-black/60 backdrop-blur-[16px] backdrop-saturate-200
              border border-white/50 shadow-md"
				aria-label="Next Slide"
			>
				<ChevronRight size={34} color="white"/>
			</button>
		</div>

	);
}
