'use client'
import { useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Products = (singleItems: any) => {

    return (
        <div className="w-full pt-10 m-auto">
            {singleItems.singleItems.map((item: any, index: number) => (
                <div className="grid grid-cols-4 h-[350px] rounded-xl" key={index}>
                    <div >
                        <p className="title">{item.title}</p>
                        <p className='sub-title'>{item.subtitle}</p>
                    </div>

                    <Carousel
                        className="col-span-3 rounded-xl"
                        autoPlay
                        infinite
                        responsive={responsive}>
                        {item.items.map((product: any, productIndex: number) =>
                        (
                            <div key={productIndex} className='pl-2 pr-2'>
                                <div>
                                    <img className='rounded-b-xl' src={product.publication.media[0].uri} alt="Product" />
                                </div>
                                <div>
                                    <p>{product.publication.title}</p>
                                    <p className='price flex flex-row'>{product.publication.priceInfo["discountRate"] || product.publication.priceInfo["couponDiscountRate"] ? <span style={{ color: "red" }} className='text-bold'>{product.publication.priceInfo["discountRate"] || product.publication.priceInfo["couponDiscountRate"]}</span> : <p></p>}<p className='tprice'>{product.publication.priceInfo["discountPrice"] || product.publication.priceInfo["price"]}</p></p>

                                    <div className='flex flex-row'>
                                        <img src='	https://www.testvalley.kr/star/star-darkgray.svg' />{product.publication.rating}

                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            ))}
        </div>
    );
}

export default Products;