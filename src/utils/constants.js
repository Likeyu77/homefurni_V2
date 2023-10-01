import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      "The mission of HomeFurni is to elevate the art of living through furniture. Our aim is to provide our customers with meticulously crafted pieces that embody quality, durability, and timeless design. We strive to cater to diverse tastes and preferences by offering a wide range of furniture styles, from modern minimalism to rustic charm and traditional opulence.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      "Customer satisfaction is at the core of HomeFurni's mission. The friendly and knowledgeable staff provides expert guidance to help you select the perfect pieces for your home. With a commitment to creating comfortable, beautiful, and functional living spaces, HomeFurni ensures your home becomes a sanctuary that reflects your style and personality.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      "HomeFurni has a rich history spanning three decades, marked by a commitment to excellence in furniture craftsmanship. Founded in 1990 by visionary artisans, it began as a small workshop dedicated to creating quality furniture. Over the years, HomeFurni expanded its offerings, embracing innovation in design and materials while staying true to its core values of sustainability and durability.",
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
