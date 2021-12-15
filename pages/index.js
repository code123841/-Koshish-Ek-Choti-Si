import Head from 'next/head'

export default function Home(){
  return(
    <body className="bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* navabr part */}
  <nav className="flex justify-center space-x-4 sticky top-0">
  <a href="/dashboard" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Home</a>
  <a href="/team" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Our work</a>
  <a href="/projects" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">About us</a>
  <a href="/reports" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Scholarships</a>
  <a href="/reports" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Positivity</a>

</nav>
    
    <div>
    <h1 className=" justify-start text-center text-xl  pt-10 font-sans text-white ">Welcome to <span className="text-red-500 italic before:block before:absolute before:-inset-1 before:-skew-y-3  relative inline-block"> KOSHISH EK CHOTI SI </span> < br/> where we beleive in <br />easy access to education for all! </h1>
    </div>

<div className="justify-items-center text-center pt-5">
<button
  className=" justify-items-center rounded-lg px-8 py-2 text-xl bg-red-400 text-blue-100 hover:bg-red-600 duration-300 "
>
  Our works
</button> 
</div>


    </body>
    
  )
}