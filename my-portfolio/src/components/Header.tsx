export default function Header() {
  return (
    <div className="flex bg-white dark:bg-black w-screen h-screen flex-col justify-center items-center text-black dark:text-white transition-opacity duration-700">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-shadow text-center animate-bounce">
        Welcome to My Website
      </h1>
      <p className="text-lg md:text-2xl mb-8 text-shadow text-center animate-pulse">
        Explore the amazing content and features.
      </p>
      <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition">
        Get Started
      </button>
    </div>
  );
}
