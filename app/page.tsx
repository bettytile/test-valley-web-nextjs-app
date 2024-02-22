'use client'
import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Col, Divider, Input, Layout, Row } from "antd";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Products from "./products";

const Home = () => {

  const [featuredProducts, setFeaturedProducts] = useState<any>([]);
  const [smallIcons, setSmallIcons] = useState<any>([]);
  const [singleItems, setSingleItems] = useState<any>([]);
  const [bundelItemtw, setBundelItemtw] = useState<any>([]);
  const [bundelItemth, setBundelItemth] = useState<any>([]);
  const [bundelItemfo, setBundelItemfo] = useState<any>([]);
  const [bundelItemfi, setBundelItemfi] = useState<any>([]);
  const [bundelItemsi, setBundelItemsi] = useState<any>([]);
  const [bundelItemse, setBundelItemse] = useState<any>([]);
  const [bundelItemei, setBundelItemei] = useState<any>([]);
  const [bundelItemni, setBundelItemni] = useState<any>([]);



  const fetchFeatureProducts = async () => {
    try {
      const response = await axios.get('https://api.testvalley.kr/main-banner/all?viewType=Tile');
      setFeaturedProducts(response.data)
    } catch (error) {
      throw error;
    }

  }
  const fetchSmallIcons = async () => {
    try {
      const response = await axios.get('https://api.testvalley.kr/main-shortcut/all');
      setSmallIcons(response.data)
    } catch (error) {
      throw error;
    }

  }
  const fetchProducts = async () => {
    //     API 1) https://api.testvalley.kr/main-banner/all
    // API 2) https://api.testvalley.kr/main-shortcut/all
    // API 3) https://api.testvalley.kr/collections?prearrangedDiscount
    // -> filter the data with type: "SINGLE" and viewType: "TILE"
    try {
      const response = await axios.get('https://api.testvalley.kr/collections?prearrangedDiscount');
      const products = response.data.items.filter((product: any) => product.type === "SINGLE" && product.title === "HOT DEAL");
      setSingleItems(products)
      const product1 = response.data.items.filter((product: any) =>product.title === "저렴한 거격과 보장된 성능, 더함 TV");
      setBundelItemtw(product1)
      const product2 = response.data.items.filter((product: any) => product.title === "판매량 TOP7 가성비 인기가전 모음");
      setBundelItemth(product2)
      const product3 = response.data.items.filter((product: any) =>product.title === "성능보장, PC주변기기 & 스피커 추천");
      setBundelItemfo(product3)
      const product4 = response.data.items.filter((product: any) => product.title === "품절임박! 마지막 수량 한정특가 상품");
      setBundelItemfi(product4)
      const product5 = response.data.items.filter((product: any) => product.title === "게임기기 최저가 & 신작 모음");
      setBundelItemsi(product5)      
      const product6 = response.data.items.filter((product: any) =>  product.title === "New In");
      setBundelItemse(product6)
      const product7 = response.data.items.filter((product: any) => product.title ===  "로지텍 AS보장 정품 마우스/키보드 단독특가");
      setBundelItemei(product7)
     
      const product8 = response.data.items.filter((product: any) => product.title === "맥북 클리어런스 세일!");
      setBundelItemni(product8);
      
    } catch (error) {
      throw error;
    }

  }
  useEffect(() => {
    fetchFeatureProducts();
    fetchSmallIcons();
    fetchProducts();
  }, []);
  return (
    <main className="min-h-screen">
      <div className="z-10 w-full font-mono text-sm lg:flex">
        <header>
          <div className="header-constainer">
            <div className="logo-container">
              <img src="https://www.testvalley.kr/logo/logo-new.svg" />
              <div className="flex flex-row">
                <img src="https://www.testvalley.kr/common/icon-category.svg" alt="" />
                <p className="logo-text">카테고리</p>
              </div>

            </div>
            <Input prefix={<SearchOutlined />} className="search-input" type="search" placeholder="살까말까 고민된다면 검색해보세요!" />

            <div className="search">

              <Button style={{ border: "none" }}>
                <img src="https://www.testvalley.kr/common/home-event.svg" />
              </Button>
              <img src="https://www.testvalley.kr/common/vertical-bar.svg" />
              <Button style={{ border: "none" }}>로그인 / 회원가입</Button>
            </div>
          </div>

        </header>
      </div>
      <Layout>
        <Carousel className="carousel" showThumbs={false} autoPlay infiniteLoop centerMode>
          {featuredProducts.map((product: any) => (
            <div className="pl-5 pr-5" key={product.mainBannerId}>
              <Link href={`/product/${product.slug}`} passHref>
                <div className="flex">
                  <img src={product.pcImageUrl} alt={product.title} />
                </div>
              </Link>
            </div>
          ))}
        </Carousel>

      </Layout>
      <div className="w-3/4 m-auto product-container">

        <div className="small-icons">
          {smallIcons.map((items: any) =>
            <div key={items.mainShortcutId}>
              <img src={items.imageUrl} alt={items.title} />
              <p>{items.title}</p>
            </div>
          )}
        </div>
       <Products singleItems={singleItems}/>
       <Products singleItems={bundelItemtw}/>
       <Products singleItems={bundelItemth}/>
       <Products singleItems={bundelItemfo}/>
       <Products singleItems={bundelItemfi}/>
       <Products singleItems={bundelItemsi}/>
       <Products singleItems={bundelItemse}/>
       <Products singleItems={bundelItemei}/>
       <Products singleItems={bundelItemni}/>
      </div>

    </main>
  );
}
export default Home;
