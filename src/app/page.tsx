import { Heading } from '@/components/core/Heading';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 gap-9">
          <div className="flex min-h-screen w-full flex-col justify-center ">
            <Heading tag="h1" className="font-oswald text-primary">
              Jon Rigert
            </Heading>

            <div className="text-xl">
              <p>
                Hi, I&#39;m Jon! I am a web developer/architect, passionate
                about frontend development
              </p>
              <p className="my-4">
                <span className="text-primary">
                  Director, Web Application Development
                </span>{' '}
                at{' '}
                <a
                  href="https://www.bounteous.com"
                  className="text-primary underline"
                >
                  Bounteous
                </a>
              </p>
            </div>

            <p>
              Prefer a different theme? <ThemeToggle />
            </p>
          </div>
          <div className="">Col 2</div>
        </div>
      </div>
    </main>
  );
}
