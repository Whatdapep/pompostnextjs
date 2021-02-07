import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home({ posts }) {
  const { articles } = posts;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center mx-auto">
        <h1>เนื้อหาข่าวสาร API FREE</h1>

        {posts &&
          articles &&
          articles &&
          articles.map((val,i) => {
            // console.log(val)
            return (
              <div className="py-2" key={i}>
                <a href={val.url} target="_blank" rel="no">
                  <h2 className="font-medium text-gray-800 text-lg">
                    {val.title}
                  </h2>
                </a>
                <div className="flex ">
                  <div className="w-1/3 mx-auto flex justify-center">
                    <img
                      src={`${val.urlToImage}`}
                      className="w-60 h-42 rounded-sm"
                      alt={`${val.title}`}
                    />
                  </div>
                  <div className="w-2/3">
                    <h3 className="font-light text-gray-600 text-left">
                      {val.description}
                    </h3>
                    <br />
                    <h4 className="font-light text-gray-600 text-sm text-left">
                      {val.author} {val.publishedAt}
                    </h4>

                    <h4 className="text-sm text-left">
                      อ้างอิง
                      {val.source.name}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=th&apiKey=f4693406f98e42158b4d6022c6fc04ae"
  );
  const posts = await res.json();
  // console.log(posts);
  return {
    props: {
      posts,
    },
  };
}
