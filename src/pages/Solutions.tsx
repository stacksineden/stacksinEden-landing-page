import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "../components/Hero.css";
import gsap from "gsap";
import imageA from "../assets/solutionimga.jpg";
import imageB from "../assets/solutionimgb.jpg";
import imageC from "../assets/banner.png";
import imageD from "../assets/solutionimgc.jpg";
// import imageE from "../assets/solutionimgd.jpg";
import imageF from "../assets/solutionimge.jpg";
import imageG from "../assets/hero4.png";
import Footer from "../components/Footer";
import { shortenString } from "../uitils";

const Solutions = () => {
  interface SolutionDataObj {
    title: string;
    description: string;
    benefits: string[];
    packages: string[];
    notes: string; // Add the 'notes' property here
    image: string;
  }

  const [open, setOpen] = useState(false);
  const [filteredData, setFilteredData] = useState<SolutionDataObj | null>(
    null
  );
  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1 });

    timeline.fromTo(
      ".hero-text",
      { y: "50px", opacity: 0 },
      { y: "0px", opacity: 1, stagger: 0.5 },
      "+=1"
    );

    timeline.to(".hero-text", { opacity: 0 }, "+=1");

    timeline.fromTo(".reveal-box", 0.1, { opacity: 0 }, { opacity: 1 });

    timeline.to(".reveal-box", 0.2, { width: "100%" }, "+=0.5");
    timeline.to(".reveal-box", { right: "0" });
    timeline.to(".reveal-box", 0.2, { width: "0%" });

    timeline.fromTo(".hero-text2", { opacity: 0 }, { opacity: 1 }, "-=0.5");
    timeline.to(".reveal-box", 0, { backgroundColor: "#F4C095" });
    timeline.to(".reveal-box", 0.2, { width: "100%" }, "+=2");

    timeline.play(); // Start the timeline

    // Clean up the timeline when the component is unmounted
    return () => {
      timeline.kill(); // This stops the timeline and removes any registered callbacks
    };
  }, []); // Empty dependency array means this effect runs only once, on component mount

  const solutionsData = [
    {
      title: "AI Persona chatbots for professionals.",
      description:
        "Transform customer experience with our custom AI persona chatbots, mirroring human personalities. Seamlessly integrated into websites, WhatsApp, and Telegram, they offer 24/7 support. Advanced NLP ensures accurate responses. Customize chatbot personalities to match your brand voice. Streamline processes, save time and costs, generate leads, and boost brand image with cutting-edge AI technology.",
      benefits: [
        "Experience the ultimate in customer engagement: Engage your clients in interactive conversations, fostering deeper connections, and increasing your satisfaction and loyalty.",
        "Enjoy 24/7 availability: Get round-the-clock support, addressing inquiries and resolving issues, even outside business hours, to cater to your needs.",
        "Save time and costs: Reduce the need for human intervention in customer interactions, streamlining processes, and cutting operational costs, optimizing your efficiency.",
        "Generate leads effortlessly: Qualify leads and gather valuable customer data through insightful conversations, empowering your marketing strategies.",
        "Increase conversion rates: Guide potential clients through the sales funnel with personalized recommendations and assistance, driving higher conversion rates for your business.",
        "Boost your brand image: Showcase your tech-savvy and innovative brand by incorporating cutting-edge AI chatbot technology, setting you apart from the competition. Your success story begins with us.",
      ],
      packages: [
        "Flexibility and Convenience: Get a custom personal chatbot deployed to WhatsApp, Telegram, or your web page, catering specifically to your business needs.",
        "Risk-Free Investment: No upfront payment required! Pay only when you are completely satisfied with the chatbot's performance before deployment.",
        "Limited Time Offer: Avail a 15% discount on the normal setup fee, but hurry, only 4 days left to claim this exclusive offer. We have limited slots available for new clients.",
        "Free Maintenance and Optimization: Enjoy one month of complimentary maintenance and optimization services, ensuring your chatbot runs smoothly and efficiently.",
        "Priority Access: We only take on 10 clients per month, and with only 2 slots available this month, act quickly to secure your place.",
        "Satisfaction Guaranteed: We are confident in the quality of our service. If, within 20 days of deployment, you are not satisfied, we offer a 50% refund.",
      ],
      notes:
        "Customize your chatbot package to fit your needs! Book a call for a personalized quote, ensuring the perfect solution for your business. Don't miss this opportunity to boost efficiency and engagement with a tailored chatbot deployment. Contact us now!",
      image: imageA,
    },
    {
      title: "Prospecting Chatbots for professional service providers.",
      description:
        "Enhance client acquisition with our Prospecting Chatbots designed for professional service providers. Engage potential clients in personalized conversations, guiding them through your services and generating leads effortlessly. Seamlessly integrated into your platforms, our AI-powered chatbots ensure 24/7 support, streamlining processes, saving time and costs, and boosting your brand image.",
      benefits: [
        "Lead Generation Expertise: Drive high-quality leads by engaging prospects with personalized conversations and insightful interactions.",
        "24/7 Availability: Ensure round-the-clock support, capturing leads and nurturing potential clients anytime, anywhere.",
        "Cost & Time Efficiency: Streamline customer interactions, reduce manual efforts, and optimize operational costs.",
        "Conversion Optimization: Guide prospects through the sales funnel, delivering personalized recommendations for higher conversion rates.",
        "Data-Driven Insights: Gather valuable customer data during interactions, empowering targeted marketing strategies.",
        "Innovation & Brand Authority: Showcase your tech-savvy image, setting your brand apart as an industry leader.",
      ],
      packages: [
        "Customized Chatbot Deployment: Tailor-made chatbots for WhatsApp, Telegram, or your web page, designed for optimal lead generation.",
        "Risk-Free Investment: Pay only 50% upfront to begin the development of your chatbot. Once you are fully satisfied with the chatbot's performance and features, you can complete the payment and proceed with the deployment.",
        "Free Maintenance and Optimization: Enjoy one month of complimentary maintenance and optimization services, ensuring your chatbot runs smoothly and efficiently.",
        "Priority Access: We only take on 5 clients per month, and with only 3 slots available this month, act quickly to secure your place.",
        "Satisfaction Guaranteed: We are confident in the quality of our service. If, within 20 days of deployment, you are not satisfied, we offer a 50% refund.",
      ],
      notes:
        "Customize your chatbot package to fit your needs! Book a call for a personalized quote, ensuring the perfect solution for your business. Don't miss this opportunity to boost efficiency and engagement with a tailored chatbot deployment. Contact us now!",
      image: imageB,
    },
    {
      title: "Customer service chatbots for Online stores.",
      description:
        "Elevate customer support with our advanced Customer Service Chatbots designed exclusively for online stores. Seamlessly integrated into your website or messaging apps, these chatbots provide instant assistance 24/7. Empower your customers with quick responses, order tracking, and personalized recommendations. Streamline inquiries, reduce response time, and enhance the overall shopping experience with cutting-edge AI technology.",
      benefits: [
        "24/7 Instant Assistance: Offer round-the-clock support to customers, ensuring quick responses and resolving queries promptly.",
        "Order Tracking Made Easy: Enable customers to track their orders in real-time, enhancing transparency and reducing support requests.",
        "Personalized Recommendations: Deliver tailored product suggestions, improving cross-selling and upselling opportunities.",
        "Efficient Inquiry Handling: Streamline customer inquiries, freeing up your team to focus on strategic tasks.",
        "Increased Customer Satisfaction: Enhance the overall shopping experience with fast and accurate responses.",
        "Brand Image Enhancement: Showcase your commitment to cutting-edge technology, setting your online store apart from competitors.",
      ],
      packages: [
        "Customized Chatbot Integration: Tailor-made chatbots for seamless integration into your online store platform.",
        "50% Upfront Investment: Start with only 50% upfront, ensuring a secure and risk-free initial investment.",
        "Free Maintenance and Optimization: Enjoy one month of complimentary maintenance and optimization services, ensuring your chatbot runs smoothly and efficiently.",
        "Priority Access: We only take on 2 clients per month, and with only 1 slot available this month, act quickly to secure your place.",
        "No-Refund Satisfaction Guarantee: We are confident in the quality of our service. If, within 20 days of deployment, you are not satisfied, rest assured that we will work diligently to address any concerns and fine-tune the chatbot to meet your expectations, ensuring your ultimate satisfaction.",
      ],
      notes:
        "Transform your customer service experience now! Book a call to discuss a personalized quote and deploy a cutting-edge chatbot for your online store. Enhance efficiency, boost customer satisfaction, and stay ahead in the competitive e-commerce landscape. Contact us today!",
      image: imageC,
    },
    {
      title: "Customer service chatbots for professional service providers.",
      description:
        "Enhance your customer support capabilities with our Customer Service Chatbots tailored specifically for professional service providers. Seamlessly integrated into your website or messaging apps, these chatbots offer instant assistance 24/7. Empower your clients with quick responses, appointment scheduling, and personalized recommendations. Streamline inquiries, reduce response time, and elevate the overall customer experience with cutting-edge AI technology.",
      benefits: [
        "Increased Client Satisfaction: Elevate the overall customer experience with fast and accurate responses.",
        "24/7 Instant Assistance: Offer round-the-clock support, providing quick responses and addressing client queries promptly.",
        "Efficient Appointment Scheduling: Enable clients to book appointments hassle-free, optimizing your service workflow.",
        "Personalized Recommendations: Deliver tailored service suggestions, enhancing client satisfaction and engagement.",
        "Streamlined Inquiry Handling: Automate routine inquiries, allowing your team to focus on delivering exceptional service.",
        "Brand Image Enhancement: Showcase your commitment to innovation and client-centricity, differentiating your professional services.",
      ],
      packages: [
        "Customized Chatbot Integration: Tailor-made chatbots for seamless integration into your professional service platform, including WhatsApp or Telegram for enhanced client communication and convenience.",
        "50% Upfront Investment: Start with only 50% upfront, ensuring a secure and risk-free initial investment.",
        "Limited Time Offer: Avail a 15% discount on setup fees for a limited period.",
        "Complimentary Maintenance: Enjoy one month of free maintenance and optimization services.",
        "Priority Access: We only take on 2 clients per month, and with only 1 slot available this month, act quickly to secure your place.",
        "No-Refund Satisfaction Guarantee: We are confident in the quality of our service. If, within 20 days of deployment, you are not satisfied, rest assured that we will work diligently to address any concerns and fine-tune the chatbot to meet your expectations, ensuring your ultimate satisfaction.",
      ],
      notes:
        "Revolutionize your customer support now! Book a call to discuss a personalized quote and deploy a cutting-edge chatbot for your professional service business. Streamline your processes, boost client satisfaction, and establish your brand as a leader in your industry. Contact us today!",
      image: imageD,
    },
    // {
    //   title: "Onboarding chatbots for SAAS.",
    //   description:
    //     "Simplify user onboarding with our specialized Onboarding Chatbots designed for Software as a Service (SAAS) providers. Seamlessly integrated into your SAAS platform, these chatbots guide new users through setup, feature explanations, and customization. Enhance user experience, reduce support inquiries, and accelerate product adoption with our cutting-edge AI technology.",
    //   benefits: [
    //     "Effortless User Onboarding: Streamline the onboarding process, guiding new users step-by-step for a smooth experience.",
    //     "Feature Explanation: Provide clear and concise explanations of your SAAS features, ensuring users fully utilize your product's capabilities.",
    //     "Customization Assistance: Offer personalized setup and customization guidance, tailoring the SAAS experience to each user's needs.",
    //     "Reduced Support Inquiries: Address common questions and concerns proactively, minimizing support requests.",
    //     "Accelerated Product Adoption: Help users unlock the full potential of your SAAS quickly, boosting user satisfaction and loyalty.",
    //     "Brand Reputation: Showcase your commitment to user-centric onboarding, positioning your SAAS as an industry leader.",
    //   ],
    //   packages: [
    //     "Customized Chatbot Integration: Tailor-made chatbots seamlessly integrated into your SAAS platform, providing superior onboarding experiences.",
    //     "50% Upfront Investment: Start with only 50% upfront, ensuring a secure and risk-free initial investment.",
    //     "Priority Access: We only take on 2 clients per month, and with only 1 slot available this month, act quickly to secure your place.",
    //     "No-Refund Satisfaction Guarantee: We are confident in the quality of our service. If, within 20 days of deployment, you are not satisfied, rest assured that we will work diligently to address any concerns and fine-tune the chatbot to meet your expectations, ensuring your ultimate satisfaction.",
    //   ],
    //   notes:
    //     "Elevate your SAAS user onboarding now! Book a call to discuss a personalized quote and deploy a cutting-edge chatbot to enhance user experience and accelerate product adoption. Streamline your onboarding process, reduce support inquiries, and establish your SAAS as the go-to choice in the market. Contact us today!",
    //   image: imageE,
    // },
    {
      title: "Content Generation Systems for Nutritional and Fitness Coaches",
      description:
        "Empower your coaching services with our advanced Content Generation Systems, tailored for nutritional and fitness coaches. Our systems include meal plan generators and trackers, designed to streamline your coaching process and enhance client success. Provide personalized meal plans, track progress, and offer real-time feedback, while saving time and elevating your coaching business with cutting-edge AI technology.",
      benefits: [
        "Personalized Meal Plans: Generate customized meal plans based on individual dietary needs, preferences, and fitness goals.",
        "Data-Driven Insights: Gather valuable client data to deliver data-driven recommendations for optimal results.",
        "Time Efficiency: Streamline content generation, allowing you to focus on coaching and client support.",
        "Enhanced Client Engagement: Offer interactive and personalized coaching experiences for higher client satisfaction.",
      ],
      packages: [
        "Meal Plan Generator: Implement our AI-powered meal plan generator to deliver tailored nutrition plans effortlessly.",
        "Customizable Content: Personalize content to align with your coaching philosophy and brand voice.",
        "Data Privacy and Security: Ensure client data is kept secure and confidential at all times.",
        "Seamless Integration: Easily integrate our content generation systems into your coaching platforms.",
        "Priority Access: We only take on 2 clients per month, and with only 1 slot available this month, act quickly to secure your place.",
        "Continuous Support: Benefit from our ongoing maintenance and optimization services to keep your systems running smoothly.",
      ],
      notes:
        "Transform your coaching services today! Book a call to discuss a personalized quote and leverage our Content Generation Systems. Streamline your coaching process, offer exceptional client experiences, and elevate your brand as a trusted authority in the nutritional and fitness coaching industry. Contact us now!",
      image: imageF,
    },
    {
      title: "AI Automation Services: Streamlining Your Business Workflows.",
      description:
        "Experience the future of business efficiency with our exclusive AI Automation Services. We specialize in automating basic workflows within your company, leveraging cutting-edge AI technology. Our team is dedicated to understanding your unique business needs through extensive calls and meetings. By tailoring solutions to your requirements, we ensure seamless automation, empowering your team to focus on high-value tasks and achieving unprecedented productivity gains.",
      benefits: [
        "Tailored Automation Solutions: Our services are customized to fit your specific business processes, ensuring optimal results.",
        "Enhanced Efficiency: Automate repetitive tasks, reducing manual efforts and boosting overall productivity.",
        "Data-Driven Insights: Leverage data analytics for strategic decision-making, unlocking hidden business potentials.",
        "Personalized Consultation: Extensive calls and meetings to comprehend your workflows and deliver tailored automation.",
        "Streamlined Operations: Optimize workflows, minimize errors, and enhance collaboration among teams.",
        "Competitive Advantage: Stay ahead in the market with cutting-edge AI automation, setting your business apart.",
      ],
      packages: [
        "Custom Automation Solution: Tailor-made AI automation to address your unique requirements.",
        "Needs Assessment: In-depth consultation to understand your business processes and identify automation opportunities.",
        "Seamless Integration: Smooth implementation into your existing systems, ensuring minimal disruptions.",
        "Ongoing Support: Dedicated support for seamless operation and continuous improvements.",
        "Data Security: Ensure confidentiality and integrity of your sensitive business data.",
        "Exclusive Engagement: Limited clients accepted to maintain a focus on personalized service.",
      ],
      notes:
        "Unlock the full potential of your business! Book a call to discuss a personalized quote for our exclusive AI Automation Services. Streamline your workflows, drive efficiency, and gain a competitive edge with our cutting-edge automation solutions. Contact us now for a transformative journey towards business success!",
      image: imageG,
    },
  ];

  return (
    <>
      {open && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
          <div
            className={`absolute inset-0 bg-zinc-800/40 backdrop-blur-sm`}
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`relative z-10 bg-white px-8 py-6 md:py-8 rounded-lg shadow-lg w-[90%] md:w-[800px] h-[80vh] overflow-y-scroll scrollbar-hide`}
          >
            <div className="flex flex-col gap-4 text-[#071E22]">
              <h2 className="text-[20px] md:text-[24px] font-medium">{filteredData?.title}</h2>
              <p className="text-[12px] md:text-[14px] font-light tracking-wide">
                {filteredData?.description}
              </p>
              <ul className="font-normal tracking-wide mt-2 text-[12px] list-disc space-y-4 ml-3">
                {filteredData?.benefits.map((benefit, _i) => (
                  <li key={_i}>{benefit}</li>
                ))}
              </ul>
              <div className="mt-3">
                <h2 className="text-[20px] md:text-[24px] font-medium">
                  Service Package Details.
                </h2>
                <ul className="font-normal tracking-wide mt-2 text-[12px] list-disc space-y-4 ml-3">
                  {filteredData?.packages.map((item, _i) => (
                    <li key={_i}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-3">
                <p className="font-bold tracking-wide text-[12px]">
                  {filteredData?.notes}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-[99%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] w-full bg-white mx-auto px-5 mt-2">
        <Navbar />

        <div className="hero-container">
          <div className="pos-abs flex-cont text-container1">
            <p className="hero-text">Automate.</p>
            <p className="hero-text">Deploy.</p>
            <p className="hero-text">Evolve.</p>
          </div>
          <div className="pos-abs flex-cont text-container2">
            <div className="reveal-container">
              <p className="reveal-box"></p>
              <p className="hero-text2">
                stacksin<span className="text-[#F4C095]">EDEN</span>.
              </p>
            </div>
          </div>
        </div>

        {/* start of section */}

        <div className="text-center flex flex-col gap-1 md:gap-2">
          <div className="max-w-[80%] mx-auto py-2">
            <h2 className="font-medium text-[24px] md:text-[35px] text-[#071E22] max-w-[98%] md:max-w-[70%] mx-auto">
              Empowering Solutions{" "}
              <span className="text-[#F4C095]">Stacked</span> in Eden's Realm.
            </h2>
          </div>
          <button className="text-[12px] md:text-[14px] text-[#F4C095] cursor-pointer tracking-tight font-semibold bg-[#071E22] px-4 md:px-6 py-2 md:py-3 active:scale-90 rounded-full mx-auto border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg">
            Get started
          </button>
        </div>

        {/* start of section */}
        <div className="w-full my-7 hidden md:flex flex-col gap-9 px-20 py-5">
          {solutionsData &&
            solutionsData.map((solution, _i) => (
              <div
                className="w-full h-[450px] shadow-xl grid grid-cols-2 rounded-[2rem]"
                key={_i}
              >
                <div className="w-full bg-[#071E22] h-full rounded-l-[2rem] py-5 px-7 text-white relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[88%]">
                    <div className="flex flex-col gap-4">
                      <h2 className="text-[28px] font-semibold">
                        {solution.title}
                      </h2>
                      <p className="text-[14px] font-light tracking-wide">
                        {solution.description}
                      </p>
                      <div className="flex justify-start mt-2">
                        <button
                          className="text-[12px] md:text-[14px] text-[#071E22] cursor-pointer tracking-tight font-semibold bg-white px-4 md:px-4 py-2 md:py-2 active:scale-90 rounded-full border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
                          onClick={() => {
                            setFilteredData(solution);
                            setOpen(true);
                          }}
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full bg-black h-full rounded-r-[2rem]">
                  <img
                    src={solution?.image}
                    alt="image-services"
                    className="bg-contain w-full h-full rounded-r-[2rem]"
                  />
                </div>
              </div>
            ))}
        </div>

        {/* section for mobile screens */}
        <div className="w-full my-7 flex flex-col gap-9 py-5 md:hidden">
          {solutionsData &&
            solutionsData.map((solution, _i) => (
              <div
                className="w-full h-[500px] shadow-xl grid grid-cols-1 rounded-[2rem]"
                key={_i}
              >
                <div className="w-full bg-yellow-200 h-[250px] rounded-t-[2rem]">
                  <img
                    src={solution?.image}
                    alt="image-services"
                    className="bg-cover w-full h-full rounded-t-[2rem]"
                  />
                </div>

                <div className="w-full bg-[#071E22] h-[250px] py-5 px-7 text-white rounded-b-[2rem]">
                  <div className="w-full">
                    <div className="flex flex-col gap-2">
                      <h2 className="text-[18px] font-semibold">
                        {solution?.title}
                      </h2>
                      <p className="text-[12px] font-light tracking-wide">
                        {shortenString(solution?.description, 180)}
                      </p>
                      <div className="flex justify-start mt-2">
                        <button
                          className="text-[12px] md:text-[14px] text-[#071E22] cursor-pointer tracking-tight font-semibold bg-white px-3 py-1 active:scale-90 rounded-full border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg"
                          onClick={() => {
                            setFilteredData(solution);
                            setOpen(true);
                          }}
                        >
                          Learn more
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        <div className="text-center flex flex-col gap-1 md:gap-2">
          <div className="max-w-[80%] mx-auto py-2 flex flex-col gap-2">
            <h2 className="font-medium text-[24px] md:text-[35px] text-[#071E22] max-w-[98%] md:max-w-[70%] mx-auto">
              Ignite possibilities. Contact us.
            </h2>
            <p className="text-[#071E22] font-semibold text-[12px] tracking-wide">
              Empower with Futuristic AI. Streamline service, capture leads,
              boost productivity. Personalized interactions, efficient
              workflows, and revolutionary content. Unlock your business
              potential with stacksinEDEN's AI empowerment. Get started now!{" "}
            </p>
          </div>
          <button className="text-[12px] md:text-[14px] text-[#F4C095] cursor-pointer tracking-tight font-semibold bg-[#071E22] px-4 md:px-6 py-2 md:py-3 active:scale-90 rounded-full mx-auto border-[1px] border-[#e5e5e5] transition-all ease-in-out duration-300 shadow-lg">
            Get started
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Solutions;
