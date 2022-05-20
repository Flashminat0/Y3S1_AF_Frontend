import '../styles/globals.css'

export default function MyApp({Component, pageProps}) {
    return (
        <div className={`font-sans`}>
            <Component {...pageProps} />
        </div>
    )
}
