export default function SnapScrollPage() {
  return (
    <main className="h-screen w-full flex snap-x snap-mandatory overflow-y-hidden overflow-x-scroll">
      <section className="h-screen w-full flex-shrink-0  bg-blue-200 snap-center snap-always">
        <h1>Cool!</h1>
      </section>
      <section className="h-screen w-full flex-shrink-0 bg-yello-200 snap-center snap-always">
        <h1>Section</h1>
      </section>
      <section className="h-screen w-full flex-shrink-0 bg-pink-200 snap-center snap-always">
        <h1>Don't you think?</h1>
      </section>
      <section className="h-screen w-full flex-shrink-0 bg-orange-200 snap-center snap-always">
        <h1>yeah it's cool</h1>
      </section>
      <section className="h-screen w-full flex-shrink-0 bg-red-200 snap-center snap-always">
        <h1>ok let's go to the last one</h1>
      </section>
      <section className="h-screen w-full flex-shrink-0 bg-violet-200 snap-center snap-always">
        <h1>yes, this is the last one</h1>
      </section>
    </main>
  );
}
