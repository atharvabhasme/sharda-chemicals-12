import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Products.css";

const products = [
  {
    id: 1,
    title: "1. Hardener for Paver & Block",
    images: [
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475309/products/eub6prnzhgtuob8szlcx.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740489514/products/google%20products/yjtzchdfqdfg4icqxzw7.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740489512/products/google%20products/hupquiko2qb65gxslzal.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475306/products/vwaioulv1991xlbgdi4a.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740489507/products/google%20products/r4kozbyhibi6fabbsfsj.jpg",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475300/products/wt036kvmerff3d22knsc.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740489505/products/google%20products/qoa3rudmobizotlguvo4.webp",
    ],
    details: [
      "Greed M-70 to M-80.",
      "It takes 7 to 8 hours for setting after filling mold.",
      "Expires in 2 years from manufacturing.",
    ],
  },
  {
    id: 2,
    title: "2. Hardener for RCC Pipes, Fencing Poles & RCC Electricity Poles",
    images: [
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475319/products/qedkpatbmvavt2exahzd.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475312/products/tcdhvq6hejqx4c6cczql.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475322/products/yly6lsmumeemjqw541mf.webp",
    ],
    details: [],
  },
  {
    id: 3,
    title: "3. Hardener for Crub Stone, MileStone & Road Divider",
    images: [
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475319/products/lqbkkfrepcki3ycrlktf.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475322/products/stone2.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475321/products/ly6xeoxuhdgx2rwuouth.webp",
    ],
    details: [],
  },
  {
    id: 4,
    title: "4. Surface Coating (Lacquer)",
    images: [
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475294/products/dyi29nggwz8lus08gjpe.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475293/products/mtfbifitvlbdoehkenkb.webp",
    ],
    details: ["In 1 liter, it covers 100-120 sq. feet area.", "Expires in 6 months from manufacturing."],
  },
  {
    id: 5,
    title:
      "5. PC-Base Melamine hardener for paver block, rcc pipes, fencing poles, rcc electricity poles, concrete floor and cement rodes",
    images: [
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475307/products/idim7a0h8xvxolf5tnqe.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475303/products/ykntpqmxqmst7haypx4i.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475322/products/hvuhkzwtuz3ajqq59usk.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475301/products/at5wbldc7zrdjscfv3fu.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475308/products/ybdfqsyxsfvn9zdcetxk.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475307/products/nxls90ksgdvaxsuwjnwo.webp",
    ],
    details: [],
  },
  {
    id: 6,
    title: "6. Mold Release Agent",
    images: [
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475292/products/vrincbbv7qodloxouhh9.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475292/products/qr4ktdtwc4vaok5o88xf.webp",
    ],
    details: [
      "In 1 liter of Mold release agent, 4 liters of water should be added.",
      "Prevents concrete from sticking to molds.",
      "The coating and the mold release agent have the latest technology.",
    ],
  },
  {
    id: 7,
    title: "7. Colour-Oxide",
    images: [
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475294/products/bk6to6et08mizvrihogg.webp",
      "https://res.cloudinary.com/de2lex5zv/image/upload/v1740475293/products/v8qgz2b8gbnw12jb4m86.webp",
    ],
    details: ["Red - 25 KG Packing.", "Yellow - 25 KG Packing.", "Black - 25 KG Packing."],
  },
];

const Products = () => {
  const sliders = useRef([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: false,
    centerMode: false,
    variableWidth: false,
    arrows: false,
  };

  return (
    <section className={`products-container ${animate ? "animate" : ""}`}>
      <h2 className="products-heading">Our Products</h2>
      {products.map((product, index) => (
        <div key={product.id} className={`product-box ${animate ? "slide-up" : ""}`}>
          <div className="product-content-wrapper">
            <div className="product-img">
              {product.images.length > 1 ? (
                <Slider {...sliderSettings} ref={(el) => (sliders.current[index] = el)}>
                  {product.images.map((img, i) => (
                    <div key={i} className="slider-image">
                      <img src={img} alt={`Slide ${i + 1}`} />
                    </div>
                  ))}
                </Slider>
              ) : (
                <div className="single-image">
                  <img src={product.images[0]} alt={product.title} />
                </div>
              )}
            </div>
            <div className="product-content">
              <h3 className="product-title">{product.title}</h3>
              <ul>
                {product.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
