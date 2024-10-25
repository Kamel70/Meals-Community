import Link from "next/link";
import ImageSlideshow from "@/components/images/image";

export default function Home() {
  return (
    <>
      <header className="container flex mx-auto gap-52 justify-around text-white my-32">
        <div>
          <ImageSlideshow/>
        </div>
        <div className="flex flex-col gap-9">
          <div>
            <h1 className="m-4">NextLevel Food for NextLevel Foodies</h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className="flex gap-6" >
            <Link href="/community">Join the Community</Link>
            <Link href="/meals">Explore Meals</Link>
          </div>
        </div>
      </header>
      <main className="text-white container mx-auto my-4 flex flex-col items-center gap-3">
        <section >
          <h2>How it works</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section >
          <h2>Why NextLevel Food?</h2>
          <p>
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes, and to
            connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
