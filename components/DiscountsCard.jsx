import Image from "next/image"
import styles from "../styles/DiscountsCard.module.css"
import Button from "./Button"
export default function DiscountsCard({name,image, crmid}){
    return(
        <div className={styles.container}>
            
            <Image src={image} layout="fill" className={styles.img}/>
            <div className={styles.description}> 
                <h1>{name}</h1>
                <Button title={"Quiero mi codigo"} color="white" />
            </div>
        </div>
        
    )
}