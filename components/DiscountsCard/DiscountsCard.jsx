import Image from "next/image";
import styles from "./DiscountsCard.module.css";
import Button from "../Button/Button";
import { useRouter } from "next/router";

export default function DiscountsCard({ name, image, crmid }) {
    const router = useRouter();

    const handleClick = (e) => {
      e.preventDefault();
      router.push(`https://club.lanacion.com.ar/${crmid}`);
    };
  return (
    <div className={styles.container}>
      <Image src={image} layout="fill" className={styles.img} />
      <div className={styles.description}>
        <h1>{name}</h1>
        <Button title={"Quiero mi codigo"} color="white" onClick={handleClick}/>
      </div>
    </div>
  );
}
