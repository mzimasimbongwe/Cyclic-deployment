import React from "react";
import { mission, vision } from "../../assets";

const Mission = () => {
  return (
    <div className="w-full bg-[#DCF3CA] py-24 py-6 md:py-24">
      <div className="md:max-w-[1480px] max-w-[540px] mx-auto w-full h-full flex flex-col justify-center items-center">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-4xl text-black font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-black mt-12">
              EduConnect is on a mission to break barriers in education and
              create a global community of learners. We go beyond traditional
              education, connecting students from diverse backgrounds to
              collaborate, share knowledge, and gain a broader perspective. Our
              aim is to provide quality education as a universal right, breaking
              down geographical and socio-economic barriers. Through this, we
              contribute to a more equitable and just world.
            </p>
            <p className="text-lg text-black mt-12">
              EduConnect is dedicated to several core principles. First and
              foremost, we believe in the power of collaboration and
              partnership. We actively seek collaborations with educational
              institutions, non-profit organizations, and government entities to
              leverage their expertise, resources, and networks. By working
              together, we can amplify our impact and reach a larger audience,
              ensuring that our educational initiatives have a far-reaching and
              sustainable effect.
            </p>
          </div>
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
        <div className="w-full h-screen mt-20 ">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <div className="flex justify-center mt-4">
                <img
                  src={vision}
                  alt="Our Vision"
                  className="w-full h-100 rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl text-black font-bold mb-4">Our Vision</h2>
              <p className="text-lg text-black mt-12">
                EduConnect envisions a world where education transcends
                boundaries, fostering a global community of informed and
                empowered individuals. In this vision, EduConnect recognizes the
                transformative power of education and seeks to create a future
                where access to quality education is not limited by geographical
                location, socioeconomic status, or cultural barriers.
              </p>
              <p className="text-lg text-black mt-12">
                One of the key aspects of EduConnect's vision is the use of
                technology to bridge the gap between learners and educational
                resources. By harnessing the power of digital platforms,
                EduConnect aims to connect students and educators from around
                the world, providing them with opportunities to learn,
                collaborate, and exchange knowledge. Through online learning
                environments, interactive courses, and virtual classrooms,
                EduConnect creates a space where individuals can engage in
                meaningful educational experiences regardless of their physical
                location.
              </p>
            </div>
          </div>
          <p className="w-full text-lg text-black mt-12">
            Furthermore, EduConnect believes in the importance of diversity and
            cultural exchange in education. It recognizes that a truly global
            community of informed individuals is one that embraces different
            perspectives, experiences, and ideas. To achieve this, EduConnect
            promotes cross-cultural dialogue and offers opportunities for
            students and educators to connect with peers from diverse
            backgrounds. Through virtual exchange programs, international
            collaborations, and multicultural learning experiences, EduConnect
            fosters understanding, empathy, and appreciation for the richness of
            global cultures. EduConnect also understands that education goes
            beyond academic knowledge. It emphasizes the development of critical
            thinking, creativity, problem-solving skills, and emotional
            intelligence. By incorporating these essential skills into its
            educational programs, EduConnect prepares individuals to navigate
            the complexities of the modern world, equipping them with the tools
            they need to succeed in their personal and professional lives.
          </p>
          <p className="w-full text-lg text-black mt-12">
            In this vision, EduConnect is committed to inclusivity and
            accessibility. It strives to remove barriers to education by
            providing resources and support for learners with diverse needs,
            including those with disabilities or limited access to traditional
            educational institutions. Through adaptive learning technologies,
            personalized instruction, and inclusive practices, EduConnect
            ensures that everyone has the opportunity to benefit from education
            and contribute to the global community. EduConnect's vision extends
            beyond formal education systems. It recognizes the importance of
            lifelong learning and continuous personal growth. EduConnect
            envisions a world where individuals of all ages and backgrounds have
            access to educational opportunities that enable them to pursue their
            passions, acquire new skills, and adapt to the evolving demands of
            the future.
          </p>
          <div className="w-full py-6 mt-20 ">
            <h2 className="text-4xl text-black font-bold mb-4 px-10 ">
              Our Values
            </h2>
            <div className="flex flex-col justify-center items-center px-10 mt-4">
              <div className="grid grid-cols-3 gap-6 ">
                <div className="bg-pink-500/30 p-4 rounded-lg">
                  <h5 className="text-2xl text-black font-bold mb-4">
                    Innovation
                  </h5>
                  <p className="w-full text-lg text-black mt-8">
                    At EduConnect, we understand that innovation is crucial for
                    the advancement of education. We strive to be at the
                    forefront of educational technology, pedagogical approaches,
                    and learning methodologies. Through continuous research and
                    exploration, we seek out innovative solutions that can
                    enhance the learning experience and inspire creativity among
                    learners. We encourage educators to experiment with new
                    teaching methods and technologies, fostering a culture of
                    innovation that drives educational progress.
                  </p>
                </div>
                <div className="bg-indigo-500/30 p-4 rounded-lg">
                  <h5 className="text-2xl text-black font-bold mb-4">
                    Accessibility
                  </h5>
                  <p className="w-full text-lg text-black mt-8">
                    We firmly believe that education should be accessible to
                    all, regardless of their background, location, or abilities.
                    EduConnect is committed to breaking down barriers and
                    creating an inclusive environment where every learner can
                    thrive. We prioritize accessibility in the design of our
                    platforms and courses, ensuring that they are usable and
                    accommodating for individuals with disabilities. Moreover,
                    we actively work to make education financially accessible,
                    offering scholarships, grants, and low-cost options to
                    ensure that no one is left behind due to financial
                    constraints.
                  </p>
                </div>
                <div className="bg-sky-500 p-4 rounded-lg">
                  <h5 className="text-2xl text-black font-bold mb-4">
                    Community
                  </h5>
                  <p className="w-full text-lg text-black mt-8">
                    EduConnect is more than just an online platform; it is a
                    vibrant and supportive community. We recognize the power of
                    collaboration and the strength that comes from connecting
                    learners and educators from diverse backgrounds. Through our
                    community, learners have the opportunity to engage in
                    discussions, share ideas, and collaborate on projects. We
                    facilitate networking and mentorship opportunities,
                    encouraging the exchange of knowledge and fostering a sense
                    of belonging within the EduConnect community. We believe
                    that by nurturing a supportive educational network, learners
                    can gain valuable connections and support throughout their
                    educational journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
