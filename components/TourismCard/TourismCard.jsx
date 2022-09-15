import styles from "./TourismCard.module.css";
import Image from "next/image";
import ToolTip from "../ToolTip/ToolTip";
import { MapPin } from "react-feather";
import { calculateDistance } from "../../utils/calculateDistance";
import { useRouter } from "next/router";

export default function TourismCard({ name, image, benefits, branche, crmid }) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push(`https://club.lanacion.com.ar/${crmid}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.boxImg}>
        <Image
          width={1000}
          height={600}
          layout="responsive"
          src={image}
          alt="Image city"
          className={styles.img}
          onClick={(e) => handleClick(e)}
        />
      </div>
      <div className={styles.boxDescription}>
        <a onClick={(e) => handleClick(e)}>
          {" "}
          <h1>{name}</h1>{" "}
        </a>
      </div>
      <div className={styles.benefitsGroup}>
        {benefits.program_name.map((name, i) => {
          return (
            <div key={i}>
              <ToolTip title={name.split(" ")[3]}>
                <h2
                  className={`${styles.typeBenefits} ${
                    styles[name.split(" ")[3]]
                  }`}
                >
                  {benefits.type}
                </h2>
              </ToolTip>
            </div>
          );
        })}
      </div>
      <div className={styles.location}>
        <MapPin size={15} />
        <span>
          A {calculateDistance(branche.location).distance}{" "}
          {calculateDistance(branche.location).unit}
        </span>
      </div>
    </div>
  );
}
