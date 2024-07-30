import React from "react";
import styles from "@/components/sidebar/sidebar.module.css";
const sidebar = () => {
  return (
    <div className={styles["post-sidebar-area"]}>
      <div className={styles["sidebar-widget-area"]}>
        <h5 className={styles.title}>Latest Posts</h5>

        <div className={styles["widget-content"]}>
          <div
            className={`${styles["single-blog-post"]} d-flex align-items-center widget-post`}
          >
            {/* <!-- Post Thumbnail --> */}
            <div className={styles["post-thumbnail"]}>
              <img src="/lp1.jpg" alt="" />
            </div>
            {/* <!-- Post Content --> */}
            <div className={styles["post-content"]}>
              <a href="#" className={styles["post-tag"]}>
                Lifestyle
              </a>
              <h4>
                <a href="#" className={styles["post-headline"]}>
                  Party people in the house
                </a>
              </h4>
              <div className={styles["post-meta"]}>
                <p>
                  <a href="#">12 March</a>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles["single-blog-post"]} d-flex align-items-center widget-post`}
          >
            {/* <!-- Post Thumbnail --> */}
            <div className={styles["post-thumbnail"]}>
              <img src="/lp1.jpg" alt="" />
            </div>
            {/* <!-- Post Content --> */}
            <div className={styles["post-content"]}>
              <a href="#" className={styles["post-tag"]}>
                Lifestyle
              </a>
              <h4>
                <a href="#" className={styles["post-headline"]}>
                  Party people in the house
                </a>
              </h4>
              <div className={styles["post-meta"]}>
                <p>
                  <a href="#">12 March</a>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles["single-blog-post"]} d-flex align-items-center widget-post`}
          >
            {/* <!-- Post Thumbnail --> */}
            <div className={styles["post-thumbnail"]}>
              <img src="/lp1.jpg" alt="" />
            </div>
            {/* <!-- Post Content --> */}
            <div className={styles["post-content"]}>
              <a href="#" className={styles["post-tag"]}>
                Lifestyle
              </a>
              <h4>
                <a href="#" className={styles["post-headline"]}>
                  Party people in the house
                </a>
              </h4>
              <div className={styles["post-meta"]}>
                <p>
                  <a href="#">12 March</a>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles["single-blog-post"]} d-flex align-items-center widget-post`}
          >
            {/* <!-- Post Thumbnail --> */}
            <div className={styles["post-thumbnail"]}>
              <img src="/lp1.jpg" alt="" />
            </div>
            {/* <!-- Post Content --> */}
            <div className={styles["post-content"]}>
              <a href="#" className={styles["post-tag"]}>
                Lifestyle
              </a>
              <h4>
                <a href="#" className={styles["post-headline"]}>
                  Party people in the house
                </a>
              </h4>
              <div className={styles["post-meta"]}>
                <p>
                  <a href="#">12 March</a>
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles["single-blog-post"]} d-flex align-items-center widget-post`}
          >
            {/* <!-- Post Thumbnail --> */}
            <div className={styles["post-thumbnail"]}>
              <img src="/lp1.jpg" alt="" />
            </div>
            {/* <!-- Post Content --> */}
            <div className={styles["post-content"]}>
              <a href="#" className={styles["post-tag"]}>
                Lifestyle
              </a>
              <h4>
                <a href="#" className={styles["post-headline"]}>
                  Party people in the house
                </a>
              </h4>
              <div className={styles["post-meta"]}>
                <p>
                  <a href="#">12 March</a>
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </div>    
    </div>
  );
};

export default sidebar;
