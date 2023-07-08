import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="py-3 px-20 flex sm:justify-between space-x-4 h-20 sticky top-0 bg-blue-500">
      <div className="my-auto flex justify-center space-x-5">
        <h1 className="text-2xl px-3 py-2 text-white font-bold">Bever</h1>
        <div className="my-auto">
          {[
            ['Home', '/'],
            ['Dashboard', '/'],
            ['ReportProblems', '/'],
            ['About Us', '/'],
          ].map(([title, url]) => (

            <Link href={url} className="my-auto mx-2 px-3 py-2 rounded text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</Link>
          ))}
        </div>
      </div>
      <div className="my-auto">
        <h1 className="text-medium px-3 py-2 text-slate-100 font-small hover:text-slate-900">Account</h1>
      </div>
    </nav>
  )
}