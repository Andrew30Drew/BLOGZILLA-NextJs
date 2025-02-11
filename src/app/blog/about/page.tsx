export default function about() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div>
        <h1 className="text-3xl text-purple-700 font-bold mb-4">About Us</h1>
        <p> 
          Welcome to Blogzilla, your go-to destination for insightful articles,
          tech trends, and creative ideas. Whether you're a developer, designer,
          entrepreneur, or just someone who loves learning new things, we’re
          here to keep you inspired.
        </p>
        <br />
        <h1 className="text-3xl text-purple-700 font-bold mb-4">Who We Are</h1>
        <p>
          We’re a team of passionate writers, tech enthusiasts, and innovators
          who believe in sharing knowledge and experiences. Our goal is to
          create high-quality content that educates, entertains, and sparks
          curiosity.
        </p>
        <br />
        <h1 className="text-3xl text-purple-700 font-bold mb-4">What We Do</h1>
        <ul className="list-inside pl-2" style={{ listStyleType: "square" }}>
          <li>
            Cover the latest in{" "}
            <span className="font-bold text-gray-800">
              technology, coding, and web development
            </span>
          </li>
          <li>
            Share{" "}
            <span className="font-bold text-gray-800">
              tips, tutorials, and best practices
            </span>{" "}
            for developers
          </li>
          <li>
            Discuss{" "}
            <span className="font-bold text-gray-800">
              productivity, design, and creativity
            </span>
          </li>
          <li>
            Feature{" "}
            <span className="font-bold text-gray-800">
              in-depth guides, reviews, and thought-provoking insights
            </span>
          </li>
        </ul>
        <br />
        <h1 className="text-3xl text-purple-700 font-bold mb-4">
          Why This Blog?
        </h1>
        <p>
          In a fast-paced digital world, staying updated and continuously
          learning is key. We strive to provide{" "}
          <span className="font-bold text-gray-800">
            valuable, well-researched content
          </span>{" "}
          that makes complex topics easier to understand and implement.
          <br />
          <br /> Thank you for stopping by! Feel free to explore, engage, and be
          part of our growing community.
          <br />
          <br />
          <span className="font-bold text-gray-800">
            🚀 Let’s learn and grow together!
          </span>
        </p>
      </div>
    </div>
  );
}
