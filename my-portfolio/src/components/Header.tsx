export default function Header() {
    return (
        <div className="w-screen h-screen bg-[#232323] flex flex-col justify-center items-center text-white content-center">
            <h4 className="text-2xl uppercase mb-5">
                Hey, I'm Mohammad
            </h4>
            <h1 className="text-[160px] font-[Aldrich] uppercase leading-none text-left mx-auto w-[1000px] mb-5 drop-shadow-[0_0_10px_#fff] bg-gradient-to-r from-white from-10% to-transparent to-97% bg-clip-text text-transparent">
                Frontend Developer
            </h1>
            <p className="text-center text-[20px] w-[1000px]">
                Mohammad Khorshidi, a front-end developer skilled in React, Tailwind, Node.js, and modern web technologies like JavaScript, TypeScript, and Redux. I build sleek, responsive web experiences with clean, scalable code.
            </p>
        </div>
    )
}
