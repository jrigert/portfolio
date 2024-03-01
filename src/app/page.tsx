import { HOMEPAGE_CONFIG } from '@/config/homepage';
const { sections } = HOMEPAGE_CONFIG;

export default function Home() {
  return (
    <>
      {sections.map(({ id, Component }) => (
        <section key={id}>
          <Component id={id} />
        </section>
      ))}
    </>
  );
}
