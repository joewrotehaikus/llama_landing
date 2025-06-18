import styles from "../page.module.css";
import WorkApplication from "./workApplication";

export const metadata = {
  title: "Careers | LLAMA",
  description: "Work opportunities in our company",
};

export default function CareersPage() {
  const opportunities = [
    {
      title: "Intern JS Developer",
      location: "Remote",
      duration: "One month",
      requirements: [
        "Basic knowledge of JavaScript",
        "Willingness to learn",
        "Previous projects to show",
      ],
      description:
        "Want to jump in on an important open source project, learn how to work with groups, and have verifiable experience? This is a great opportunity to show off just how skilled you are with coding and pick up some more skills along the way!",
    },
    {
      title: "Student for Mentorship",
      location: "Remote",
      duration: "One month",
      requirements: [
        "Ability to communicate in English or Hindi",
        "Willingness to learn",
        "Persistance and perseverance with problem solving",
        "No experience or programming knowledge necessary",
      ],
      description:
        "Thought about programming but did not want to learn it on your own? Here's an opportunity to learn the basics while helping create learning resources for yourself and others. You will be working with one or more mentors who will talk you through some of the basics. We will help you go from zero to contributing to an open source project. All the while, you will be using and contributing to learning materials.",
    },
    {
      title: "Subcontractor on Reserve",
      location: "Remote",
      duration: "One year",
      requirements: [
        "Verifiable skills in programming",
        "Willingness to adhere to our coding standards",
        "Good communication skills and positive attitude",
      ],
      description:
        "We are preparing to market to people who want custom coding. On occasion, our current members will not have time to meet the project goals by deadline. This is your chance to take some of the money earned for the project in exchange for helping us to finish on deadline.",
    },
    {
      title: "Something Special to Offer",
      location: "Remote",
      duration: "To be determined",
      requirements: [
        "Verifiable skills in programming",
        "Willingness to adhere to our coding standards",
        "Good communication skills and positive attitude",
      ],
      description:
        "Do you think you know something we don't, but we should? You might be right! Put in your pitch, and we'll hear you out.",
    },
  ];

  return (
    <main className={`${styles.main} ${styles.cardPage}`}>
      <h2>Careers and Work Opportunities</h2>

      <h3>Help Us Build Something Meaningful</h3>
      <p>
        We're a democratically run web development company with a mission right
        in our name: Learning, Language, and Multicultural Advancement. If
        you're passionate about building tools that help people learn, grow, and
        connect across cultures, we want to hear from you.
      </p>
      <p>
        Some of our current opportunities are not paid roles. But whether you're
        a developer, designer, writer, educator, or organizer, your contribution
        could be the key to unlocking our next stage of growth. All work is
        considered when proposing a person for membership, thus giving them
        voting rights.
      </p>

      <h3>Open Opportunities</h3>
      <p>
        We accept general applications from people with skills or interests in:
      </p>
      <div className={`${styles.cards}`}>
        {opportunities.map((opp) => (
          <div className={`${styles.card}`} key={opp.title}>
            <h4>{opp.title}</h4>
            <p>
              <span className={styles.card_bold}>Location: </span>
              {opp.location}
            </p>
            <p>
              <span className={styles.card_bold}>Duration: </span>
              {opp.duration}
            </p>
            <p className={styles.card_bold}>Requirements</p>
            <ul>
              {opp.requirements.map((req) => (
                <li key={req}>{req}</li>
              ))}
            </ul>
            <p className={styles.card_desc}>{opp.description}</p>
          </div>
        ))}
      </div>
      <p>
        Even if your background doesn’t fall into one of those areas, we still
        encourage you to apply. We grow through collaboration and shared
        purpose.
      </p>
      <p>
        The most important thing for our company is persistance, endurance, and
        staying connected with the team.
      </p>

      <WorkApplication opportunities={opportunities} />
    </main>
  );
}
