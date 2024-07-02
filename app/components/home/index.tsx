"use client";

import './style.scss';

export function Home() {
  return (
    <div className='home'>

      <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 text-center">
      <h2>Home </h2>   
        <div className="p-6">
          <p className="mb-2 text-base text-neutral-500 dark:text-neutral-300">
            Certainly! Here’s a sample text for a home page: Welcome to UpWork
            Project Hub Your Gateway to Exceptional Freelance Talent At UpWork
            Project Hub, we connect innovative businesses with top-tier
            freelance professionals from around the world. Whether you're a
            startup looking for fresh ideas or an established company seeking
            specialized skills, our platform is designed to help you find the
            perfect match for your project needs.
          </p>
        </div>
      </div>

      <h2>
        The Time is `{" "}
        {new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds()}{" "}
      </h2>
    </div>
  );
}
