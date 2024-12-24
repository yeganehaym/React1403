export const AddToWallet="ADD";
export const SubFromWallet="SUB";
export const UpdateWalletAmount="UPDATE";

export const AddToWalletAction=(amount)=>{
    return {
        type:AddToWallet,
        payload:parseInt(amount)
    }
}

export const SubFromWalletAction=(amount)=>{
    return {
        type:SubFromWallet,
        payload:parseInt(amount)
    }
}

export const UpdateWalletAction=(amount)=>{
    return {
        type:UpdateWalletAmount,
        payload:parseInt(amount)
    }
}