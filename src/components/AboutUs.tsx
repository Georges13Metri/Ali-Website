import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div>
      <div
        className="bg-white text-black p-8 md:p-16 
    flex flex-col items-center justify-center"
      >
        <div
          className="rounded-full border-2 border-black
       overflow-hidden mb-4"
        >
          <Image
            src="/path/to/your/image.jpg"
            alt="Aly Jomaa"
            width={200}
            height={200}
            className="rounded-full"
          />
        </div>
        <div className="text-black md:w-3/4 text-center">
          <h1 className="text-2xl font-bold mb-10">
            ALY JOMAA, PERSONAL TRAINER & PRECISION NUTRITION PRO
          </h1>
          <h2 className="text-lg font-semibold mb-10">
            MY 8 STEP SUCCESS SYSTEM
          </h2>
          <p className="mb-4">
            Becoming a Personal Trainer was an obvious and natural choice for me
            as I am passionate about healthy living and sharing my expertise and
            knowledge with people.
          </p>
          <p className="mb-4">
            I worked for a number of corporate gyms as well as at an
            award-winning world top 100 hotel at the start of my career but I
            felt that I could give more value to my clients which went beyond
            the little time they spent at the gym.
          </p>
          <p className="mb-4">
            As one of the youngest trainers to become freelance, I&apos;ve been
            coaching busy, everyday people in healthy lifestyle living since
            2012.
          </p>
          <p className="mb-4">
            My training ethos is to encourage, inspire, educate and support
            clients to achieve the best version of themselves, in a progressive,
            enjoyable, safe and effective manner.
          </p>
          <p className="mb-4">
            I specialize in weight management & racket sports conditioning.
          </p>
        </div>
      </div>

      {/* Step 1 */}
      <div
        className="relative h-screen flex 
      justify-center items-center"
      >
        <div
          className="absolute inset-0 h-full 
          bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("/bg-aboutus-1.jpg")`,
            backgroundSize: "cover",
          }}
        ></div>
        <div
          className=" flex flex-col md:flex-row 
          items-center absolute w-full "
        >
          <div
            className=" w-1/2 h-full
            flex justify-end 
         pr-5"
          >
            <Image
              width={300}
              height={300}
              alt="free consultation"
              src="/onlinetalk.png"
            />
          </div>
          <div
            className="lg:w-full w-2/3 text-white
            flex flex-col "
          >
            <h3 className="text-5xl font-serif mt-4 mb-4">STEP 1 :</h3>
            <h4 className="text-xl font-serif mb-4">FREE CONSULTATION</h4>
            <p className="mb-4 lg:w-2/3 mg:w-2/3 w-full">
              Before starting your fitness journey we will book a 60-minute
              consultation, either over the phone or at my private studio, where
              we will get an opportunity to talk about your needs, your goals,
              lifestyle habits, and your diet and for us to establish if we are
              a good fit to work together. I will prescribe the best path
              forward for you to progress and achieve more than you thought
              possible.
            </p>
          </div>
        </div>
      </div>

      {/* Step 2 */}
      <div
        className="flex flex-wrap justify-center
       items-center md:flex-row sm:flex-col bg-white p-8"
      >
        <div
          className="md:w-1/2 sm:w-full md:pr-8
        sm:pr-0 md:mb-0 sm:mb-8 flex justify-end"
        >
          <Image src="/step2.png" alt="Your Image" width={300} height={300} />
        </div>
        <div className="md:w-1/2 sm:w-full text-black">
          <h2 className="text-5xl font-serif mb-5">STEP 2 :</h2>
          <span className="text-xl font-serif ">
            HEALTH ASSESSMENT & FITNESS TESTING
          </span>
          <p className="mb-4 mt-5">
            Before you can start a training and nutritional plan, or at least
            one that&apos;s actually going to be effective, I will carry out a
            number of tests to establish your current state of health and
            fitness. You see there isn&apos;t a blueprint for weight management.
            How you need to train and what you need to eat is different for
            everyone, even if the goal is the same. It&apos;s going to depend on
            your age, gender, somatotype (body type) and lifestyle. So...how can
            someone possibly give you a bespoke nutritional and exercise
            programme (not a useless general plan) if they don&apos;t know
            anything about your body? How can you track the effects of your
            training and diet if you don&apos;t have a benchmark?
          </p>
          <ul className="list-disc ml-6 mb-8">
            <li>Resting Heart Rate</li>
            <li>Resting Blood Pressure</li>
            <li>Height/Weight</li>
            <li>Body Composition (Body fat/Skeletal muscle/Water)</li>
            <li>Visceral Fat</li>
            <li>BMR (Basic Metabolic Rate)</li>
            <li>Cardiorespiratory fitness</li>
            <li>Cardiorespiratory recovery rate</li>
            <li>Muscular Strength</li>
            <li>Muscular Endurance</li>
            <li>Flexibility</li>
            <li>Posture</li>
          </ul>
        </div>
      </div>

      {/* step 3 */}
      <div
        className="relative h-screen flex 
        justify-center items-center"
      >
        <div
          className="absolute inset-0 h-full 
          bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/step3-bg.jpg)" }}
        ></div>
        <div
          className="relative z-10 flex flex-wrap 
      justify-center items-center md:flex-row 
      sm:flex-col p-8"
        >
          <div
            className="md:w-1/2 sm:w-full md:pr-8 
        sm:pr-0 md:mb-0 sm:mb-8 text-white"
          >
            <h2 className="text-5xl font-serif mb-5">STEP 3 :</h2>
            <span className="text-xl font-serif ">
              LIFESTYLE ASSESSMENT & PLAN
            </span>
            <p className="mb-4 mt-5">
              Did you know that 80% of your weight loss or weight management
              results come from the time you spend out of the gym?! Lets say you
              train at the gym 4 times a week for 1 hour at a time, that amounts
              to less than 2% of your week. Therefore, if you don&apos;t have a
              suitable plan for your time outside the gym then you are severely
              compromising your results.
            </p>
            <p>
              I go beyond the gym walls and ensure you are living a lifestyle
              that will help to get you into shape and feeling great!
            </p>
          </div>
          <div className="md:w-1/4 sm:w-full">
            <div className="flex justify-center items-center">
              <Image
                src="/step3.png"
                alt="Right Image"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Step 4 */}
      <div
        className="flex bg-white flex-wrap justify-center 
          items-center md:flex-row sm:flex-col p-8 w-full"
      >
        <div
          className="md:w-1/4 sm:w-full flex 
            justify-end  mb-4"
        >
          <Image src="/step4.png" alt="Left Image" width={300} height={300} />
        </div>
        <div className="md:w-1/2 sm:w-full md:pl-8 text-black">
          <h2 className="text-5xl font-serif mb-5">STEP 4 :</h2>
          <span className="text-xl font-serif ">
            NUTRITIONAL ANALYSIS & PLAN
          </span>
          <p className="mb-4 mt-5">
            Honestly - 70% of losing weight comes down to your nutrition. If you
            are not following a suitable nutritional system, or worse still are
            on a fad diet, then it doesn&apos;t matter how hard you train in the
            gym, you will not get the long lasting results you&apos;re looking
            for.
          </p>
          <p className="mb-4">
            I will give you individual nutritional guidance which:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>
              Doesn&apos;t require you to starve yourself or cut out carbs like
              a lot of diets, causing your metabolism to slow right down and
              make you feel tired and hungry all day long.
            </li>
            <li>
              Doesn&apos;t require eating broccoli all day - You&apos;ll still
              be able to have the foods you enjoy.
            </li>
            <li>
              Doesn&apos;t involve following set meal plans - You&apos;ll have
              flexibility and choice on what you eat.
            </li>
            <li>
              Doesn&apos;t require you to count calories or weigh your food.
            </li>
          </ul>
          <p>
            It&apos;s pretty simple really. You&apos;ll quickly create habits
            and make nutrition a lifestyle, not a diet.
          </p>
        </div>
      </div>

      {/* Step 5 */}
      <div
        className="flex bg-gray-300 flex-wrap justify-center 
          items-center md:flex-row sm:flex-col p-8 w-full"
      >
        <div
          className="md:w-1/4 sm:w-full flex 
            justify-end  mb-4"
        >
          <Image
            src="/depositphotos-162008242-original_1.jpg"
            alt="Left Image"
            width={300}
            height={300}
          />
        </div>
        <div className="md:w-1/2 sm:w-full md:pl-8 text-black">
          <h2 className="text-3xl md:text-5xl font-serif mb-4">STEP 5 :</h2>
          <span className="font-serif text-lg md:text-xl">
            EATING STRATEGY PLAN
          </span>
          <p className="mb-4">
            Lots of people looking to improve their eating try following a meal
            plan. The problem is meal plans are usually unrealistic and not a
            long-term strategy.
          </p>
          <p className="mb-4">
            No matter how enthusiastic you are, meal plans can be tough to
            follow unless you can work your whole life around them, which most
            people can&apos;t.
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li>People get busy</li>
            <li>You&apos;re not always prepared</li>
            <li>Your children require attention</li>
            <li>You have to work late sometimes</li>
            <li>It’s always someone’s birthday (or a special occasion)</li>
            <li>
              Sometimes you just don’t feel like having a green drink at 7am
            </li>
          </ul>
          <p>
            So, instead of prescribing yet another unrealistic eating regimen, I
            offer valuable tools and methods to help you overcome any
            difficulties in following my nutritional system.
          </p>
        </div>
      </div>

      {/* Step 6 */}
      <div
        className=" flex flex-wrap bg-white
      justify-center items-center md:flex-row 
      sm:flex-col p-8"
      >
        <div
          className="md:w-1/2 sm:w-full md:pr-8 
        sm:pr-0 md:mb-0 sm:mb-8 text-black"
        >
          <h2 className="text-5xl font-serif mb-5">STEP 6 :</h2>
          <span className="text-xl font-serif ">FOOD SHOPPING COACHING</span>
          <p className="mb-4 mt-5">
            If you&apos;re going to start a lifestyle of healthy nutrition you
            need to know what foods to buy. Do you know what you should be
            looking for in the supermarket? If you&apos;re going to buy a
            yoghurt for example, can you identify which the healthiest choice
            is? Do you understand the nutritional labels and ingredients on the
            foods you&apos;re buying to enable you to confidently identify
            whether an item packaged as &apos;healthy&apos; truly is or not? How
            do you avoid the temptations of buying junk food?
          </p>
          <p>
            You need to be confident with these things and making sure
            you&apos;re filling your fridge and cupboards with the right stuff.
          </p>
        </div>
        <div className="md:w-1/4 mt-10 sm:w-full">
          <div className="flex justify-center items-center">
            <Image
              src="/step6.png"
              alt="Right Image"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>

      {/* Step 7 */}
      <div
        className="flex bg-gray-300 flex-wrap justify-center 
          items-center md:flex-row sm:flex-col p-8 w-full"
      >
        <div
          className="md:w-1/4 sm:w-full flex 
            justify-end  mb-4"
        >
          <Image src="/step7.png" alt="Right Image" width={300} height={300} />
        </div>

        <div className="md:w-1/2 sm:w-full md:pl-8 text-black">
          <h3 className="text-5xl font-serif mt-4 mb-4">STEP 7 :</h3>
          <h4 className="text-xl font-serif mb-4">ONE-TO-ONE EXERCISE</h4>
          <p className="mb-4">
            Train with me in at my private studio with free parking. You will
            not only be training progressively and efficiently but you will also
            learn HOW to train.
          </p>
          <p className="mb-4">
            I believe in educating my clients, so that one day they will have
            the motivation and knowledge to be able to train themselves safely
            and effectively.
          </p>
          <p className="mb-4">
            ​Not only will you learn techniques and training systems, but you
            will also learn the purpose and benefits of each element because in
            order to be motivated to achieve a goal you need to understand what
            you&apos;re doing and why you&apos;re doing it, during every step of
            the journey.
          </p>
        </div>
      </div>

      {/* Step 8 */}
      <div
        className=" flex flex-wrap bg-white
      justify-center items-center md:flex-row 
      sm:flex-col p-8"
      >
        <div
          className="md:w-1/2 sm:w-full md:pr-8 
        sm:pr-0 md:mb-0 sm:mb-8 text-black"
        >
          <h2 className="text-5xl font-serif mb-5">STEP 8 :</h2>
          <span className="text-xl font-serif ">MINDSET COACHING</span>
          <p className="mb-4 mt-5">
            For many people trying to overhaul their lifestyle with nutrition
            and exercise, it isn&apos;t just as simple as flicking a switch.
          </p>
          <p className="mb-4 mt-5">
            In order to create the necessary changes and keep them going
            long-term it requires having the right mindset.
          </p>
          <p className="mb-4 mt-5">
            Two of the biggest challenges for people are building their
            self-belief and becoming open to changing their ways and taking on
            new habits.
          </p>
          <p className="mb-4 mt-5">
            My goal is to help you realise that the only thing stopping you from
            moving forward is understanding that you can change.
          </p>
          <p className="mb-4 mt-5">
            With mindset training I can help you set meaningful goals, change
            your unhealthy habits, gain willpower and motivation, plus
            strengthen your self-belief.
          </p>
        </div>
        <div className="md:w-1/4 mt-10 sm:w-full">
          <div className="flex justify-center items-center">
            <Image
              src="/step8.png"
              alt="MINDSET COACHING"
              width={300}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
