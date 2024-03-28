import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="lg:mx-80 lg:my-20 ">
      <div>
        <div className="text-4xl font-bold w-4/5">
          <h1>Software Engineer</h1>
          <p>creating, thoughtful, intuitive interfaces.</p>
        </div>

        <div className="my-10 text-gray-400">
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
            
            <div className="flex gap-2 text-3xl">
                <Link href="https://www.linkedin.com/in/utkarsh125/">
                    <FaLinkedin />
                </Link>
                <Link href="https://www.github.com/utkarsh125">
                    <FaSquareGithub />
                </Link>
            </div>
        </div>
      </div>
      <hr className="mx-60 my-10"/>
      
    </div>
  );
};

export default Hero;
