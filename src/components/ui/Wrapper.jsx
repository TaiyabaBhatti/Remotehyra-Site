export default function Wrapper({ children, properties }) {
  return (
    <section
      className={`same-spacing px-10 max-mobile-s3:px-5 py-16 max-w-6xl m-auto max-desktop-s4:max-w-4xl  ${properties}`}
    >
      {children}
    </section>
  );
}
