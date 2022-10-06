import React from "react";
import '../styles/Products.css'
import img1 from "../assets/phone6.png";
import img2 from "../assets/phone7.png";
import img3 from "../assets/phone8.png";
import img4 from "../assets/phone9.png";

const products = [
  {
    id: 1,
    img: img1,
    title: "MacBook Pro 13",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
    price: "$ 1,200.00 USD",
  },
  {
    id: 2,
    img: img2,
    title: "Smart Galaxy Watch 3",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    price: "$ 199.00 USD",
  },
  {
    id: 3,
    img: img3,
    title: "MacBook Air M1",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    price: "$ 1,009.00 USD",
  },
  {
    id: 4,
    img: img4,
    title: "iPad",
    desc: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    price: "$ 610.00 USD",
  },
];

function Products() {
  return (
    <>
      <div className="products-container">
        <div className="products-content">
            <h2 data-aos="fade-up">Save on our most selled items.</h2>
            <p data-aos="fade-down">Our new Limited Edition Winter Design BESPOKE 4-Door Flex™</p>
        </div>
        <div className="boxs">
            {
                products.map((item) => {
                    return(
                        <div className="box" key={item.id} data-aos="flip-left">
                            <div className="box-img"><img src={item.img} alt={item.title} /></div>
                            <h5>{item.title}</h5>
                            <p>{item.desc}</p>
                            <h6>{item.price}</h6>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </>
  );
}

export default Products;
