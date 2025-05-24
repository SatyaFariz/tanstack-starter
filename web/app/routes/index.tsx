// app/routes/index.tsx
import Http from '@/utils/http';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: Home,
});

function Home() {
  const { data } = useQuery({
    queryKey: ['products'],
    queryFn: () =>
      Http.get<object>('https://dummyjson.com/products'),
  });
  return (
    <div>
      <h1>Products</h1>
      {data ? (
        <div>
          {JSON.stringify(data)}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}