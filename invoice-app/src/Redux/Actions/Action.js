const SIGN_IN = "SIGN_IN";
const LOG_OUT = "LOG_OUT";
const BILL_DETAILS = "BILL_DETAILS";

export const signIn = (value) => {
    return {
        type: SIGN_IN,
        payload: {
            address: value.address,
            city: value.city,
            pincode: value.pincode,
            contact: value.contact,
            state: value.state,
            name: value.name,
            email: value.email

        }
    }
}

export const logout = () => {
    return {
        type: LOG_OUT,
        payload: {
            address: "",
            pincode: "",
            city: "",
            contact: "",
            state: "",
            name: "",
            email: ""
        }

    }
}


export const billDetails = (value) => {
    return {
        type: BILL_DETAILS,
        payload: value,

    }
}