import { IDish } from './../interfaces/IDish';
import { firestore } from "../service/firebase"
// import { IDish } from "../interfaces/IDish"


//Fetch dishes from Firebase
export const fetchDishes = async (): Promise<IDish[]> => {
    const result: any = []
    await firestore.collection('dishes')
        .get()
        .then(elem => elem.forEach((doc) => result.push({ ...doc.data(), id: doc.id })))
        .catch(err => console.log(err))
    return result
}

export const fetchDish = async (id: string): Promise<IDish> => {
    const result = await firestore.collection('dishes').doc(id).get()
    const result2: any = await result.data()
    return result2

}



