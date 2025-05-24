// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  return (
    <div>
      <button
        onClick={() => {
          alert('Hello, world!');
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Click Me
      </button>
    </div>
  );
}