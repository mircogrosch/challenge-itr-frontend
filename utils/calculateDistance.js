/**
 * Calculate distance, in mts and km 
 * @param {*} distance value in mts
 */

export const calculateDistance =(distance)=>{ 
    if(distance <= 90){
        return { 
            unit: "mts",
            distance: distance
        }
    }

    const km = (distance/1000).toFixed(2) // mts to km
    return{
        unit: "km",
        distance: km
    } 
    
}