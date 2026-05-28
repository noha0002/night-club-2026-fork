async function Comments({ eventId }) {
  const commentsRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments?eventId=${eventId}`, { cache: "no-store" });
  const comments = await commentsRes.json();

  return (
    <div>
      <h1 className="uppercase text-3xl font-bold">{comments.length} comments</h1>
      <section className="flex flex-col gap-8 mb-10 md:max-w-307.75">
        {comments.map((comment) => (
          <div key={comment.id}>
            <p className="font-medium tracking-wide mt-6 pb-2 md:text-2xl">
              {comment.name} · <span className="text-accent md:text-lg"> Posted {new Date(comment.date).toLocaleDateString("en-US", { day: "2-digit", month: "short", year: "numeric" })}</span>
            </p>
            <p className="font-light tracking-wide md:text-lg">{comment.content}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Comments;
