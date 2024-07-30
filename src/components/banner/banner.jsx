import styles from "@/components/listing/listing.module.css";
import Link from "next/link";
import Sidebar from "@/components/sidebar/sidebar"
async function getData() {
  const ApiUrl = "https://ashgamewitted.wpcomstaging.com/wp-json/wp/v2/";
  const bannerId = 606508198;

  const bannerResponse = await fetch(
    ApiUrl + `posts?tags=${bannerId}&_embed&per_page=4&orderby=date&order=desc`,
    {
      next: { revalidate: 180 },
    }
  );
  const bannerData = await bannerResponse.json();

  return bannerData;
}

const HeroBanner = async () => {
  const bannerData = await getData();
  return (
    <div className={`${styles.heroCardWrap} mt-4`}>
      <div className={styles.container}>
        <div className={styles.heroCardBody}>
          <div className={styles.heroCardBox}>
            {bannerData && bannerData.length > 0 ? (
              bannerData.map((card, index) => (
                <Link
                  key={index}
                  prefetch={true}
                  href={`/${card._embedded["wp:term"][0][0].slug}/${card.slug}`}
                >
                  <div
                    className={styles.heroCardBoxItem}
                    style={{
                      background: `url(${card.jetpack_featured_media_url})`,
                    }}
                  >
                    <div className={styles.heroCardBoxItemInfo}>
                      <h6 className={styles.heroCardBoxItemBags}>
                        {card._embedded["wp:term"][0][0].name}
                      </h6>
                      <h4
                        className={styles.heroCardBoxItemName}
                        dangerouslySetInnerHTML={{
                          __html: card.title.rendered,
                        }}
                      ></h4>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p>No data found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
