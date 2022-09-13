import NavBar from "../components/NavBar";
import Carousel from "../components/Carousel";
import Image from "next/image";
import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.navbar}>
        <NavBar />
      </div>
      <div className={styles.carousel}>
        <Carousel show={"one"} type="header">
          <Image
            width={1500}
            height={600}
            src={require("../public/assets/img/sushi-club.png")}
          />
          <Image
            width={1500}
            height={600}
            src={require("../public/assets/img/header_2.png")}
          />
        </Carousel>
      </div>
    </>
  );
}
