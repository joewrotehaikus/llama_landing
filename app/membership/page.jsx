import styles from "../page.module.css";
import Link from "next/link";

export const metadata = {
  title: "Membership | LLAMA",
  description: "Work opportunities in our company",
};

export default function MembershipPage() {
  return (
    <main className={styles.main}>
      <h2>Membership</h2>
      <p>
        At Learning, Language, and Multicultural Advancement, membership means
        having a voice in how the company operates. It’s a responsibility and a
        recognition of your contributions to our shared mission.
      </p>

      <h3>Who Can Become a Member?</h3>
      <p>
        Our operating agreement outlines the basic requirements for membership,
        ensuring that members are meaningfully involved in our work. To be
        eligible, a prospective member must:
      </p>
      <ul>
        <li>Be employed by or have an active contract with the company</li>
        <li>
          Have reached 30 days since their start date or contract's effective
          date
        </li>
        <li>
          Have logged or received credit for at least 30 hours of work with the
          company
        </li>
      </ul>
      <p>
        The Board of Directors may also establish additional criteria at their
        discretion, based on the needs and direction of the company.
      </p>

      <h3>How We Work</h3>
      <p>
        As we continue developing and monetizing our projects, most of our
        current contracts are service exchanges, not paid positions. We
        understand that this isn’t a fit for everyone, but we’re building a
        foundation for future growth—and for more traditional compensation as we
        scale.
      </p>

      <h3>Join the Team</h3>
      <p>
        If you're excited by our mission and think you could help bring
        value—whether through code, design, outreach, or new ideas—you might be
        exactly who we need.{" "}
        <Link className={styles.link} href="/careers">
          Visit our Careers page to apply or learn more.
        </Link>
      </p>

      <p>
        Want to ask some questions first?{" "}
        <Link className={styles.link} href="/contact">
          Fill out the form on our Contact page.
        </Link>
      </p>

    </main>
  );
}
