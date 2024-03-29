import React from "react";

const Footer = () => {
  return (
    <div className="">
      <footer class="rounded-lg">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm flex justify-center text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            All Rights Reserved.
          </span>
          <ul class="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                git-repository
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
