import React from 'react'
import styled from 'styled-components'
import { PageHero, Services } from '../components'
import aboutImg from '../assets/hero-bcg.jpg'


const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt="about image" />
        <article>
          <div className="title">
            <h2>our story</h2>
            <div className="underline"></div>
          </div>
          <p>
            HomeFurni, a renowned name with a 30-year legacy, is your ultimate destination for furniture that blends craftsmanship, innovation, and elegance. Offering a wide range of furniture styles, from modern minimalism to rustic charm and traditional opulence, HomeFurni caters to diverse tastes and preferences. Crafted by skilled artisans, each piece embodies quality and durability, utilizing sustainable materials and eco-friendly practices.
          </p>
        </article>


      </Wrapper>

      <Services />
    </main>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
