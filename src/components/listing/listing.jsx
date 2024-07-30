import React from "react";
import styles from "@/components/listing/listing.module.css";
import Link from "next/link";
import SideBar from "@/components/sidebar/sidebar";

const lisitng = () => {
  const data = [
    {
      tag: "Lifestyle",
      title: "Party people in the house",
      description:
        "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
      image: "/5.jpg",
    },
    {
      tag: "Lifestyle",
      title: "We love colors in 2024",
      description:
        "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
      image: "/6.jpg",
    },
    {
      tag: "Lifestyle",
      title: "Party people in the house",
      description:
        "Curabitur venenatis efficitur lorem sed tempor. Integer aliquet tempor cursus. Nullam vestibulum convallis risus vel condimentum. Nullam auctor lorem in libero luctus, vel volutpat quam tincidunt.",
      image: "/5.jpg",
    },
    
  ];

  return (
    <div className={styles.latestWrap}>
      <div className={styles.container}>
        <div className={styles.latestBody}>
          <div className={styles.latestContent}>
            <div className={styles.titleName}>{}</div>
            <div className={styles.latestBox}>
              {data && data.length > 0 ? (
                data.map((card, index) => (
                  <div className={styles.latestBoxItem} key={index}>
                    <img
                      className={styles.latestImg}
                      src={card.image}
                      alt="img"
                    />
                    <div className={styles.latestInfo} key={index}>
                      <Link href={`/${card.tag}`} prefetch={true}>
                        <h6>{card.tag}</h6>
                      </Link>
                      <Link
                        href={"/" + card.tag + "/" + card.title}
                        key={index}
                        prefetch={true}
                      >
                        <p>{card.title}</p>
                      </Link>

                      <h5 className="description">
                        <span>{card.description}</span>
                      </h5>
                    </div>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          </div>
          <SideBar></SideBar>
        </div>
      </div>
    </div>
  );
};

export default lisitng;
