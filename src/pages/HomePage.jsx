import React from 'react';
import HomeNavBar from '../components/homePage/navBar/HomeNavBar';
import TopInstructorSection from '../components/homePage/InstructorSection/TopInstructorSection';
import TopCourses from '../components/homePage/courses/TopCourses';
import HomeFootBar from '../components/homePage/footBar/HomeFootBar';
import WhyChooseUs from '../components/homePage/whyChoosUs/WhyChooseUs';
import MainBanner from '../components/homePage/main banner/MainBanner';
import SuccessAlertBox from '../components/AlertBoxes/SuccessAlertBox';

const HomePage = () => {
  return (
    <>
      <SuccessAlertBox message="Wellcome to EduPort" autoClose={true} duration={3000} />


    <HomeNavBar />
    {/* <div class=" text-center py-4 lg:px-4">
      <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
        <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">New</span>
        <span class="font-semibold mr-2 text-left flex-auto">Get the coolest t-shirts from our brand new store</span>
        <svg class="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
      </div>
    </div> */}



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