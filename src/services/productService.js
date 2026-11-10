import { addDoc, collection,doc,getDoc, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'

const productsRef = collection(db,'products')



/* -------------------------------------------------------------------------- */
/*                          TRAER TODOS LOS PRODUCTOS                         */
/* -------------------------------------------------------------------------- */

export const getProducts = async ()=>{

    try {
        const snapshot = await getDocs(productsRef)

        const productsFormat = snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        });
        return productsFormat
    } catch (error) {
        console.error('error al traer productos',error);
        throw error;
    }
}
/* -------------------------------------------------------------------------- */
/*                           TRAER DE A UN PRODUCTO POR ID                    */
/* -------------------------------------------------------------------------- */
export const getProductById = async (id)=>{
    try {
        const prodRef = doc(productsRef,id);

        const snapshot = await getDoc(prodRef);

        if(snapshot.exists()){
            const product = { id: snapshot.id, ...snapshot.data() }
            console.log('Doc:',product)
            return product;
        }else{
            return null;
        }

    } catch (error) {
        console.error('Error al traer producto por ID:',error);
        throw error;
    }
};


/* -------------------------------------------------------------------------- */
/*                               TRAER CATEGORIA DE PRODUCTOS                 */
/* -------------------------------------------------------------------------- */
 export const getByCategory = async (category)=>{
    try {
        let queryRef;
        if (category) {
            queryRef = query(productsRef, where('category','==',category))
        }else{
            queryRef = productsRef;
        }

        const snapshot = await getDocs(queryRef)
        const productsFormat = snapshot.docs.map((doc)=>{
            return {id: doc.id, ...doc.data()}
        })
        return productsFormat;
    } catch (error) {
                console.error('Error al traer productos filtrados:',error);
        throw error;
    }
 }


 /* -------------------------------------------------------------------------- */
 /*                      *-------ALTA DE PRODUCTO-------*                      */
 /* -------------------------------------------------------------------------- */

 export const createProduct = async (product)=>{

    try {
        const docRef = await addDoc(productsRef,product)
        
        return {
            id:docRef.id,
            name:product.name
        }

    } catch (error) {
         console.error('Error al crear producto:',error);
        throw error;
    }

 }
