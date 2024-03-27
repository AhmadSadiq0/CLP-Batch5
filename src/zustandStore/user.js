import { create } from "zustand";
import { produce } from 'immer'

const useUser = create((set) => ({
    user: {
        name: 'Alpha',
        address: {
            street: 'Street',
            contactNumber: {
                phone: '123123',
                landLine: '4345345'
            }
        }
    },
    changePhoneNumber: (phone) => set((state) => ({
        user: {
            ...state.user,
            address: {
                ...state.user.address,
                contactNumber: {
                    ...state.user.address.contactNumber,
                    phone: phone
                }
            }
        }
    })),
    changePhoneNumberWithImmer: (phone) => set(produce((state) => { state.user.address.contactNumber.phone = phone }))
}))

export default useUser