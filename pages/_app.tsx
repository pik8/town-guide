import Layout from '../src/components/layout';
import { AppProps } from "next/app";

interface CustomPageProps {

}

export default function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}