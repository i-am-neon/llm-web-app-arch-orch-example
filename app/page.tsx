import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-semibold">
          Best Practices for Building LLM-Powered Web Apps
        </h1>
        <p className="mt-4">
          This is the companion app to the guide on best practices for creating
          web apps powered by large language models (LLMs).
        </p>
        <div className="mt-2">
          <ul className="list-disc list-inside">
            <li>
              Watch the{" "}
              <a
                href="https://www.youtube.com/..."
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                YouTube video
              </a>
            </li>
            <li>
              Read the{" "}
              <a
                href="https://medium.com/..."
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Medium article
              </a>
            </li>
          </ul>
        </div>
        <h2 className="mt-4 text-xl font-medium">Topics Covered</h2>
        <ul className="mt-2 space-y-4">
          <li>
            <strong>LLM Orchestration:</strong> Learn how to coordinate AI calls
            in your app&apos;s workflow. Start simple and let it grow with your
            app&apos;s complexity.
          </li>
          <li>
            <strong>Separate AI call responsibilities:</strong> Break large LLM
            calls into multiple smaller calls, each focusing on a single
            responsibility.
          </li>
          <li>
            <strong>Layers of abstraction:</strong> Use abstractions within AI
            calls to make your code easier to reuse and maintain.
          </li>
          <li>
            <strong>AI adherence to return types:</strong> Ensure reliable
            return types using AI SDKs and Zod without modifying the prompt.
          </li>
        </ul>
        <Link
          href="/character-creator"
          className="mt-8 flex items-center mx-auto px-4 py-2 text-lg font-semibold rounded-lg shadow-lg bg-black dark:bg-white text-white dark:text-black"
        >
          Go To Character Creator
        </Link>
      </main>
    </div>
  );
}

