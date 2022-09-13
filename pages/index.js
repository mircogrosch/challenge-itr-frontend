import PageLayout from "../components/PageLayout";
import Header from "../containers/Header";
import TourismContainer from "../containers/TourismContainer";
import { getBenefits,getBranches } from "../utils/http-common";

export default function Home({branches,benefits}) {
  return (
    <PageLayout title={"Club LA NACION"}>
      <header>   
        <Header />
      </header>
      <main> 
         <div style={{display:"flex", justifyContent:"center", backgroundColor:"#f2f0f0", height:"100vh"}}> 
              <TourismContainer branches={branches}/>
         </div>
      </main>
       

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
