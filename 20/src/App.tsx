import arrowDown from './assets/arrow-down.svg'

import img1 from './assets/img-here.png'
import img2 from './assets/img-here-1.png'
import img3 from './assets/img-here-2.png'
import img4 from './assets/img-here-3.png'
import img5 from './assets/img-here-4.png'
import img6 from './assets/img-here-5.png'
import img7 from './assets/img-here-6.png'
import img8 from './assets/img-here-7.png'

import './App.css'

const images = [
  { id: 1, src: img1, name: "Cosmic Chaos" },
  { id: 2, src: img2, name: "Electric Dreams" },
  { id: 3, src: img3, name: "Neon Nights" },
  { id: 4, src: img4, name: "Chromatic Symphony" },
  { id: 5, src: img5, name: "Liquid Fire" },
  { id: 6, src: img6, name: "Celestial Symphony" },
  { id: 7, src: img7, name: "Digital Dreamscape" },
  { id: 8, src: img8, name: "Chromatic Dreams" },
]

export function App() {
  return (
    <div className="min-h-screen grid grid-cols-[385px_auto] m-auto px-28 py-36 bg-[url(./assets/bg-noise-effect.png)] bg-repeat bg-zinc-950 text-white">
      <section>
        <div className='fixed w-[385px]'>
          <h1 className="text-5xl leading-snug">The — Abstract Gallery</h1>
          <img className="mt-8" src={arrowDown} alt="Seta apontando para o canto inferior direito." />
        </div>
      </section>
      <section className="gallery">
        {images.map(image => {
          return (
            <div className='relative overflow-hidden hover:ring ring-white transition duration-300 group'>
              <img src={image.src} alt="image" className='w-full h-full hover:scale-110 transition duration-300' />
              <div className='absolute flex items-end bottom-0 left-0 px-4 py-2 w-full h-24 bg-gradient-to-t from-zinc-800 to-transparent group-hover:opacity-100 opacity-0 transition duration-300'>
                <h2 className='text-2xl'>{image.name}</h2>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}
