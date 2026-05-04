import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-pink-50 font-sans dark:bg-zinc-950">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-zinc-900 shadow-xl rounded-3xl sm:items-center">
        <div className="relative w-64 h-64 overflow-hidden rounded-full border-8 border-pink-200 mb-8">
          <Image
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=500&auto=format&fit=crop"
            alt="Cute cat"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-pink-600 dark:text-pink-400">
            Welcome to the Meow House! 🐾
          </h1>
          <p className="max-w-md text-xl leading-8 text-zinc-600 dark:text-zinc-300">
            Life is better with cats. Explore our collection of the cutest, fluffiest, and most playful kittens in the world.
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-10 text-base font-medium sm:flex-row">
          <button
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-pink-500 px-8 text-white transition-all hover:bg-pink-600 hover:scale-105 active:scale-95 shadow-lg"
          >
            Pet the Cat
          </button>
          <button
            className="flex h-12 items-center justify-center rounded-full border-2 border-pink-200 px-8 transition-all hover:border-pink-500 hover:text-pink-600 dark:border-zinc-700 dark:hover:border-pink-400 dark:hover:text-pink-400"
          >
            More Kittens
          </button>
        </div>

        <footer className="mt-16 text-zinc-400 text-sm italic">
          "Meow is the time for happiness."
        </footer>
      </main>
    </div>
  );
}
