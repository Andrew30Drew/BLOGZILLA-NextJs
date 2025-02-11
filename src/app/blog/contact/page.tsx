import React from "react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

export default function contact() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <div>
        <h1 className="text-3xl text-purple-800 font-bold mb-4">Contact Us!</h1>
        <p>
          We’d love to hear from you! Whether you have a question, feedback, or
          just want to say hi, feel free to reach out.
        </p>
        <br />
        <h3 className="text-lg text-purple-700 font-bold mb-3">
          Get in touch !
        </h3>
        <ul className="list-inside pl-2" style={{ listStyleType: "circle" }}>
          <li>
            <span>
              Email:{" "}
              <a className="text-blue-500" href="mailto:contact@example.com">
                contact@example.com
              </a>
            </span>
          </li>
          <li>
            <span>
              Website:{" "}
              <a className="text-blue-500" href="https://www.example.com">
                www.example.com
              </a>
            </span>
          </li>
        </ul>
        <br />
        <h3 className="text-lg text-purple-700 font-bold mb-3">
          Social Media:
        </h3>
        <ul className="list-inside pl-2" style={{ listStyleType: "square" }}>
          <span className="font-bold text-gray-800">
            <li>
              <a
                href="https://www.example.com"
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="inline-block mr-2 text-blue-500" />{" "}
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.example.com"
                className="text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="inline-block mr-2" /> Facebook
              </a>
            </li>
            <li>
              <a
                href="https://www.example.com"
                className="text-orange-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="inline-block mr-2" /> Instagram
              </a>
            </li>
          </span>
        </ul>
      </div>
    </div>
  );
}
