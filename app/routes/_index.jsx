import "../styles/home.css";
import jeremyProfilePic from "../assets/Jeremy.jpg";
import FounderCard from "../components/FounderCard";
export const meta = () => {
  return [
    { title: "Simpl Machine" },
    { name: "description", content: "Welcome to Simpl Machine" },
  ];
};

const founders = [
  {
    name: "Jeremy Lentz",
    image: jeremyProfilePic,
    bio: "This is where I would type something if I wanted to at the moment",
    github: "https://github.com/jeremyMLtz",
    linkedin: "https://www.linkedin.com/in/jeremy-lentz-1321a7b1/",
  },
  {
    name: "Tyler Glaze",
    image: jeremyProfilePic,
    bio: "Something something about Tyler",
    github: "https://github.com/xtglazex",
    linkedin: "https://www.linkedin.com/in/tyler-glaze-6b15b459/",
  },
];

export default function Index() {
  return (
    <div>
      <header>
        <a className='company-link' href='/' rel='noopener noreferrer'>
          Simpl Machine
        </a>
        <div className='header-copy-container'>
          <h1>Autonomous Test Automation Made Easy</h1>
          <h2>
            Stealth mode startup bringing you fully generated test suites with
            the click of a button
          </h2>
        </div>
      </header>
      {/* Unfinished */}
      <section id='founders'>
        <h3>The Builders</h3>
        {founders.map((founder) => (
          <FounderCard key={founder.name} founder={founder} />
        ))}
      </section>
    </div>
  );
}
