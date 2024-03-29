import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";
import { BsMailbox } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="lg:mx-80 lg:my-20 mx-5 mt-20">
      <div>
        <div className="text-4xl font-bold lg:w-4/5">
          <h1>Software Engineer</h1>
          <p>creating thoughtful, intuitive interfaces.</p>
        </div>

        <div className="my-10 text-gray-400 text-lg">
          <p className="my-5">
            I'm Utkarsh Pandey, a passionate Software Engineer entering the
            professional realm with a fervent drive for innovation and
            problem-solving. As a fresher in the field, I bring a solid
            understanding of software development principles and an unwavering
            eagerness to expand my knowledge and skills.
          </p>

          <p className="my-5">
            With a foundation built on academic excellence and a thirst for
            continuous learning, I am ready to immerse myself in real-world
            challenges and contribute positively to any team I join. I approach
            tasks with meticulous attention to detail and a proactive mindset,
            always striving to deliver high-quality results.
          </p>

          <p className="my-5">
            I'm excited to embark on this journey, eager to collaborate with
            experienced professionals, and determined to make meaningful
            contributions to projects as I grow in my career as a Software
            Engineer.
          </p>
        </div>

        <div>
            
            <div className="flex items-center gap-2">
                <Link href="https://www.linkedin.com/in/utkarsh125/" className="text-3xl">
                    <FaLinkedin />
                </Link>
                <Link href="https://www.github.com/utkarsh125" className="text-3xl">
                    <FaSquareGithub />
                </Link>

                <div className="text-md p-2 cursor-pointer hover:text-gray-900 hover:bg-white px-4 bg-gray-900 rounded-3xl">
                  <p className="flex gap-2 items-center">
                    <BsMailbox className="text-md font-bold"/>{`Email Me.`}
                    </p>
                </div>
                
                
            </div>
        </div>
      </div>
      <hr className="lg:mx-60 lg:my-10 md:mx-52 md:my-10 my-10 mx-20"/>
      
    </div>
  );
};

export default Hero;
