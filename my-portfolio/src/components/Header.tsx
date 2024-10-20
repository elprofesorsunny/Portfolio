export default function Header() {
  return (
    <div className="flex bg-white dark:bg-black w-screen h-screen flex-col justify-center
    px-10 sm:px-12 md:px-16 lg:px-24 xl:px-28 text-black dark:text-white transition-opacity duration-700">

      <h1 className="text-black dark:text-white
      text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem]
      font-bold mb-4 select-none">

        ALWAYS

      </h1>

      <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-purple-600 relative
      text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem]
      font-bold mb-24 select-none">

        DEVELOPING

        <div className="absolute pt-10 md:pt-20 font-normal md:text-left text-justify">

          <p className="text-black dark:text-white text-lg md:text-2xl pb-2 font-medium">

            Hey There, I'm Mohammad Khorshidi

          </p>
          <p className="text-black dark:text-white text-lg md:text-xl font-base">

            A passionate software engineer focused on building innovative solutions through code. With a strong background in web development and a keen interest in AI, I’m always exploring new technologies and pushing the boundaries of what’s possible. Welcome to my journey!

          </p>
        </div>
      </h1>
    </div>
  );
}
