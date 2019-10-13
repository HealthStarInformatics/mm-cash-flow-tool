export const clearStorageAll = () => {[
            "Starting Balance",
            "Job One",
            "Job Two",
            "SNAP",
            "TANF",
            "Housing Subsidy",
            "Other Income",
            "Cellphone",
            "Debt Payment",
            "Eating Out",
            "Education and Childcare",
            "Entertainment",
            "Groceries and Other Supplies",
            "Health Expenses",
            "Helping Others",
            "Housing and Utilities",
            "Pets",
            "Emergency Fund",
            "Entertainment",
            "Savings for Goals",
            "Transportation"
            ].forEach(key => 
        clearStorageItem(key)
    );
};

export const clearStorageItem = key => {
    localStorage.removeItem(key);
};

export const saveToStorage = (key, value) => {
    console.log('made it to save to storage');
    console.log("key is ", key);
    console.log("value is ", value);
    return localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = key => {
    return JSON.parse(localStorage.getItem(key));
}