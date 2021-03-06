const initialState = JSON.parse(localStorage.getItem('store')) || []

const reducer = (state = initialState , action) => {

  switch(action.type) {
    case "ADD_ITEM":
      const exist = state.find(x => x.id === action.payload.id)
      if(exist) {
        return [...state]
      } else {
        return [...state , action.payload ]
      }

    case "DEL_ITEM": 
      return state = state.filter(x => {
        return x.id !== action.payload.id
      })

     // case "DEL_ITEM": 
      // const filteredItems = state.filter(x => {
      //   return x.id !== action.payload.id
      // })
      // return [...filteredItems] 

    default: return state
  }
}

export default reducer