import Carousel from "../../components/Carousel/Carousel";
import TourismCard from "../../components/TourismCard/TourismCard";
import styles from "./TourismContainer.module.css";
import Button from "../../components/Button/Button";

export default function TourismContainer({ branches }) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h1>Turismo en Buenos Aires</h1>

        <div>
          <Button title={"TODOS LOS BENEFICIOS"} />
        </div>
      </div>
      <Carousel show={"four"}>
        {branches.map((branche) => {
          return (
            <div key={branche.crmid}>
              <div style={{ padding: 8 }}>
                <TourismCard
                  name={branche.name}
                  image={branche.images[0].url}
                  benefits={branche.benefits[0]}
                  branche={branche.branches}
                  crmid={branche.crmid}
                />
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
