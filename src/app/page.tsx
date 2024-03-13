import Image from 'next/image';
import styles from './page.module.css';
import FullPageGrid from '@/components/FullPageGrid';
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  GridItem,
} from '@chakra-ui/react';

export default function Home() {
  return (
    <main className={styles.main}>
      <FullPageGrid>
        <Card
          gridColumnStart={{ base: 1 }}
          gridColumnEnd={{ base: 5, md: 9, xl: 13 }}
          gridRowStart={{ base: 1 }}
          gridRowEnd={{ base: 2 }}
          borderRadius={'1px'}
        >
          Grid Item - Title
        </Card>

        {/* "What is this site?" note */}
        <Card
          gridColumnStart={{ base: 1, md: 1, xl: 1 }}
          gridColumnEnd={{ base: 5, md: 5, xl: 6 }}
          gridRowStart={{ base: 2, md: 2, xl: 2 }}
          gridRowEnd={{ base: 5, md: 3, xl: 5 }}
          borderRadius={'1px'}
        >
          <CardHeader fontSize={'20px'}>What is this site?</CardHeader>
          <Divider />
          <CardBody>{'stickyNoteText'}</CardBody>
        </Card>
      </FullPageGrid>
    </main>
  );
}

//This is the old home page
function old_Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore starter templates for Next.js.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
