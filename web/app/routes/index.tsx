// app/routes/index.tsx
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      fetch('https://dummyjson.com/products').then((res) => res.json()),
  });
  return (
    <div>
      <h1>Products</h1>
      {data ? (
        <ul>
          {data.products.map((product: Record<string, string>) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}