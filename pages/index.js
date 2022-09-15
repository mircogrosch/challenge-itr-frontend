import PageLayout from "../components/PageLayout/PageLayout";
import Header from "../containers/Header/Header";
import TourismContainer from "../containers/TourismContainer/TourismContainer";
import { getBenefits, getBranches } from "../utils/http-common";
import DiscountsContainer from "../containers/DiscountsContainer/DiscountsContainer";
import styles from "../styles/Home.module.css";

export default function Home({ branches, benefits }) {
  return (
    <PageLayout title={"Club LA NACION"}>
      <header>
        <Header />
      </header>

      <main>
        <div className={styles.mainTourism}>
          <TourismContainer branches={branches} />
        </div>

        <div className={styles.mainDiscounts}>
          <DiscountsContainer benefits={benefits} />
        </div>
      </main>
    </PageLayout>
  );
}

export async function getServerSideProps(context) {
  const [benefits, branches] = await Promise.all([
    getBenefits(),
    getBranches(),
  ]);

  return {
    props: {
      benefits,
      branches,
    },
  };
}
