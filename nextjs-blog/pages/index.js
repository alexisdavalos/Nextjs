import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a Fullstack Engineer with a passion for constantly learning and
          pushing the boundaries of my comfort zone. I have 2+ years of
          experience in Front-End Development working on design, deployment, and
          maintenance of web-based projects and 3+ years of experience in
          Graphic Design and Marketing. I am very comfortable using design tools
          like Photoshop, Illustrator, After Effects, and Premiere.
        </p>
        <ul>
          <li>
            🔭 I’m currently looking for a new software engineering role and
            learning German 🇩🇪
          </li>
          <li>
            🌱 I’m currently learning to better myself through daily practice
            and discipline
          </li>
          <li>
            🏋 I’m extremely passionate about technology, fitness, philosophy
            and language
          </li>
          <li>
            📚 I’m currently reading "The Secret Teachings of All Ages" by Manly
            P. Hall
          </li>
          <li>
            💬 Ask me about design, crypto, surfing, skiing, skating, and
            philosophy
          </li>
          <li>
            ⭐️ Fun fact: I speak three languages: [ 🇺🇸 English | 🇪🇸 Spanish |
            🇷🇺 Russian ]
          </li>
          <li>
            💼 Check out my portfolio, built with React.js or download my resume
          </li>
        </ul>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
