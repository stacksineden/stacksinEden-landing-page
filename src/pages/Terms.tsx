import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const termsData = [
  {
    title: "Introduction",
    text: "Welcome to stacksinEDEN. These Terms of Service regulate your access to and utilization of our website and services. By accessing or using the service, you agree to be bound by these Terms.",
  },
  {
    title: "Services Provided",
    text: "stacksinEDEN provides Autonomous Agent Development, Enterprise Consulting, Chatbot Development, and Automation Services, all subject to the terms and conditions outlined in this document.",
  },
  {
    title: "Changes to Terms",
    text: "We retain the right to amend these Terms at any time. Users will be notified of any changes through the posting of the updated Terms on this site. Your continued use of the service following such modifications constitutes your agreement to the new Terms.",
  },
  {
    title: "Account Registration and Usage",
    text: "To utilize specific features of our service, you may need to create an account. You commit to furnishing accurate, current, and complete information during the registration process, and you agree to update such information to maintain its accuracy, currency, and completeness.",
  },
  {
    title: "User Conduct",
    text: "You commit to utilizing the service solely for lawful purposes and agree not to use it for any illegal or unauthorized activities.",
  },
  {
    title: "Termination",
    text: "We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason, including, but not limited to, a breach of the Terms.",
  },
  {
    title: "Disclaimer and Limitation of Liability:",
    text: `The service and its content are provided "as is" without any warranty of any kind. In no event will stacksinEDEN, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including, without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of, or inability to access or use, the service.`,
  },
  {
    title: "Contact Us",
    text: "For any questions about these Terms, please contact us using the following information: Email Address: gridhouseorg@gmail.com",
  },
];

const Terms = () => {
  return (
    <div className="max-w-[99%] md:max-w-[98%] lg:max-w-[98%] xl:max-w-[98%] w-full bg-white mx-auto px-5 mt-2">
      <Navbar />
      <div className="flex justify-center items-center text-center w-[97%] md:w-[60%] mx-auto my-[2rem] md:my-[4rem] tracking-wide flex-col gap-3">
        <p className="text-[30px] md:text-4xl font-medium text-[#071E22]">
          Terms of Service: Your Guide to a Seamless Experience.
        </p>
      </div>
      {termsData &&
        termsData?.map((item, _i) => (
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

export default Terms;
