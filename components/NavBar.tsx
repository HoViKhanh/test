

export function NavBar() {
    return (
    <nav className="bg-slate-950 p-2 sticky top-0">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-white">
            <a className="font-semibold text-lg">Seminar Nhóm 12 / Lớp NT208</a>
            <a className="font-semibold text-lg bg-white text-black py-2 rounded-md px-8" href="/">Tìm hiểu về NextJS</a>
        </div>
    </nav>
    )
}