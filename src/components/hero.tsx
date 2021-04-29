import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero: React.FC = () => (
  <div className="mx-auto p-20 w-1/2 h-96 bg-gradient-to-br from-glass-5 to-glass-20 rounded-lg shadow-lg backdrop-filter backdrop-blur-md flex flex-col justify-center items-center">
    <h1 className="text-2xl text-glass-60">Next.js Starter</h1>
    <p className="leading-4 text-gray-700 pt-8 pb-16">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci deserunt
      cumque repellendus praesentium nemo voluptate cupiditate eos, voluptatem
      facilis iste similique labore error quia saepe aliquam. Incidunt
      necessitatibus dolorem ut?
    </p>
    <a
      href="https://github.com/tricertc/nextjs-starter"
      target="_blank"
      className="bg-glass-50 text-gray-700 py-2 px-8 rounded shadow"
      rel="noreferrer"
    >
      <FontAwesomeIcon icon={faGithub} className="mr-2" />
      View on Github
    </a>
  </div>
);

export default Hero;
