import styles from "../styles/DiscountsContainer.module.css";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import DiscountsCard from "../components/DiscountsCard";

export default function DiscountsContainer({ benefits }) {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <h1>Códigos de descuento</h1>
        <p>
          ¿Sos socio de Club LA NACION? Descargá tu código y disfrutá beneficios
          exclusivos en tus marcas favoritas
        </p>
        <div>
          <Button title={"TODOS LOS CODIGOS"} />
        </div>
        <Carousel show={"four"}>
          {benefits.map((benefit) => {
            return (
              <div key={benefit.crmid}>
                <div style={{ padding: 8 }}>
                  <DiscountsCard
                    crmid={benefit.crmid}
                    name={benefit.name}
                    image={benefit.images[0].url}
                  />
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
