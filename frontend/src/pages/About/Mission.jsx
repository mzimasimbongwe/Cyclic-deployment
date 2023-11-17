import React from "react";
import { mission } from "../../assets";

const MissionPage = () => {
  return (
    <div className="w-full bg-[#DCF3CA] py-24 py-6 md:py-24 ">
      <div className="md:max-w-[1480px] max-w-[540px] mx-auto w-full h-full flex flex-col md:flex-row justify-center  md:justify-between items-center">
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-4xl text-black font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-black mt-12">
            EduConnect is on a mission to break barriers in education and create
            a global community of learners. We go beyond traditional education,
            connecting students from diverse backgrounds to collaborate, share
            knowledge, and gain a broader perspective. Our aim is to provide
            quality education as a universal right, breaking down geographical
            and socio-economic barriers. Through this, we contribute to a more
            equitable and just world.
          </p>
          <p className="text-lg text-black mt-12">
            EduConnect is dedicated to several core principles. First and
            foremost, we believe in the power of collaboration and partnership.
            We actively seek collaborations with educational institutions,
            non-profit organizations, and government entities to leverage their
            expertise, resources, and networks. By working together, we can
            amplify our impact and reach a larger audience, ensuring that our
            educational initiatives have a far-reaching and sustainable effect.
          </p>
        </div>
        <div className="w-full md:w-1/2 p-4 flex space-x-4">
          <div>
            <img
              src={mission}
              alt="Our Mission"
              className="w-full h-100 rounded-lg"
            />
          </div>
        </div>
        <p className="w-full text-lg text-black mt-12">
          Secondly, EduConnect is committed to innovation and adaptability. We
          understand that the educational landscape is constantly evolving,
          driven by technological advancements and changing societal needs. As
          such, we strive to stay at the forefront of educational innovation,
          embracing emerging technologies, pedagogical approaches, and learning
          methodologies. By continuously adapting and refining our programs, we
          can provide learners with the most relevant and effective educational
          experiences. Furthermore, EduConnect places great importance on
          research and evidence-based practices. We believe that education
          should be informed by rigorous research and data analysis, ensuring
          that our programs are grounded in best practices and yield measurable
          outcomes. By conducting research, monitoring progress, and evaluating
          the impact of our initiatives, we can continuously improve and refine
          our educational offerings.
        </p>
      </div>
    </div>
  );
};

export default MissionPage;
