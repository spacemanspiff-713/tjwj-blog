interface Post {
    id: number;
    title: string;
    body: string;
  }
  
  export default async function Page() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data: Post[] = await response.json();
  
      return (
        <main className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Hello</h1>
          {data.map((post) => (
            <p key={post.id} className="mb-2">
              {post.id}: {post.title}
            </p>
          ))}
        </main>
      );
    } catch (error) {
      return (
        <main>
          <h1>Error loading posts</h1>
          <p>{error instanceof Error ? error.message : 'Unknown error occurred'}</p>
        </main>
      );
    }
  }