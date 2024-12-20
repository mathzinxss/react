import React from 'react';
import Img1 from "../../assets/produtos/produto1.jpg";
import Img2 from "../../assets/produtos/produto2.jpg";
import Img3 from "../../assets/produtos/produto3.jpg";
import Img4 from "../../assets/produtos/produto4.jpg";
import { FaStar } from 'react-icons/fa';


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Luminária",
        rating: 5.0,
        color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Quadros",
        rating: 5.0,
        color: "red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Caixas de presentes",
        rating: 4.9,
        color: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Buquês",
        rating: 5.0,
        color: "Yellow",
        aosDelay: "0",
    },
];

const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container mx-auto px-4">
                {/* Seção de cabeçalho */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p className="text-sm text-secondary">
                        Produtos mais vendidos para você
                    </p>
                    <h1 className="text-3xl font-bold">Produtos</h1>
                    <p className="text-xs text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellat earum deserunt quasi! Nam, tenetur exercitationem
                        magnam voluptate libero eum commodi quisquam accusamus
                        consequuntur recusandae facere. Quos dignissimos explicabo
                        quia quasi!
                    </p>
                </div>
                {/* Seção do corpo */}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Seção de cartão */}
                    {ProductsData.map((data) => (
                        <div
                            data-aos="fade-up"
                            data-aos-delay={data.aosDelay}
                            key={data.id}
                            className="flex flex-col items-center text-center"
                        >
                            <img
                                src={data.img}
                                alt={data.title}
                                className="h-[200px] w-[200px] object-cover rounded-md"
                            />
                            <h3 className="font-semibold mt-3">{data.title}</h3>
                            <p className='text-sm text-gray-600'>{data.color}</p>
                            <div className='flex items-center gap-1'>
                                <FaStar className="text-yellow-400"/>
                                <span>{data.rating}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
