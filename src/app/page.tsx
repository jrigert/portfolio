import Heading, { VALID_HEADINGS } from '@/components/Heading';

export default function Home() {
  return (
    <main className="min-h-screen bg-contrast">
      <div className="container mx-auto pt-6">
        {VALID_HEADINGS.map((heading) => (
          <Heading key={heading} tag={heading} className="text-white">
            This is a bunch of text for a heading ({heading})
          </Heading>
        ))}
      </div>
    </main>
  );
}
