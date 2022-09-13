import Carousel from "../components/Carousel";
import TourismCard from "../components/TourismCard";
export default function TourismContainer({ branches }) {
  return (
    <Carousel show={"four"}>
      {branches.map((branche) => {
        return (
          <div key={branche.crmid}>
            <div>
              <TourismCard
                name={branche.name}
                image={branche.images[0].url}
                benefits={branche.benefits[0]}
                branche={branche.branches}
              />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
