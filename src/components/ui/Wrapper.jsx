export default function Wrapper({children,properties}){
    return (
        <section className= {`px-6 ${properties}`}>
{children}
        </section>
    )
}