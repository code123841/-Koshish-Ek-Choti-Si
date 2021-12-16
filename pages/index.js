import Head from 'next/head'
import Image from 'next/image'
import img from '../public/womanSvg.svg'
export default function Home(){
  return(
    <body className="">
      {/* navabr part */}
  <nav className="flex justify-center space-x-4 sticky top-0">
  <a href="/dashboard" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Home</a>
  <a href="/team" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Our work</a>
  <a href="/projects" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">About us</a>
  <a href="/reports" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Scholarships</a>
  <a href="/reports" className="font-bold px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 hover:text-gray-900">Positivity</a>

</nav>
    
    <div className="text-center">
    <h1 className="  text-xl  pt-10 font-sans ">Welcome to <span className="text-red-500 italic before:block before:absolute before:-inset-1 before:-skew-y-3  relative inline-block"> KOSHISH EK CHOTI SI </span> < br/> where we beleive in <br />easy access to education for all! </h1>
    </div>

<div className="justify-items-center text-center pt-5">
<button
  className=" justify-items-center rounded-lg px-8 py-2 text-xl bg-red-400 text-blue-100 hover:bg-red-600 duration-300 "
>
  Our works
</button> 
</div>

<div className="pt-10 mt-[200px] pl-2 scroll-smooth ">
   
<h3 className="text-center md:text-center sm:text-right pr-5 text-lg font-semibold">We're Exited to help You!</h3>
<p className='text-center md:text-center sm:text-right text-gray-400 pr-5'>
We help 10 students every year and we have have helped 70+ students <br />
for their education till now. If you need help with college fees, opportunities, or further <br />
 education please feel free to email us at : koshishekchotisi@gmail.com


</p>
<div className='flex justify-center'>
<Image
        src={img}
        alt="Picture of the author"
        className=""
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />

</div>

<div className="">
  <h2 className="font-sans text-center mt-[200px] text-[30px] ">What We Do?</h2>


  {/* What we do section */}
  <div className="grid grid-cols-2 gap-5">
    {/* content one */}
    <div className=" pt-[10px]">

      <p className='pt-8 pl-[200px] font-serif sm: text-left  '>
      At Koshish Ek Choti Si, we believe <br />
      that everyone has the right to < br/>
      good quality education. In order to< br/>
      further promote the belief and encourage < br/>
      everyone to pursue their dreams through education <br />
      we provide funding to underprivileged kids. We provide scholarships < br />
      to student/s from low-income families in order <br />
       to further promote these kids' dreams and aspirations. ​
      </p>
   
    </div>

    <div className='grid justify-items-end pr-10 pt-8 pr-[300px] '>
      <h3 className='text-lg font-bold text-center pr-[200px]'>Our mission</h3>
      <p>
      Our mission is to reach out to those extremely
       <br /> deserving students in India who are unable to afford 
      <br /> education. In the Universal Declaration of Human< br/> Rights, adopted in 1948, Article 26 states:< br/>
       'Everyone has the right to education'; < br />
       our mission is to ensure that money does not get < br/>
        in the way of these students ability to practice this human right.
      </p>

    </div>

   

  </div>

</div>

<div className=" ">
      <h2 className="flex justify-center text-[40px] pt-10">Support Our Mission</h2>
      <h2 className="flex justify-center text-red-800 pt-5 font-semibold">ready?</h2>

    </div>


</div>




    </body>
    
  )
}