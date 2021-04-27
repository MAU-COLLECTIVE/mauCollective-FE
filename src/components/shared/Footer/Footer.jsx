import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'
import Social from 'components/shared/SocialIcon'

const Footer = () => {
  const { sanityAbout: data }  = useStaticQuery(graphql`
    query GetAbout {
      sanityAbout {
        name
        aboutTab {
          email
          phoneNum
          social {
            facebook
            instagram
            spotify
            youtube
          }
          address {
            city {
              lang {
                en
                jp
                vn
              }
            }
            country {
              lang {
                en
                jp
                vn
              }
            }
            streetName {
              lang {
                en
                jp
                vn
              }
            }
            streetNo {
              lang {
                en
                jp
                vn
              }
            }
          }
        }
      }
    }
  `);
  const { language } = useI18next();

  return (
    <footer className="px-4 lg:px-12 py-12 flex flex-col space-y-4 xl:space-y-0 xl:flex-row">
      <div className="xl:w-1/3 flex justify-between xl:justify-start">
        <h1 className="font-light text-xs">{data?.name}</h1>
        <div className="flex justify-end space-x-2 xl:hidden">
          <Social url={data?.aboutTab?.social?.facebook} src="/icons/fb.svg" />
          <Social url={data?.aboutTab?.social?.instagram} src="/icons/ig.svg" />
          <Social url={data?.aboutTab?.social?.youtube} src="/icons/youtube.svg" />
          <Social url={data?.aboutTab?.social?.spotify} src="/icons/spotify.svg" />
        </div>
      </div>
      <div className="relative flex-1 flex flex-wrap sm:space-x-8 2xl:space-x-16 justify-between xl:justify-start xl:px-4">
        <div className="w-1/2 sm:w-auto">
          <p className="font-light text-xs">{data?.aboutTab?.address?.city?.lang?.[language]}</p>
          <p className="font-light text-xs">{data?.aboutTab?.address?.country?.lang?.[language]}</p>
        </div>
        <div className="w-1/2 pl-4 sm:pl-0 sm:w-auto">
          <p className="font-light text-xs">{data?.aboutTab?.address?.streetNo?.lang?.[language]}</p>
          <p className="font-light text-xs">{data?.aboutTab?.address?.streetName?.lang?.[language]}</p>
        </div>
        <div className="w-full sm:w-auto flex sm:flex-col mt-4 sm:mt-0 space-x-8 sm:space-x-0">
          <p className="font-light text-xs w-1/2 sm:w-auto">
            <span className="font-medium md:hidden mr-2 text-gray-400">T</span>
            <a href={`tel:${data?.aboutTab?.phoneNum}`}>{data?.aboutTab?.phoneNum}</a>
            
          </p>
          <p className="font-light text-xs md:hidden w-1/2 sm:w-auto">
            <span className="font-medium md:hidden mr-2 text-gray-400">E</span>
            <a href={`mailto:${data?.aboutTab?.email}`}>{data?.aboutTab?.email}</a> 
          </p>
        </div>
        <div className="hidden md:flex"> 
          <a className="font-light text-xs" href={`mailto:${data?.aboutTab?.email}`}>{data?.aboutTab?.email}</a>
        </div>
        <div className="hidden xl:flex flex-1 justify-end space-x-2">
          <Social url={data?.aboutTab?.social?.facebook} src="/icons/fb.svg" />
          <Social url={data?.aboutTab?.social?.instagram} src="/icons/ig.svg" />
          <Social url={data?.aboutTab?.social?.youtube} src="/icons/youtube.svg" />
          <Social url={data?.aboutTab?.social?.spotify} src="/icons/spotify.svg" />
        </div>
      </div>
    </footer>
  )
}

export default Footer