import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { useI18next } from 'gatsby-plugin-react-i18next'

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
              en
              jp
              vn
            }
            country {
              en
              jp
              vn
            }
            streetName {
              en
              jp
              vn
            }
            streetNo {
              en
              jp
              vn
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
          <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.facebook}><img src="/icons/fb.svg"/></a>
          <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.instagram}><img src="/icons/ig.svg"/></a>
          <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.youtube}><img src="/icons/youtube.svg"/></a>
          <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.spotify}><img src="/icons/spotify.svg"/></a>
        </div>
      </div>
      <div className="relative flex-1 flex flex-wrap sm:space-x-8 2xl:space-x-16 justify-between xl:justify-start xl:px-4">
        <div className="w-1/2 sm:w-auto">
          <p className="font-light text-xs">{data?.aboutTab?.address?.city?.[language]}</p>
          <p className="font-light text-xs">{data?.aboutTab?.address?.country?.[language]}</p>
        </div>
        <div className="w-1/2 pl-4 sm:pl-0 sm:w-auto">
          <p className="font-light text-xs">{data?.aboutTab?.address?.streetNo?.[language]}</p>
          <p className="font-light text-xs">{data?.aboutTab?.address?.streetName?.[language]}</p>
        </div>
        <div className="w-full sm:w-auto flex sm:flex-col mt-4 sm:mt-0 space-x-8 sm:space-x-0">
          <p className="font-light text-xs w-1/2 sm:w-auto">
            <span className="font-medium md:hidden mr-2 text-gray-400">T</span>
            {data?.aboutTab?.phoneNum}
          </p>
          <p className="font-light text-xs md:hidden w-1/2 sm:w-auto">
            <span className="font-medium md:hidden mr-2 text-gray-400">E</span>
            {data?.aboutTab?.email}
          </p>
        </div>
        <div className="hidden md:block">
          <p className="font-light text-xs">{data?.aboutTab?.email}</p>
        </div>
        <div className="hidden xl:flex flex-1 justify-end space-x-2">
          <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.facebook}><img src="/icons/fb.svg"/></a>
          <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.instagram}><img src="/icons/ig.svg"/></a>
          <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.youtube}><img src="/icons/youtube.svg"/></a>
          <a target="_blank" rel="noreferrer" href={data?.aboutTab?.social?.spotify}><img src="/icons/spotify.svg"/></a>
        </div>
      </div>
    </footer>
  )
}

export default Footer