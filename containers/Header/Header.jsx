import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import Image from "next/image";
import styles from "./Header.module.css";

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
            src={require("../../assets/img/sushi-club.png")}
          />
          <Image
            width={1500}
            height={600}
            src={require("../../assets/img/header_2.png")}
          />
        </Carousel>
      </div>
    </>
  );
}
