import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className='bg-blue-500 py-24 text-center'>
        <h1 className="text-5xl text-white font-bold">Welcome to Bever </h1>
        <h6 className="text-xl text-white mt-3">
          Web-Application For Complaint And Intelligent Problem Management In Organization
        </h6>
        <button className='shadow border text-white font-bold 
        hover:bg-blue-400 rounded-full mt-6 px-6 py-2'>Get Started</button>
      </div>

      <div className=" container mx-auto">

        <div className="my-20 text-center">
          <p className="text-3xl text-black font-medium">At User Feature</p>

          <div className="mt-10 grid grid-cols-3 gap-5">
            <div>
              <Image className='mx-auto' width={120} height={120} src='https://www.linkpicture.com/q/paperplane_1.svg' alt='send problem' />
              <p className="mt-3 font-semibold">Problem Reporter</p>
              <p className="mt-2 font-light text-slate-900">Send your problem to operator contribute to helping the organization</p>
            </div>
            <div>
              <Image className='mx-auto' width={120} height={120} src='https://www.linkpicture.com/q/tracker_1.svg' alt='tracker' />
              <p className="mt-3 font-semibold">Track Status</p>
              <p className="mt-2 font-light text-slate-900">Recognize and Follow your problem status</p>
            </div>
            <div>
              <Image className='mx-auto' width={120} height={120} src='https://www.linkpicture.com/q/admin_1.svg' alt='tracker' />
              <p className="mt-3 font-semibold">Contact With Operator</p>
              <p className="mt-2 font-light text-slate-900">You can private contact with Operator for fixing problem</p>
            </div>
          </div>
        </div>

        <hr className="mt-10"></hr>

        <div className="my-20 text-center">
          <p className="text-3xl text-black font-medium">How to Get Started With Application?</p>
          <p className="mt-3 font-light text-slate-900">Here sign up to application, Then report your first problem!</p>
          <div className="flex justify-center gap-3">
            <button className='shadow text-white font-bold 
        bg-blue-500 hover:bg-blue-400 rounded-lg mt-6 px-6 py-2'> Sign Up</button>
            <button className='shadow text-white font-bold 
        bg-blue-500 hover:bg-blue-400 rounded-lg mt-6 px-6 py-2' >Report Problem</button>
          </div>
        </div>

        <hr className="mt-10"></hr>

        <div className="my-20 text-center">
          <p className="text-3xl text-black font-medium">Or Continued as Guest?</p>
          <p className="mt-3 font-light text-slate-900">If you come as guest, Let's try as guest account</p>
          <div className="flex justify-center gap-3">
            <button className='shadow text-white font-bold 
        bg-blue-500 hover:bg-blue-400 rounded-lg mt-6 px-6 py-2'>Continued as Guest #1</button>
            <button className='shadow text-white font-bold 
        bg-blue-500 hover:bg-blue-400 rounded-lg mt-6 px-6 py-2'>Continued as Guest #2</button>
            <button className='shadow text-white font-bold 
        bg-blue-500 hover:bg-blue-400 rounded-lg mt-6 px-6 py-2'>Continued as  Guest #3</button>
          </div>
        </div>
      </div>

    </>
  )
}
