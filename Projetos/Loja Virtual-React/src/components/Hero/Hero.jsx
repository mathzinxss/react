import React from 'react'
import Image1 from "../../assets/hero/women.png"
import Image2 from "../../assets/hero/shopping.png"
import Image3 from "../../assets/hero/sale.png"
import Slider from "react-slick"

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "50% de desconto em qualquer roupa masculina",
        description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        img: Image2,
        title: "30% de desconto em roupas femininas",
        description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        img: Image3,
        title: "70% de desconto em qualquer produto a venda",
        description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    }
]

const Hero = () => {

    var settings = {
        dots: false,
    }

    return (

        <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>
            {/* Padrão de fundo */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
            {/* Sessão Hero */} 
            <div className='container pb-8 sm:pb-0' >
                <Slider>
                    <div>
                        <div className='grid grip-cols-1 sm:grid-cols-2'>
                            {/* Sessão de conteúdo de texto */}
                            <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                <h1 className='text-5xl sm:text-6xl lg:text-7xl font-bold'>Lorem ipsum dolor sit.</h1>
                                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, dicta. Nulla, repellendus modi asperiores voluptatum nobis dolore quae! Nesciunt doloremque laudantium dolorum voluptate sunt? Atque tenetur placeat quos hic repellat?</p>
                                <div>
                                    <button 
                                        className='bg-gradient-to-r from-emerald-500 to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'> Compre Agora </button>
                                </div>
                            </div>
                            {/* Seção de imagem */}
                            <div className='order-1 sm:order-2'>
                                <div 
                                    data-aos = "zoom-in"
                                    data-aos-once="true"
                                    className='relative z-10' >
                                    <img 
                                        src={data.img} 
                                        alt=""
                                        className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto' />
                                </div>
                            </div>
                        </div>
                    </div>  
                    
                </Slider>
            </div>
        </div>

    )

}


export default Hero
