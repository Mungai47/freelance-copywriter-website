import Image from "next/image"
import { FaLongArrowAltRight } from 'react-icons/fa'

export default function Home() {
  return (
    <main>
      <div className="bg-whitesmoke text-black">
        <div className="w-4/5 mx-auto grid grid-rows-2 lg:grid-rows-1 grid-cols-1 lg:grid-cols-2 lg:h-screen">
          <div className="flex flex-col justify-center">
            <h1 className='text-4xl font-bold md:text-6xl lg:text-7xl lg:font-extrabold py-4'>
              Hello I'm Leah.<br/>
              A Freelance Copywriter.
            </h1>
            <p className='text-base font-medium py-4'>
              Molestie fringilla in id velit ullamcorper enim in diam nulla 
              felis lorem ut nec et nibh nam aliquam sed mauris sed orci.
            </p>
            <div className='flex gap-3 items-center text-lg font-semibold pt-10'>
              <button className="bg-black text-white px-8 py-2 rounded-lg hover:bg-cyan-green hover:text-white">Lets Talk</button>
              <button className="bg-whitesmoke text-black px-8 py-2 rounded-lg hover:text-cyan-green flex items-center gap-2">Learn More <FaLongArrowAltRight/></button>
            </div>
          </div>
          <div className='flex justify-center'>
            <Image
              src="/images/image1.png"
              alt="Image of Leah"
              width={1000}
              height={700}
              className="hidden lg:block "
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto"
              }} />
            <Image
              src="/images/image1.png"
              alt="Profile Image of Leah"
              width={400}
              height={300}
              className="rounded-full lg:hidden py-0"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div> 
      </div>
      <div className="bg-cyan-green ">
        <div className='py-6 w-4/5 mx-auto'>
          <p className="text-white text-xl font-semibold text-center py-4">Some of the Amaizing Clients I have Worked With</p>
          <div className="grid grid-flow-col">
            <Image
              src="/images/logo1.png"
              alt="Logo1"
              width={200}
              height={200}
              className="py-4"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <Image
              src="/images/logo2.png"
              alt="Logo2"
              width={200}
              height={200}
              className="py-4"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <Image
              src="/images/logo3.png"
              alt="logo3"
              width={200}
              height={200}
              className="py-4"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <Image
              src="/images/logo4.png"
              alt="Logo4"
              width={200}
              height={200}
              className="py-4"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
            <Image
              src="/images/logo5.png"
              alt="Logo4"
              width={200}
              height={200}
              className="py-4"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
        </div>
      </div>
      <div className="bg-whitesmoke text-black">
        <div className='w-4/5 mx-auto'>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-4">
            <div>
              <p className='text-cyan-green py-2 text-lg font-medium'>Services</p>
              <h3 className="py-2 text-3xl font-semibold">I write copy to help put out your message to potential customers.</h3>
            </div>
            <div className="flex items-center">
              <p className="text-base font-medium">Et auctor ac sed tincidunt vel, non fames blandit quisque viverra faucibus nec ac eu aenean mattis quis eget mauris ultrices pharetra ultrices amet.</p>
            </div>
          </div>
          <div className="grid grid-rows-3 md:grid-rows-2 lg:grid-rows-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
              <div class="md:flex">
                <div class="p-8">
                  <div class="uppercase tracking-wide text-xl text-black font-bold">Blogging/SEO</div>
                  <p class="block mt-1 text-base leading-tight font-medium text-[#5b5b5b]">
                    Et auctor ac sed tincidunt vel, non fames blandit quisque viverra faucibus nec ac eu aenean mattis quis eget mauris ultrices pharetra ultrices amet.
                  </p>
                  <button class="mt-4 bg-black text-white font-bold py-2 px-4 rounded flex gap-2 items-center hover:bg-cyan-green">Read more {<FaLongArrowAltRight/>} </button>
                </div>
              </div>
            </div>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
              <div class="md:flex">
                <div class="p-8">
                  <div class="uppercase tracking-wide text-xl text-black font-bold">Marketing Campaign</div>
                  <p class="block mt-1 text-base leading-tight font-medium text-[#5b5b5b]">
                    Et auctor ac sed tincidunt vel, non fames blandit quisque viverra faucibus nec ac eu aenean mattis quis eget mauris ultrices pharetra ultrices amet.
                  </p>
                  <button class="mt-4 bg-black text-white font-bold py-2 px-4 rounded flex gap-2 items-center hover:bg-cyan-green">Read more {<FaLongArrowAltRight/>} </button>
                </div>
              </div>
            </div>
            <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
              <div class="md:flex">
                <div class="p-8">
                  <div class="uppercase tracking-wide text-xl text-black font-bold">Web Content</div>
                  <p class="block mt-1 text-base leading-tight font-medium text-[#5b5b5b]">
                    Et auctor ac sed tincidunt vel, non fames blandit quisque viverra faucibus nec ac eu aenean mattis quis eget mauris ultrices pharetra ultrices amet.
                  </p>
                  <button class="mt-4 bg-black text-white font-bold py-2 px-4 rounded flex gap-2 items-center hover:bg-cyan-green">Read more {<FaLongArrowAltRight/>} </button>
                </div>
              </div>
            </div>            
          </div>
          <div className="md:flex items-center gap-4">
            <div className="text-black py-4">
              <h3 className="text-2xl font-semibold">Johnathan Fox</h3>  
              <h4 className="text-xl font-light text-[#5b5b5b]">Founder of Badak</h4>
              <p className="text-lg md:text-2xl lg:text-3xl font-semibold">“Molestie vivamus at sed massa at purus scelerisque egestas quis non augue hac massa rhoncus, nec nunc consequat cras diam tristique rhoncus et vitae.”</p>
            </div>
            <div className="flex justify-center">
              <Image 
                src="/images/image3.jpg" 
                alt="Johnathan's profile picture" 
                width={400}
                height={200}
                className="rounded-full md:rounded-xl "
              />
            </div>
          </div>
          <div className="grid grid-rows-2 md:grid-rows-1 grid-cols-1 md:grid-cols-2 gap-4 py-9">
            <div>
              <p className="text-cyan-green font-semibold text-base">About me</p>
              <h3 className="text-black font-bold text-2xl md:text-3xl lg:text-4xl pb-5">I Will Help You Win Pitches with Words & Concept</h3>
              <p className="text-base font-medium text-[#5b5b5b]">Neque felis cras nunc magna turpis tincidunt enim facilisi orci sed id est mauris felis parturient accumsan sapien nunc nibh dignissim neque nec, molestie vel magna at et urna vulputate ut etiam in mattis est egestas penatibus vitae maecenas interdum sed arcu donec risus vestibulum aliquet auctor quam.</p>
            </div>
            <div className="flex md:items-end py-3">
              <p className="text-base font-medium text-[#5b5b5b]">Neque felis cras nunc magna turpis tincidunt enim facilisi orci sed id est mauris felis parturient accumsan sapien nunc nibh dignissim neque nec, molestie vel magna at et urna vulputate ut etiam in mattis est egestas penatibus vitae maecenas interdum sed arcu donec risus vestibulum aliquet auctor quam.</p>
            </div>
          </div>
          <div className="md:flex items-center gap-4">
            <div className="flex justify-center">
              <Image 
                src="/images/image2.jpg"
                alt="Client Image"
                width={400}
                height={200}
                className="rounded-lg"
              />
            </div>
            <div className="text-black py-4">
              <h3 className="text-2xl font-semibold">Annie Maria</h3>  
              <h4 className="text-xl font-light text-[#5b5b5b]">Lead Director of Candy & Co.</h4>
              <p className="text-lg md:text-2xl lg:text-3xl font-semibold">“Molestie vivamus at sed massa at purus scelerisque egestas quis non augue hac massa rhoncus, nec nunc consequat cras diam tristique rhoncus et vitae.”</p>
            </div>
          </div>
        </div>
      </div>       
    </main>
  );
}
