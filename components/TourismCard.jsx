import styles from "../styles/TourismCard.module.css";
import Image from "next/image";
import ToolTip from "./ToolTip";
import { MapPin } from "react-feather";
import { calculateDistance } from "../utils/calculateDistance";


export default function ToursimCard({ name, image, benefits, branche }) {
 
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
        />
      </div>
      <div className={styles.boxDescription}>
        <h1>{name}</h1>
      </div>
      <div className={styles.benefitsGroup}>
        {benefits.program_name.map((name) => {
          return (
            <div>
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