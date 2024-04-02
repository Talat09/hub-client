import React from "react";

const MyPortfolio = () => {
  return (
    <div className="p-6 m-6 border-2 border-primary rounded-md max-w-[1024px] mx-auto">
      <h1 className="text-3xl md:text-5xl font-semibold text-center">
        Talat Mahmud
      </h1>
      <p className="text-2xl md:text-3xl text-center mt-2">
        MERN Stack Developer
      </p>
      <ContactInfo />
      <hr className="mt-5" />
      <h2 className="text-3xl font-bold text-gray-700 my-2 uppercase">
        Skills
      </h2>
      <hr />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-5">
        <SkillCategory
          title="Expertise"
          skills={[
            "HTML",
            "CSS",
            "Tailwind CSS",
            "Bootstrap",
            "JavaScript",
            "React JS",
            "Redux",
            "Express Js",
            "Json Web Token",
            "MongoDb",
            "My SQL",
          ]}
        />
        <SkillCategory title="Comfortable" skills={["Daisy UI"]} />
        <SkillCategory
          title="Tools"
          skills={[
            "VS Code",
            "Git/Github",
            "Firebase",
            "Netlify",
            "Chrome Dev",
            "Postman",
            "C-Panel",
          ]}
        />
      </div>
      <h2 className="text-3xl font-bold text-gray-700 my-4 uppercase">
        Projects
      </h2>
      <hr />
      <div className="project-links">
        {/* project-1 */}
        <div className="Project-1">
          <h3 className="text-2xl font-semibold">Juhi’s Fashion</h3>
          <ul>
            <li className="list-disc font-mono ms-2">
              Comprehensive e-commerce platform for Juhis Fashion, offering a
              user-friendly interface
            </li>
            <li className="list-disc font-mono ms-2">
              Users can explore diverse product categories and view detailed
              product information.
            </li>
            <li className="list-disc font-mono ms-2">
              Seamless shopping experience with the ability to add products to
              the cart.
            </li>
            <li className="list-disc font-mono ms-2">
              Advanced filtering options by brand, color, and price for a
              tailored shopping experience.
            </li>
            <li className="list-disc font-mono ms-2">
              Robust search functionality for quickly finding specific products.
            </li>
            <li className="list-disc font-mono ms-2">
              Secure authentication using Auth0, enabling user login and logout.
            </li>
          </ul>
          <SkillCategory
            title="Technology"
            skills={[
              "React Js",
              "Tailwind Css",
              "Daisy UI",
              "Fromspree",
              "Auth0",
              "Express Js",
              "MongoDB",
            ]}
          />

          <ContactItem
            title="Live Link:"
            value="https://juhis-fashion.netlify.app/"
            href="https://juhis-fashion.netlify.app/"
          />
        </div>
        {/* project-2 */}
        <div className="Project-1">
          <h3 className="text-2xl font-semibold">Juhi’s Fashion</h3>
          <ul>
            <li className="list-disc font-mono ms-2">
              Comprehensive e-commerce platform for Juhis Fashion, offering a
              user-friendly interface
            </li>
            <li className="list-disc font-mono ms-2">
              Users can explore diverse product categories and view detailed
              product information.
            </li>
            <li className="list-disc font-mono ms-2">
              Seamless shopping experience with the ability to add products to
              the cart.
            </li>
            <li className="list-disc font-mono ms-2">
              Advanced filtering options by brand, color, and price for a
              tailored shopping experience.
            </li>
            <li className="list-disc font-mono ms-2">
              Robust search functionality for quickly finding specific products.
            </li>
            <li className="list-disc font-mono ms-2">
              Secure authentication using Auth0, enabling user login and logout.
            </li>
          </ul>
          <SkillCategory
            title="Technology"
            skills={[
              "React Js",
              "Tailwind Css",
              "Daisy UI",
              "Fromspree",
              "Auth0",
              "Express Js",
              "MongoDB",
            ]}
          />

          <ContactItem
            title="Live Link:"
            value="https://juhis-fashion.netlify.app/"
            href="https://juhis-fashion.netlify.app/"
          />
        </div>
        {/* project-3 */}
        <div className="Project-1 my-4">
          <h3 className="text-2xl font-semibold">Websites For All</h3>
          <ul>
            <li className="list-disc font-mono ms-2">
              Developed an application for Websites Developed Agency.
            </li>
            <li className="list-disc font-mono ms-2">
              Developed Optimized Ui/Ux
            </li>
            <li className="list-disc font-mono ms-2">
              The client can know about their services.
            </li>
            <li className="list-disc font-mono ms-2">
              Client can take service by messenger.
            </li>
          </ul>
          <SkillCategory
            title="Technology"
            skills={[
              "Vite Js",
              "React Js",
              "Tailwind Css",

              "React-Countup",
              "React Icons",
              "Formspree",
              "LiveChat",
            ]}
          />

          <ContactItem
            title="Live Link:"
            value="https://webforall.ca/"
            href="https://webforall.ca/"
          />
        </div>
      </div>
      <h2 className="text-3xl font-bold text-gray-700 my-4 uppercase">
        Education
      </h2>
      <hr />
      <div className="education mt-5">
        <p className="text-xl text-gray-600">
          B.Sc. Eng. in Computer Science & Engineering
        </p>
        <p className="text-xl text-gray-600">East Delta University </p>
        <p className="text-xl text-gray-600">January 2018 – 2022</p>
      </div>
    </div>
  );
};

const ContactInfo = () => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
    <div>
      <ContactItem title="Address" value="Chittagong, Bangladesh" />
      <ContactItem
        title="Phone"
        value="+880 1781439125"
        href="tel:+8801781439125"
      />
      <ContactItem
        title="Email"
        value="talat1.web@gmail.com"
        href="mailto:talat1.web@gmail.com"
      />
    </div>
    <div>
      <ContactItem
        title="Portfolio"
        value="https://talat-mahmud-portfolio.vercel.app/"
        href="https://talat-mahmud-portfolio.vercel.app/"
      />
      <ContactItem
        title="GitHub"
        value="github.com/Talat09"
        href="https://github.com/Talat09"
      />
      <ContactItem
        title="LinkedIn"
        value="linkedin.com/in/talat09"
        href="https://linkedin.com/in/talat09"
      />
    </div>
  </div>
);

const ContactItem = ({ title, value, href }) => (
  <p className="font-semibold">
    {title}:{" "}
    <a className="text-blue-600" href={href}>
      {value}
    </a>
  </p>
);

const SkillCategory = ({ title, skills }) => (
  <div>
    <h2 className="text-xl font-bold text-gray-700 my-2 uppercase">{title}</h2>
    <hr className="w-1/3" />
    <div className="grid grid-cols-2 gap-4 mt-5">
      {skills.map((skill, index) => (
        <span key={index} className="bg-primary text-white p-2 rounded-md mr-2">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default MyPortfolio;
