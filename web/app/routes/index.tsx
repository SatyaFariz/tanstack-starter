// app/routes/index.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {

  return (
    <button
      type="button"
      onClick={() => {
        alert('Hello, world!');
      }}
    >
      Click me!
    </button>
  );
}