import {createSlice} from "@reduxjs/toolkit";

const basketSlice = createSlice({
    name: 'basket',
    initialState: {
        basketSliceStore: JSON.parse(localStorage.getItem('basketSliceStore')) || []
    },
    reducers: {
        removeStoreData(state, action) {
            state.basketSliceStore = [];
            localStorage.setItem('basketSliceStore', JSON.stringify(state.basketSliceStore));
        },
        incrementProductCnt(state, action) {
            const issetProduct = state.basketSliceStore.find(ele => ele.id === action.payload.id);
            if (!issetProduct) {
                state.basketSliceStore.push({
                    ...action.payload,
                    count: 1
                });
            } else {
                state.basketSliceStore = state.basketSliceStore.map(product => {
                    if (product.id === action.payload.id) {
                        product.count = parseInt(product.count) + 1;
                    }
                    return product
                });
            }

            localStorage.setItem('basketSliceStore', JSON.stringify(state.basketSliceStore));
        },
        decrementProductCnt(state, action) {
            const issetProduct = state.basketSliceStore.find(ele => ele.id === action.payload.id);
            if (issetProduct && action.payload.count !== 1) {
                state.basketSliceStore = state.basketSliceStore.map(product => {
                    if (product.id === action.payload.id) {
                        product.count = parseInt(product.count) - 1;
                    }
                    return product
                });
            } else {
                state.basketSliceStore = state.basketSliceStore.filter(product => product.id !== action.payload.id)
            }

            localStorage.setItem('basketSliceStore', JSON.stringify(state.basketSliceStore));
        }
    }
});

export const {removeStoreData, decrementProductCnt, incrementProductCnt} = basketSlice.actions;

export default basketSlice.reducer;