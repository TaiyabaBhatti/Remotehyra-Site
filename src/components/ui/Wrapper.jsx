export default function Wrapper({children,properties}){
    return (
        <section className= {`px-10 py-16 mb-10 ${properties}`}>
{children}
        </section>
    )
}