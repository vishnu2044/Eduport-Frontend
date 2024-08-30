import React from 'react';
import HomeNavBar from '../components/homePage/navBar/HomeNavBar';
import TopInstructorSection from '../components/homePage/InstructorSection/TopInstructorSection';
import TopCourses from '../components/homePage/courses/TopCourses';
import HomeFootBar from '../components/homePage/footBar/HomeFootBar';
import WhyChooseUs from '../components/homePage/whyChoosUs/WhyChooseUs';
import MainBanner from '../components/homePage/main banner/MainBanner';

const HomePage = () => {
  return (
    <>

    <HomeNavBar />
    <MainBanner />
    <TopCourses />



      <section class="bg-gray-100" id="aboutus">
          <div class="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
              <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
                  <div class="max-w-lg">
                      <h2 class="text-3xl font-bold text-gray-800 mb-8 text-center">About Us</h2>
                      <p class="mt-4 text-gray-600 text-lg">
                          Bappa flour mill provides our customers with the highest quality products and services. We offer a
                          wide variety of flours and spices to choose from, and we are always happy to help our customers find
                          the perfect products for their needs.
                          We are committed to providing our customers with the best possible experience. We offer competitive
                          prices, fast shipping, and excellent customer service. We are also happy to answer any questions
                          that our customers may have about our products or services.
                          If you are looking for a flour and spices service business that can provide you with the highest
                          quality products and services, then we are the company for you. We look forward to serving you!</p>
                  </div>
                  <div class="mt-12 md:mt-0">
                      <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" class="object-cover rounded-lg shadow-md" />
                  </div>
              </div>
          </div>
      </section>



{/* Top Instructor view */}
      <TopInstructorSection />


      <WhyChooseUs />
      <HomeFootBar />
    </>




  )
}

export default HomePage