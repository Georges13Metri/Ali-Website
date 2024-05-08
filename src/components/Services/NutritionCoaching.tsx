import Image from "next/image";
import Link from "next/link";

const NutritionCoaching = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="bg-white text-black pt-10">
        <h1 className="text-4xl font-bold text-center mb-8">
          NUTRITION COACHING
        </h1>
        <div className="flex flex-col md:flex-row  justify-center lg:p-5 md:p-5 p-5">
          <div className="md:w-1/4 mr-4 mb-4 md:mb-0 h-fit">
            <Image
              src="/depositphotos-162008242-original_1.jpg"
              width={400}
              height={300}
              alt="Image"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl font-bold mb-2">NUTRITION COACHING</h2>
            <hr className="border-b-2 border-gray-300 mb-10 mt-10" />
            <p className="text-lg mb-4">FROM £79/MONTH</p>
            <p className="mb-4">The cost of a meal out.</p>
            <p className="mb-4">
              All plans start with a consultation followed by an initial one
              month commitment, after which there is the opportunity to make
              longer commitments and save money.
            </p>
            <hr className="border-b-2 border-gray-300 mb-4" />
            <p className="mb-4">I am a Precision Nutrition ProCoach.</p>
            <p className="mb-4">
              I am part of the most successful weight management program in the
              world! Bar none.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>45,000 clients</li>
              <li>Over 900,000 pounds of weight loss</li>
              <li>A Guarantee of Success!</li>
            </ul>
            <p className="mb-4">
              We&apos;re talking serious results! A program built for YOU.
            </p>
            <h3 className="font-bold mb-2">What I provide you:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>
                A nutrition plan that fits into your life (no crazy diets that
                NEVER work)
              </li>
              <li>A program backed by science, not fads</li>
              <li>
                Software designed to instil powerful new habits - one small step
                at a time.
              </li>
              <li>
                One to one online coaching to provide extra support when you
                need it
              </li>
            </ul>
            <p className="mb-4">
              All of this allows me to be there for you 24/7. We&apos;re talking
              some of the most advanced software you&apos;ve ever seen.
              (Translation - It is actually easy to use!)
            </p>
            <p className="mb-4">
              All backed by a powerful curriculum tailored to your needs.
            </p>
            <p className="mb-4">
              At the end of the day though, it all comes back to coaching and
              being held accountable which will help you to stay focused, keep
              on track and achieve your goals.
            </p>
            <p className="mb-4">
              I live and breathe this stuff everyday, and have dedicated my
              professional life helping people like you become fitter, stronger,
              and healthier than ever.
            </p>
            <p className="mb-4">
              Whatever obstacles arise, I’ll help you overcome them by modifying
              your program or offering new solutions. In the end, know that I’m
              here to support you every step of the way, no matter what life
              throws at you.
            </p>
            <h3 className="font-bold mb-2">What You Get</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li>Free initial in person or phone consultation</li>
              <li>Weekly/fortnightly check-ins via email/messenger/phone</li>
              <li>Cancel any time*</li>
            </ol>
            <h3 className="font-bold mb-2">Pricing</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Month to month £120</li>
              <li>6 month commitment £594 (save £126)</li>
              <li>12 month commitment £948 (save £492)</li>
            </ul>
            <Link href="/contactus">
              <button
                className="bg-transparent hover:bg-gray-300 text-black
               font-serif py-2 px-4 border border-black"
              >
                Start Now
              </button>
            </Link>
          </div>
        </div>
        <hr className="border-b-2 border-gray-300 w-4/5 mx-auto" />
      </div>

      {/* Section 2 */}
      <div className="bg-white text-black">
        <h1 className="text-2xl font-serif text-center p-8">
          AN INSIDE LOOK AT HOW THE PERSONAL COACHING PROGRAM WORKS
        </h1>
        <div
          className="container mx-auto px-4 py-8 lg:grid lg:grid-cols-2 gap-4
         md:flex md:flex-col md:items-center md:justify-center"
        >
          <div className="lg:col-span-1 mb-8">
            <h2 className="font-bold text-lg ">Easy-to-use online platform</h2>
            <p>
              You’ll start by telling me all about yourself, including your
              goals, health challenges, and daily routine. From there, I’ll
              customize your entire program and we’ll start the proven 12-month
              coaching process. You&apos;ll be feeling better in a matter of
              weeks!
            </p>
          </div>
          <div className="lg:col-span-1 mb-8">
            <h2 className="font-bold text-lg ">
              Simple nutrition habits and daily check-ins
            </h2>
            <p>
              Every day, you’ll get a lesson and a nutrition or lifestyle habit
              to practice. You can either read the daily lesson or listen to it
              like a podcast. We’ll practice a new nutrition habit every two
              weeks, with every lesson designed to help you get results.
            </p>
          </div>
          <div className="lg:col-span-1 mb-8">
            <h2 className="font-bold text-lg ">
              Small yet powerful habits to improve everyday life
            </h2>
            <p>
              We’ll work together to create and practice healthy habits across
              every aspect of your life: from sleep and stress-management to
              movement and mindfulness. These new habits will help you feel more
              calm, confident, and prepared for each day—no matter what life
              throws at you.
            </p>
          </div>
          <div className="lg:col-span-1 mb-8">
            <h2 className="font-bold text-lg ">
              Personal coaching and detailed progress checking
            </h2>
            <p>
              I’ll check in with you frequently to see how you’re doing and to
              answer any questions you have. Also, you can message me whenever
              you need. The program also tracks everything from your
              measurements to your habits throughout the year, so you can see
              just how much progress you’ve made.
            </p>
          </div>
          <div className="lg:col-span-2 flex justify-center">
            <Link href="/contactus">
              <button
                className="bg-transparent hover:bg-gray-300 text-black
               font-serif py-2 px-4 border border-black"
              >
                Start Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Section 3 */}
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

export default NutritionCoaching;
