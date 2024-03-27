import { create } from 'zustand'

const useCart = create((set) => ({
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeItemFromCart: (item) => set((state) => ({ cart: state.cart.filter(i => i !== item) })),
    clear: () => set(() => ({ cart: [] }))
}))

export default useCart
