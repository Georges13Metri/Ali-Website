import React from "react";
import Image from "next/image";
import Link from "next/link";

const OneToOneCoaching = () => {
  return (
    <div className=" bg-white text-black">
      <h1 className="text-5xl pt-10 font-bold text-center mb-10 ">
        PERSONAL TRAINING
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:w-full mx-auto lg:w-3/4 md:w-full">
        {/* One To One Coaching */}
        <div className="p-4">
          <div className="text-center  mb-5">
            <Image
              src="/one-to-one_orig.png"
              width={500}
              height={200}
              alt="Image"
            />
          </div>
          <h2 className="text-xl font-bold mb-5">ONE TO ONE COACHING</h2>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <p className="text-lg mb-2">FROM £100/MONTH</p>
          <p className="mb-4">
            All plans start with a free consultation followed by an initial one
            month commitment, after which there is the opportunity to make a 3
            or 6 month commitment and save money.
          </p>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <p className="mb-4">
            One to one coaching is ideal for you if you need a more personal
            approach to your training, mindset and nutrition. You&apos;ll work
            with me personally at my private studio to assess your current
            situation and together, we&apos;ll discover fast, safe and effective
            ways to help you solve your health & fitness problems.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="font-bold">Detailed assessments:</span> Analysis
              of movement patterns, identification of pain points, and
              assessment of health & fitness level.
            </li>
            <li>
              <span className="font-bold">Customised exercise programs:</span>{" "}
              Safe and effective workouts tailored to individual needs and
              limitations.
            </li>
            <li>
              <span className="font-bold">Nutritional guidance:</span>{" "}
              Personalised plans based on preferences, goals, and lifestyle.
            </li>
            <li>
              <span className="font-bold">Mindset coaching:</span> Address
              motivation, discipline, and self-doubt to build sustainable
              habits.
            </li>
            <li>
              <span className="font-bold">
                Sleep, Stress Management & Recovery coaching:
              </span>{" "}
              Implement strategies to improve sleep quality, reduce and manage
              stress, improving recovery.
            </li>
            <li>
              <span className="font-bold">Accountability and support:</span>{" "}
              Regular check-ins, progress tracking, and encouragement to stay on
              track.
            </li>
            <li>
              <span className="font-bold">Virtual coaching:</span> Online
              sessions for flexibility and convenience.
            </li>
          </ul>
          <hr className="border-t-2 border-gray-300 mb-4" />

          <div className="flex justify-center">
            <Link href="/contactus">
              <button
                className="bg-transparent hover:bg-gray-300 
              text-black font-serif py-2 px-4 border border-black"
              >
                Start Now
              </button>
            </Link>
          </div>
        </div>

        {/* 2 To 1 Coaching */}
        <div className="p-4">
          <div className="text-center mb-5">
            <Image
              src="/semi-private-training_orig.jpg"
              width={500}
              height={200}
              alt="Image"
            />
          </div>
          <h2 className="text-xl font-bold mb-5">2 TO 1 COACHING</h2>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <p className="text-lg mb-2">FROM £60/MONTH/PERSON</p>
          <p className="mb-4">
            All plans start with a free consultation followed by an initial one
            month commitment, after which there is the opportunity to make a 3
            or 6 month commitment and save money.
          </p>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <p className="mb-4">
            2 to 1 or Couples Coaching is ideal if you like the idea of training
            alongside a partner/friend whilst making savings on one to one
            personal training costs. You&apos;ll exercise alongside your partner
            to accomplish your health and fitness goals at my private studio
            under my supervision and instruction plus you&apos;ll get the
            individualised nutrition, sleep, stress management and mindset
            coaching that you would in my one to one service.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="font-bold">Detailed assessments:</span> Analysis
              of movement patterns, identification of pain points, and
              assessment of health & fitness level.
            </li>
            <li>
              <span className="font-bold">Customised exercise programs:</span>{" "}
              Safe and effective workouts tailored to individual needs and
              limitations.
            </li>
            <li>
              <span className="font-bold">Nutritional guidance:</span>{" "}
              Personalised plans based on preferences, goals, and lifestyle.
            </li>
            <li>
              <span className="font-bold">Mindset coaching:</span> Address
              motivation, discipline, and self-doubt to build sustainable
              habits.
            </li>
            <li>
              <span className="font-bold">
                Sleep, Stress Management & Recovery coaching:
              </span>{" "}
              Implement strategies to improve sleep quality, reduce and manage
              stress, improving recovery.
            </li>
            <li>
              <span className="font-bold">Accountability and support:</span>{" "}
              Regular check-ins, progress tracking, and encouragement to stay on
              track.
            </li>
            <li>
              <span className="font-bold">Virtual coaching:</span> Online
              sessions for flexibility and convenience.
            </li>
          </ul>
          <hr className="border-t-2 border-gray-300 mb-4" />

          <div className="flex justify-center">
            <Link href="/contactus">
              <button
                className="bg-transparent hover:bg-gray-300 
              text-black font-serif py-2 px-4 border border-black"
              >
                Start Now
              </button>
            </Link>
          </div>
        </div>

        {/* Invividualised Online Coaching */}
        <div className="p-4">
          <div className="text-center  mb-5">
            <Image
              src="/online-coaching-new-header_orig.jpg"
              width={500}
              height={200}
              alt="Image"
            />
          </div>
          <h2 className="text-xl font-bold mb-5">
            INDIVIDUALISED ONLINE COACHING
          </h2>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <p className="text-lg mb-2">FROM £80/MONTH</p>
          <p className="mb-4">
            All plans start with a free online consultation followed by an
            initial one month commitment, after which there is the opportunity
            to make a 3 or 6 month commitment and save money.
          </p>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <p className="mb-4">
            Online coaching is ideal if you are motivated and accountable enough
            to train on your own either at your gym or home, but would like
            expert guidance and structure with your exercise and nutrition, plus
            the facility to ask questions and get feedback on all things health
            & fitness related.
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <span className="font-bold">Customised exercise programs:</span>{" "}
              Safe and effective workouts tailored to individual needs and
              limitations.
            </li>
            <li>
              <span className="font-bold">Nutritional guidance:</span>{" "}
              Personalised plans based on preferences, goals, and lifestyle.
            </li>
            <li>
              <span className="font-bold">
                Sleep, Stress Management & Recovery coaching:
              </span>{" "}
              Implement strategies to improve sleep quality, reduce and manage
              stress, improving recovery.
            </li>
            <li>
              <span className="font-bold">Accountability and support:</span>{" "}
              Regular check-ins, progress tracking, and encouragement to stay on
              track.
            </li>
          </ul>
          <hr className="border-t-2 border-gray-300 mb-4" />
          <div className="flex justify-center">
            <Link href="/contactus">
              <button
                className="bg-transparent hover:bg-gray-300 
              text-black font-serif py-2 px-4 border border-black"
              >
                Start Now
              </button>
            </Link>
          </div>
        </div>

        {/* YOUR RESULTS, GUARANTEED */}
      </div>
      <div
        className="bg-gray-200 text-black flex flex-col 
      md:flex-row  items-center justify-center lg:p-20"
      >
        <div className="md:w-1/4 mr-10 mb-4 md:mb-0 flex justify-end">
          <Image src="/money-back.png" width={200} height={200} alt="Image" />
        </div>
        <div className="md:w-3/4 lg:p-5 md:p-5 p-5">
          <h2 className="text-3xl font-serif mb-4">YOUR RESULTS, GUARANTEED</h2>
          <p className="mb-4">
            If you commit and do everything within my coaching program and
            don&apos;t see and feel noticeable results after 12 weeks I will
            refund you your entire investment.
          </p>
          <p className="mb-4">
            No questions asked, we just simply part as friends, not that
            I&apos;ve ever had to give anyone a refund before.
          </p>
          <p>
            That&apos;s how sure I am that this will be the BEST transformation
            you&apos;ve ever experienced before.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OneToOneCoaching;
