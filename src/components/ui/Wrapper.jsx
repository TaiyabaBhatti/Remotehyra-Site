export default function Wrapper({ children, properties, animate = "" }) {
  return (
    <section
      data-aos={animate}
      className={`same-spacing px-10 max-mobile-s3:px-5 pt-12 pb-24 max-w-6xl m-auto max-desktop-s4:max-w-4xl  ${properties}`}
    >
      {children}
    </section>
  );
}
