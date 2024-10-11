import type { AppProps } from "next/app";

// biome-ignore lint/nursery/useExplicitFunctionReturnType: <explanation>
const MyApp = ({ Component, pageProps }: AppProps) => {
	return <Component {...pageProps} />;
};
export default MyApp;
