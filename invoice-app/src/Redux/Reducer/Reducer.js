const initialSignIn = {
    signIn: {
        address: "",
        city: "",
        pincode: "",
        contact: "",
        state: "",
        name: "",
        email: ""
    },
}
export const loggedInReducer = (state = initialSignIn, action) => {
    switch (action.type) {
        case "SIGN_IN":
            return {
                ...state,
                signIn: action.payload
            }
        case "LOG_OUT":
            return {
                ...state,
                signIn: action.payload
            }

        default: return state
    }
}




const initialBillDetails = {
    billDetails: {},
}

export const billDetailReducer = (state = initialBillDetails, action) => {
    switch (action.type) {
        case "BILL_DETAILS":
            return {
                ...state,
                billDetails: action.payload
            }
        default: return state;
    }
}


