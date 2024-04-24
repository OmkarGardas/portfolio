import React from 'react'
import LinkedInImage from '../assets/linkedin.png'
import GithubImage from '../assets/github2.png'
import instaImg from '../assets/instagram.png'
import twitterImg from '../assets/twitter.png'
const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
      className='hover:opacity-50 transition duration-500'
      href='https://www.linkedin.com/in/omkar-gardas-099809217/'
      target='_blank'
      rel='noreferrer'
      >
        <img alt="linkedin" src={LinkedInImage}/>
      </a>
      <a
      className='hover:opacity-50 transition duration-500'
      href='https://github.com/OmkarGardas'
      target='_blank'
      rel='noreferrer'
      >
        <img alt="github" src={GithubImage}/>
      </a>
      <a
      className='hover:opacity-50 transition duration-500'
      href='https://www.instagram.com/jayeshgardas/'
      target='_blank'
      rel='noreferrer'
      >
        <img alt="instagram" src={instaImg}/>
      </a>
      <a
      className='hover:opacity-50 transition duration-500'
      href='https://twitter.com/gardas_jayesh'
      target='_blank'
      rel='noreferrer'
      >
        <img alt="twitter" src={twitterImg}/>
      </a>
    </div>
  )
}

export default SocialMediaIcons
