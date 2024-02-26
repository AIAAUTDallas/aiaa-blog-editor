import React from 'react';
import {Row, Col, Container, Button} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Nav.module.css';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import AIAA_logo from "../../public/AIAA_Logo.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#1746a2] py-4">
        <div className="container mx-auto flex flex-wrap justify-center md:justify-between text-gray-400">
          <div className="flex flex-col w-full py-2 md:py-4 md:w-1/3">
            <div className="flex m-auto">
              <Image src={AIAA_logo} alt="AIAA UTD" width={28} height={28} className='mr-2' />
              <h2 className="text-sm text-whitefont-serif, font-family: Chivo, font-extrabold ">
                AIAA UTD
              </h2>
            </div>
            <p className="text-center">
              Aggressively Pursuing Aerospace Opportunity
            </p>
            <p className="text-center">© 2023, AIAA UTD.</p>
          </div>

          <div className="flex flex-col justify-center py-2 md:py-4 w-full md:w-1/3">
            <div className="flex justify-center">
              <a href="https://www.instagram.com/aiaa_utd/" target="_blank">
                <svg
                  className="h-5 w-12 text-teal-900"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="white"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {' '}
                  <path stroke="none" d="M0 0h24v24H0z" />{' '}
                  <rect x="4" y="4" width="16" height="16" rx="4" />{' '}
                  <circle cx="12" cy="12" r="3" />{' '}
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/aiaautd/"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  className=""
                >
                  <path
                    d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                    fill="#fff"
                  />
                </svg>
              </a>
              <div>
                <a href="https://discord.gg/BFjKqyEzGc" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-12"
                    fill="#FFFFFF"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    role="img"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a2647] flex flex-row p-3 text-center ">
        <p className="text-xs mx-auto flex justify-between text-white-400 ">
          This website is not an official publication of UT Dallas and does not
          represent the views of the university or its officers. The University
          of Texas at Dallas is an Equal Opportunity/Affirmative Action
          University.
        </p>
      </div>
    </>
  );
};

export default Footer;
