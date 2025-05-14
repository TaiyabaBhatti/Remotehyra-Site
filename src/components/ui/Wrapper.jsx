export default function Wrapper({children,properties}){
    return (
        <section className= {`same-spacing px-10 max-mobile-s3:px-5 py-16 mb-10 ${properties}`}>
{children}
        </section>
    )
}