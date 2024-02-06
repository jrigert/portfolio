import Heading, { VALID_HEADINGS } from '@/app/components/Heading';

export default function Home() {
  return (
    <main className="min-h-screen bg-contrast">
      <div>
        {VALID_HEADINGS.map((heading) => (
          <Heading key={heading} tag={heading} className="text-white">
            This is a bunch of text for a heading
          </Heading>
        ))}
      </div>
    </main>
  );
}
