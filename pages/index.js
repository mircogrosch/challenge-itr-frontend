import PageLayout from "../components/PageLayout";
import Header from "../containers/Header";
import TourismContainer from "../containers/TourismContainer";
import { getBenefits,getBranches } from "../utils/http-common";

export default function Home({branches,benefits}) {
  console.log("Sucursales",branches)
  console.log("Beneficios", benefits)
  return (
    <PageLayout title={"Club LA NACION"}>
        <Header />
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", backgroundColor:"gray", height:"100vh", margin:15}}> 
              <TourismContainer branches={branches}/>
        </div>
        
    </PageLayout>
  );
}


export  async function getServerSideProps (context) {
  
    const [benefits,branches] =  await Promise.all([getBenefits(), getBranches()])
   
    
  return{ 
    props:{ 
      benefits,
      branches
    }
  }

}
