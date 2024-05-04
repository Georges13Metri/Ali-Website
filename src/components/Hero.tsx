"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/371796190.jpg")`,
            backgroundSize: "cover",
          }}
        ></div>
        {/* Text content */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 px-8 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
            PERSONAL TRAINING
          </h1>
          <h1 className="text-2xl text-orange-700 font-semibold mb-4">
            IN LEBANON
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-4">
            Premium weight loss and lifestyle transformations which create long
            lasting, dramatic results to your health, body & mind.
          </p>
          {/* Buttons */}
          <div className="flex flex-col lg:flex-row gap-4">
            <Link href="/aboutus">
              <button
                className="bg-orange-700 hover:bg-transparent text-white font-semibold py-2 px-4 transition duration-300 ease-in-out hover:border
             hover:text-orange-700 hover:border-orange-700 border border-orange-700 "
              >
                START HERE
              </button>
            </Link>
            <Link href="/">
              <button className="border border-green-800 hover:bg-gray-300 text-green-800 font-semibold py-2 px-4 transition duration-300 ease-in-out ">
                GET IN TOUCH
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex justify-center bg-white items-center">
        <div className="flex mt-20 flex-col mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            WHY <span className="text-orange-700">ALI PERSONAL TRAINING</span>{" "}
            WILL WORK FOR YOU
          </h2>
          <p className="text-lg mb-4 text-center">
            A tonne of useful advice, guidance and coaching across the 4 keys to
            success that will help you:
          </p>
          <ul className="flex-col justify-center items-center mx-auto">
            <li className="list-none">
              <span className="text-orange-700 font-bold">✓</span> Eat better,
              without dieting or feeling deprived.
            </li>
            <li className="list-none">
              <span className="text-orange-700 font-bold">✓</span> Get active,
              no matter what shape you’re in now.
            </li>
            <li className="list-none">
              <span className="text-orange-700 font-bold">✓</span> Ditch the
              food rules, drop the fad diets and conflicting advice.
            </li>
            <li className="list-none">
              <span className="text-orange-700 font-bold">✓</span> Build fitness
              into your life, without it taking over.
            </li>
            <li className="list-none">
              <span className="text-orange-700 font-bold">✓</span> Achieve, and
              maintain, your goals, even when life gets busy.
            </li>
          </ul>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 w-3/4 mx-auto px-5 py-5">
            <div>
              <Image
                width={100}
                height={50}
                src="/nutrition.png"
                alt="Nutrition"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-center mb-5">
                1. Nutrition
              </h3>
              <div className="border mb-5"></div>
              <p className="text-sm text-center leading-relaxed">
                Learn about and implement nutritional strategies that will
                transform your physique without feeling starved.
              </p>
            </div>
            <div>
              <Image
                width={100}
                height={50}
                src="/exercise.png"
                alt="Exercise"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-center mb-5">
                2. Exercise
              </h3>
              <div className="border mb-5"></div>
              <p className="text-sm text-center leading-relaxed">
                Tailored, structured, time-efficient & progressive exercise
                programme to cater for your requirements and goals.
              </p>
            </div>
            <div>
              <Image
                width={100}
                height={50}
                src="/lifestyle.png"
                alt="Lifestyle"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-center mb-5">
                3. Lifestyle
              </h3>
              <div className="border mb-5"></div>
              <p className="text-sm text-center leading-relaxed">
                Learn about and implement vital lifestyle habits to start
                feeling amazing on the inside and looking great on the outside.
              </p>
            </div>
            <div>
              <Image
                width={100}
                height={50}
                src="/mindset.png"
                alt="Mindset"
                className="mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4 text-center mb-5">
                4. Mindset
              </h3>
              <div className="border mb-5"></div>
              <p className="text-sm text-center leading-relaxed">
                By applying mindset principles to your burning desire of
                achieving your goals - you will become a better version of you.
              </p>
            </div>
          </div>

          <div className="mt-20 relative h-screen">
            <div
              className="absolute inset-0 h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url("/bg-2.jpg")`,
                backgroundSize: "cover",
              }}
            ></div>
            <div className="absolute inset-0 w-full md:w-1/2 mx-auto flex flex-col justify-center items-center text-center md:text-right px-8">
              <h1 className="text-lg md:text-2xl lg:text-2xl font-serif text-white mb-6 md:mb-10">
                ALI PERSONAL TRAINING CREDO
              </h1>
              <p className="text-white text-xs md:text-sm mb-6 md:mb-10">
                <span className="font-bold">I help</span> busy men and women
                overhaul their health & fitness using a combination of tailored
                exercise, nutrition, lifestyle and mindset systems that are
                holistic and sustainable forever{" "}
                <span className="font-bold">so they can..</span>
              </p>
              <ul className="text-white text-xs md:text-sm mb-6 md:mb-10 text-left">
                <li>
                  <span>
                    ✓ Feel confident and attractive around their friends,
                    family, and out in public
                  </span>
                </li>
                <li>
                  <span>
                    ✓ Feel Physically & mentally strong, capable of taking on
                    any challenge without worrying that their energy levels or
                    body weight will get in the way.
                  </span>
                </li>
                <li>
                  <span>✓ Fit into the clothes they want to wear</span>
                </li>
                <li>
                  <span>
                    ✓ Stop worrying about getting diseases and dying young
                  </span>
                </li>
                <li>
                  <span>
                    ✓ Run around with their kids, or grandkids, without feeling
                    pain, winded or tired; and do it again the next day
                  </span>
                </li>
                <li>
                  <span>
                    ✓ Add 10+ years of healthy living to their retirement
                  </span>
                </li>
              </ul>
              <p className="text-white font-bold text-xs md:text-sm mb-5">
                Without having to....
              </p>
              <ul className="text-white text-xs md:text-sm mb-6 md:mb-10 text-left">
                <li>
                  <span>✓ Starve themselves - No diets!</span>
                </li>
                <li>
                  <span>✓ Count calories or weigh foods</span>
                </li>
                <li>
                  <span>✓ Give up the foods they enjoy</span>
                </li>
                <li>
                  <span>✓ Spend hours cooking or exercising</span>
                </li>
                <li>
                  <span>✓ Share a gym with others</span>
                </li>
              </ul>
              <Link href="/aboutus">
                <button
                  className="bg-orange-700 hover:bg-transparent text-white font-semibold py-2 px-4 transition duration-300 ease-in-out hover:border
             hover:text-orange-700 hover:border-orange-700 border border-orange-700 "
                >
                  FIND OUT MORE
                </button>
              </Link>
            </div>
          </div>

          <div
            className="grid bg-white grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 
           p-4 md:p-8  items-center"
          >
            <div className="mx-auto">
              <Image
                width={200}
                height={100}
                src="/clientfree.png"
                alt="freeclient"
              />
            </div>
            <div className="flex flex-col justify-center mt-20">
              <h1 className="text-lg md:text-3xl font-bold mb-4 font-serif">
                A FREE TRANSFORMATION CONSULTATION (£50.00 VALUE)
              </h1>
              <p className="text-sm md:text-base font-serif mb-6 md:mb-8 ">
                Take the first step to success by applying for a FREE
                Transformation Consultation. We will talk about your needs, your
                goals, lifestyle habits, your diet, and establish if we are a
                good fit to work together. I will give you actionable advice on
                how you can successfully progress and achieve more than you
                thought possible. There are limited slots available as I only
                work with a small number of clients at a time, so please
                complete the form in as much detail as you can and I will be in
                touch with you soon.
              </p>
              <Link href="/">
                <button
                  className="mb-20 hover:bg-gray-200 text-orange-700  py-2 px-4 md:px-8 transition duration-300
                 ease-in-out hover:border hover:text-orange-700 hover:border-orange-700 border border-orange-700 text-sm md:text-base"
                >
                  CLAIM OFFER
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/bg-3.jpg")`,
            backgroundSize: "cover",
          }}
        >
          <div
            className="absolute inset-0  flex flex-col items-center 
          mt-10"
          >
            <div
              className="md:w-3/4 mx-auto 
      flex flex-col items-center "
            >
              <h1
                className="text-lg md:text-2xl lg:text-2xl font-serif 
              text-white mb-6 md:mb-5"
              >
                SERVICES
              </h1>
              <p
                className="text-white text-xs md:text-sm mb-6 
              md:mb-10 text-center"
              >
                <span>
                  I offer a comprehensive service which goes above and beyond to
                  get you in the ​best shape of your life and feeling great,
                  <br />
                  whether you &apos; re a complete beginner, or have hit a
                  plateau.​
                </span>
              </p>

              <div
                className="grid grid-cols-1 md:grid-cols-1 
              lg:grid-cols-3 gap-4 "
              >
                {/* Service 1 */}
                <div
                  className="text-white flex flex-col 
                items-center text-center"
                >
                  {/* <Image
                    width={200}
                    height={200}
                    alt="one to one"
                    src="/one-to-one_orig.png"
                  /> */}
                  <h2 className="text-lg mt-2 font-bold mb-2">
                    ONE TO ONE COACHING
                  </h2>
                  <p className="text-sm ">
                    A one to one health and lifestyle overhaul for people who
                    need the extra accountability and guidance to reach their
                    goals.
                  </p>
                  <Link href="/">
                    <button
                      className="bg-orange-700 border  border-orange-700 
                    text-white py-2 px-2 mt-2 
                   hover:bg-transparent hover:border hover:border-orange-700
                   hover:text-orange-700"
                    >
                      LEARN MORE
                    </button>
                  </Link>
                </div>
                {/* Service 2 */}
                <div
                  className="text-white flex flex-col 
                items-center text-center"
                >
                  <h2 className="text-lg font-bold mb-2">NUTRITION COACHING</h2>
                  <p className="text-sm ">
                    Get a handle on your nutrition once and for all with
                    extensive nutrition and habit coaching to ensure you stay on
                    track.
                  </p>
                  <Link href="/">
                    <button
                      className="bg-orange-700 border  border-orange-700 
                    text-white py-2 px-2 mt-2 
                   hover:bg-transparent hover:border hover:border-orange-700
                   hover:text-orange-700"
                    >
                      LEARN MORE
                    </button>
                  </Link>
                </div>
                {/* Service 3 */}
                <div
                  className="text-white flex flex-col 
                items-center text-center"
                >
                  <h2 className="text-lg font-bold mb-2">MINDSET COURSE</h2>
                  <p className="text-sm ">
                    ​Transform your mindset in as little as 5 weeks - Set
                    meaningful goals, change your habits, gain willpower and
                    boost motivation.
                  </p>
                  <Link href="/">
                    <button
                      className="bg-orange-700 border  border-orange-700 
                    text-white py-2 px-2 mt-2 
                   hover:bg-transparent hover:border hover:border-orange-700
                   hover:text-orange-700"
                    >
                      LEARN MORE
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 pt-10 pb-5">
        <div className="container mx-auto">
          <div
            className="mt-10 mb-10 flex 
          justify-center"
          >
            <h3 className="text-4xl border-b-2 font-bold border-black font-serif">
              CONNECT WITH ME
            </h3>
          </div>

          <div
            className="flex flex-col md:flex-row
           justify-center items-center mb-10"
          >
            <div className="mx-4 mb-4 md:mb-0">
              <a
                href="https://www.facebook.com/your-facebook-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={100}
                  height={100}
                  className="cursor-pointer"
                />
              </a>
            </div>
            <div className="mx-4">
              <a
                href="https://www.instagram.com/your-instagram-profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={100}
                  height={100}
                  className="cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex flex-col md:flex-row 
      items-center justify-center md:justify-between
       px-4 py-8 md:py-12 bg-whit mb-10"
      >
        <div className="md:w-1/2 mb-4 md:mb-0 font-serif">
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-4">
            PERSONAL TRAINING IN LANCING
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
            At Ali Personal Training in Lancing I &apos; m so passionate and
            confident about achieving results for my clients that if you commit
            and do everything within my coaching program and don &apos; t see
            and feel noticeable results after 12 weeks I will refund you your
            entire investment.
            <br />
            No questions asked, we just simply part as friends, not that I
            &apos; ve ever had to give anyone a refund before.
            <br /> That &apos; s how sure I am that this will be the BEST
            transformation you &apos; ve ever experienced before.
          </p>
          <div className="text-center md:text-left mt-4">
            <Link href="/">
              <button
                className="bg-transparent text-black
             py-2 px-4  hover:bg-gray-200 border border-black"
              >
                CONTACT ME
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="w-full md:w-2/3 mx-auto">
            <Image
              src="/money-back.png"
              alt="Personal Training"
              width={250}
              height={250}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
