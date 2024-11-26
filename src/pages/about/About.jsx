import React from "react";
import aboutBgImg from "../../assets/about-background.jpg";
import expriencesImg from "../../assets/expricences.png";
import Button from "../../components/Button";
import AboutOne from "../../assets/about/about-2.jpg"
import AboutTwo from "../../assets/about/about-3.avif"
import AboutThree from "../../assets/about/about-4.webp"
import AboutFout from "../../assets/about/about-5.webp"
import imgone from "../../assets/products/d-8.jpeg"
import imgotwo from "../../assets/products/door-2.jpeg"
import imgothree from "../../assets/products/b-4.jpeg"
import imgofour from "../../assets/products/b-5.jpeg"
import imgofive from "../../assets/products/d-3.jpeg"
const About = () => {
  return (
    <section>
      {/* Banner Section */}
      <div
        className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${aboutBgImg})` }}
      >
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>

      {/* About Section */}

      <section className="my-24 px-6 md:px-12">
        <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-12">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={expriencesImg}
              alt="Kenwud Experience"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 flex flex-col">
            <h3 className="text-lg font-semibold text-primary mb-4">
              Who We Are
            </h3>
            <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
              Welcome to Kenwud
            </h2>
            <p className="text-secondary dark:text-white mb-4">
              KENWUD Home, Office, and Children’s Furniture is a fully
              integrated manufacturer, established in 2008 out of a desire to
              bring a unique, customer-oriented approach to the contract
              marketplace. We design durable, elegant furniture that meets all
              core requirements while offering a wide array of options, price
              points, and scalable solutions, empowering customers to specify
              the best fit for their needs.
            </p>

            <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
              Our Facility
            </h2>
            <p className="text-secondary dark:text-white mb-4">
              We are a modular furniture company specializing in children’s,
              home, and office furniture. Our operations span a spacious
              2.5-acre factory equipped with state-of-the-art machinery sourced
              from Europe, China, and India, located in Asia's largest
              industrial cluster—MIDC Butibori, Nagpur.
            </p>

            <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
              Our Mission
            </h2>
            <p className="text-secondary dark:text-white mb-4">
              At KENWUD, our mission is to deliver exceptional value by
              combining high-quality furniture with competitive pricing. We
              continuously strive to improve product quality, enhance designs,
              and provide unparalleled customer service while maintaining cost
              efficiency.
            </p>
          </div>
        </div>
        <section className="my-24 px-6 md:px-12">
          <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Content Section */}
            <div className="md:w-1/2 flex flex-col">
              <h3 className="text-lg font-semibold text-primary mb-4">
                What Sets Us Apart
              </h3>
              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                A Trusted Brand
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                As one of the leading manufacturers of children’s, home, and
                office furniture, we serve a diverse clientele, including
                esteemed corporate customers, wholesalers, and retailers. Our
                team of home and office furniture specialists works tirelessly
                to create elegant, functional designs tailored to various needs.
              </p>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                  Certifications
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  Our commitment to quality is reflected in our numerous
                  certifications, demonstrating our dedication to excellence and
                  adherence to industry standards:
                </p>
                <ul className="list-disc pl-5 text-secondary dark:text-white">
                  <li className="mb-2">MSME</li>
                  <li className="mb-2">ISO 9001:2015</li>
                  <li>ISO 14001:2015</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                Unmatched Quality and Engineering
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                We are recognized as a market leader in the quality, design, and
                engineering of contract furniture. Thousands of Kenwud products
                are installed across India, backed by an industry-leading
                warranty and a dedication to outstanding customer service.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={AboutThree}
                alt="Kenwud Experience"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={AboutOne}
                alt="Kenwud Experience"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 flex flex-col">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Social Responsibility
              </h3>
              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                Giving Back to the Community
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                At KENWUD, we are passionate about supporting our community. Our
                operations and employees actively contribute to its betterment
                through various initiatives.
              </p>

              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                Partner with Us
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                Kenwud is committed to partnering with small businesses. If you
                represent a business in the following categories and are willing
                to collaborate, we’d love to hear from you!
              </p>
            </div>
          </div>
          <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Content Section */}
            <div className="md:w-1/2 flex flex-col">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Our Journey
              </h3>
              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                A Legacy of Excellence
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                Established in 2008, KENWUD has built a reputation for providing
                quality furniture at competitive prices. Over the years, we have
                expanded our manufacturing capabilities to include cutting-edge
                technology, ensuring adherence to international quality
                standards.
              </p>

              <div className="mb-6">
                <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                  Innovative Design
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  Our furniture experts focus on creating simple, certified
                  designs before production, ensuring every product meets
                  stringent quality controls. From living rooms and dining areas
                  to workspaces and bedroom ensembles, we offer a range of
                  stylish, durable furniture to enhance your home or office.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 capitalize leading-tight">
                Comfort, Style, and Design
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                KENWUD is synonymous with elegant furniture that combines
                comfort, style, and functionality. Whether you’re furnishing
                your home or workplace, our products are designed to deliver
                exceptional value at the best price range.
              </p>
              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                Choose KENWUD
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                With a commitment to quality, design, and customer satisfaction,
                KENWUD continues to set the standard for home, office, and
                children’s furniture. Experience the perfect blend of style,
                comfort, and durability today.
              </p>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={AboutTwo}
                alt="Kenwud Experience"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
        <section className="">
          <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                  <img
                    src={imgone}
                    alt="Cloud Solution Provider"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    {/* Cloud Solution Provider */}
                  </h3>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                  <img
                    src={imgothree}

                    alt="Team colaboration section"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className=" text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    {/* Team Colaboration */}
                  </h3>
                </div>
                <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img
                      src={imgofour}
                      alt="GetMax AI"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className=" text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      {/* GetMax */}
                    </h3>
                  </div>
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                    <img
                      src={imgofive}
                      alt="GetMaax Trusted Partner"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      {/* Trusted Partner */}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                  <img
                    src={imgotwo}
                    alt="GetMax Team "
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 className="text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    {/* Team */}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About;

{
  /* <section>
<div className="relative flex min-h-screen flex-col justify-center overflow-hidden  py-6 sm:py-12 px-4">
  <div className="w-full items-center mx-auto max-w-screen-lg">
    <div className="group grid w-full  grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <div className="pr-12">
          <h2 className="text-2xl font-bold mb-4 capitalize leading-tight">
            What Sets Us Apart
          </h2>
          <p className="peer mb-6 text-black text-base">
            <strong className="text-blue-600">A Trusted Brand :</strong>{" "}
            As one of the leading manufacturers of children’s, home, and
            office furniture, we serve a diverse clientele, including
            esteemed corporate customers, wholesalers, and retailers.
            Our team of home and office furniture specialists works
            tirelessly to create elegant, functional designs tailored to
            various needs.
          </p>
          <p className="mb-6 text-black text-base">
            <strong className="text-blue-600">Certifications:</strong>{" "}
            Our commitment to quality is reflected in our numerous
            certifications:
          </p>
          <ul className="list-disc pl-6 text-black text-base">
            <li>MSME</li>
            <li>ISO 9001:2015</li>
            <li>ISO 14001:2015</li>
          </ul>

          <p className="mb-6 text-black text-base">
            <strong className="text-blue-600">
              Unmatched Quality and Engineering :{" "}
            </strong>
            We are recognized as a market leader in the quality, design,
            and engineering of contract furniture. Thousands of Kenwud
            products are installed across India, backed by an
            industry-leading warranty and a dedication to outstanding
            customer service.
          </p>
        </div>
      </div>
      <div className="pr-16 relative flex flex-col before:block before:absolute before:h-1/6 before:w-4 before:bg-blue-500 before:bottom-0 before:right-0 before:rounded-lg  before:transition-all group-hover:before:bg-orange-600 overflow-hidden">
        <div className="absolute top-0 right-0 bg-blue-500 w-4/6 px-12 py-14 flex flex-col justify-center rounded-xl group-hover:bg-sky-600 transition-all">
          <span className="block mb-10 font-bold group-hover:text-orange-600">
            HERE WE ARE
          </span>
          <h2 className="text-white md:font-semibold md:text-3xl">
            Partner with GetMax for Unmatched Digital Transformation
          </h2>
        </div>
        <span className="font-bold text-sm flex mt-2 mb-8 items-center gap-2">
          <span>MORE ABOUT US</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </span>
        <div className="rounded-xl overflow-hidden">
          <img
            src="https://getmax.netlify.app/assets/service-img-02-CSP8d1ZX.jpg"
            alt="GetMax About"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</section> */
}
