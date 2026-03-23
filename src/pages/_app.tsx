import "@/styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Web Developer | Mateus Pacheco</title>
				<link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
			</Head>
			<Component {...pageProps} />
		</>
	);
}