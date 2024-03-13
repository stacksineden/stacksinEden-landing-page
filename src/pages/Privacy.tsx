import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const privacyData = [
  {
    title: "Introduction",
    text: "Welcome to our Privacy Policy page. Here, we detail our policies concerning the collection, use, and disclosure of personal data when you utilize our Service, along with the choices available to you regarding that data. We prioritize your privacy and are dedicated to safeguarding your personal information.",
  },
  {
    title: "Information We Collect",
    text: "The types of personal data we gather may encompass, yet are not confined to, Identity Data, Contact Data, Financial Data, Transaction Data, and Technical Data.",
  },
  {
    title: "How We Collect Your Personal Data",
    text: "We collect data through direct interactions with our website and services. Additionally, automated technologies record your interactions with our website to enhance the user experience and provide valuable insights.",
  },
  {
    title: "Information Sharing",
    text: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this Privacy Policy.",
  },
  {
    title: "Security",
    text: "We implement security measures to protect your personal information. However, no method of transmission over the internet is entirely secure, and we cannot guarantee absolute security.",
  },
  {
    title: "Third-Party Links",
    text: "Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these sites.",
  },
  {
    title: "Changes to This Policy",
    text: "We retain the right to update this policy at any time. Any modifications will be published on this page, accompanied by an updated revision date.",
  },
];

const Privacy = () => {
  return (
    <div className="max-w-[99%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] w-full bg-white mx-auto px-5 mt-2">
      <Navbar />
      <div className="flex justify-center items-center text-center w-[97%] md:w-[60%] mx-auto my-[2rem] md:my-[4rem] tracking-wide flex-col gap-3">
        <p className="text-[30px] md:text-4xl font-medium text-[#071E22]">
          Your Privacy Matters: Our Commitment to Data Security.
        </p>
      </div>
      {privacyData &&
        privacyData?.map((item, _i) => (
          <div className="w-[85%] mx-auto flex flex-col gap-3 my-5" key={_i}>
            <div className="text-xl text-black font-semibold">
              {_i + 1}. {item?.title}
            </div>
            <div className="text-black opacity-80 text-base tracking-wide">
              {item?.text}
            </div>
          </div>
        ))}

      <Footer />
    </div>
  );
};

export default Privacy;
