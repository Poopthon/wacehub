"use client";

import React from "react";
import { Card, CardHeader } from "@nextui-org/react";
import { FaYoutube, FaDatabase, FaBook } from "react-icons/fa";
import { FaBookSkull } from "react-icons/fa6";

const features = [
  {
    title: "Vault of the Wace",
    description: "A collection of free tests and exams for all Wace subjects.",
    icon: <FaBookSkull size={60} />,
    link: "https://www.vaultofthewace.xyz/",
  },
  {
    title: "Our YouTube Channel",
    description: "Exam walkthroughs and tutorials for core subjects.",
    icon: <FaYoutube size={60} className="text-red-500" />,
    link: "https://www.youtube.com/channel/UCwt78lxMRd5q1rLpKeZwCTQ",
  },
  {
    title: "Anna's Archive",
    description: "The largest truly open library in human history.",
    icon: <FaBook size={60} />,
    link: "https://annas-archive.org/",
  },
  {
    title: "Wace Database",
    description:
      "A collection of past exams and questions arranged by topic and many other dividers.",
    icon: <FaDatabase size={60} />,
    link: "https://grimreaper2654.github.io/WACE-Database/",
  },
];

const handlePress = (link: string) => {
  window.open(link);
};

export default function Features() {
  return (
    <section id='features' className='scroll-mt-28 mb-28 px-4'>
      <h1 className='text-4xl text-center font-montserrat font-bold text-gray-800 mb-10'>
        Resources
      </h1>

      <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6'>
        {features.map((feature, index) => (
          <Card
            key={index}
            isPressable
            onPress={() => handlePress(feature.link)}
            className='bg-white rounded-lg p-5 flex flex-col items-center shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg'
          >
            <CardHeader className='pb-0 pt-2 px-4 flex-col items-center text-center'>
              {feature.icon}
              <p className='text-lg text-center items-center font-bold mt-4 text-gray-900'>
                {feature.title}
              </p>{' '}
              <small className='text-gray-400'>{feature.description}</small>{' '}
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}
