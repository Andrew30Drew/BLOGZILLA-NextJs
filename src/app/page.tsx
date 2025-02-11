import Image from "next/image";

export default function Home() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-gray-50">
      {/* Purple Background */}
      <div className="absolute top-0 right-0 h-full w-1/3 bg-purple-800 hidden md:block"></div>

      <div className="container mx-auto p-6 grid md:grid-cols-2 items-center relative z-10">
        {/* Text Section */}
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <h1 className="text-4xl text-purple-700 font-bold mb-4">
            Welcome Aboard Tech Enthusiasts!
          </h1>
          <p className="text-lg text-gray-700 mb-4">
            Let&apos;s build our first Next.js project!
          </p>
          <a
            href="/blog/posts"
            className="inline-block text-purple-700 hover:text-white py-2 px-6 rounded-md hover:bg-purple-800 outline outline-1 outline-purple-700 transition"
          >
            Go to Blog
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center relative">
          <Image
            src="/bg.jpg"
            alt="Background Image"
            width={500}
            height={500}
            className="hidden md:block z-10"
          />
        </div>
      </div>
    </main>
  );
}
