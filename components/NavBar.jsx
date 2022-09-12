import { Menu, Search, Bell, Heart } from "react-feather";
import styles from "../styles/NavBar.module.css";
import Image from "next/image";
import ClubLogo from "../public/assets/logos/club_header.png";
export default function NavBar() {
  return (
    <nav className={styles.container}>
      <div className={styles.containerAssets}>
        <button className={styles.btn}>
          <Menu  />
        </button>
        <Image src={ClubLogo} width={48} height={48} />
      </div>
      <div>
        <form className={styles.formContainer}>
          <input
            type="text"
            className={styles.inputCommerce}
            placeholder="Busca un comercio"
          />
          <input
            type="text"
            className={styles.inputLocation}
            placeholder="Ingresa una ubicacion..."
          />
          <button
            type="submit"
            onClick={(e) => e.preventDefault()}
            className={styles.btnSearch}
          >
            <span>
              <Search />
            </span>
          </button>
        </form>
      </div>

      <div className={styles.containerAssets}>
        <button className={styles.btn}>
          <Bell  />
        </button>
        <button className={styles.btn}>
          <Heart  />
        </button>
        <span className={styles.emoji}>😊</span>
      </div>
    </nav>
  );
}
