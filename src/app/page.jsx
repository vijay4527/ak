import HeroBanner from "@/components/banner/banner";
import styles from "./page.module.css";
import ListingComponent from "@/components/listing/listing";
export default function Home() {
  return (
    <>
      <ListingComponent></ListingComponent>
      <HeroBanner></HeroBanner>

    </>
  );
}
