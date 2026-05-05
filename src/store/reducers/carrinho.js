import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const carrinhoSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarCarrinho: (state, { payload }) => {
      const temItem = state.some((item) => item.id === payload);
      if (!temItem)
        return [
          ...state,
          {
            id: payload,
            quantidade: 1,
          },
        ];
      return state.filter((item) => item.id !== payload);
    },
    mudarQuantidade: (state, { payload }) => {
      const item = state.find((i) => i.id === payload.id);

      if (item) {
        item.quantidade += payload.quantidade;

        if (item.quantidade <= 0) {
          return state.filter((i) => i.id !== payload.id);
        }
      }
    },
    resetCarrinho: () => initialState,
  },
});

export const { mudarCarrinho, mudarQuantidade, resetCarrinho } = carrinhoSlice.actions;
export default carrinhoSlice.reducer;
