export const initialState = null
export const invReducer = (state,action)=>{
   switch (action.type) {
       case "CREATEINVOICE":
           return{
               ...action.payload
           }
       default:
           return state;
   }
}