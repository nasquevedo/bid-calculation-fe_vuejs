const{ VITE_APP_API_URL, VITE_APP_API_VEHICLE_TYPE_ENDPOINT, VITE_APP_PRICE_ENDPOINT } = import.meta.env 

export const getVehicleTypes = async () => {
    try {
        const response = await fetch(`${VITE_APP_API_URL}${VITE_APP_API_VEHICLE_TYPE_ENDPOINT}`)
        
        if (response.ok) {
            const result = await response.json()
            return result.data;
        }
    } catch(e) {
        console.log("Error trying to get vehicle types", e)
    }
}

export const getTotalPrice = async (vehicleBasePrice, selected) => {
    try {
        const response = await fetch(`${VITE_APP_API_URL}${VITE_APP_PRICE_ENDPOINT}?price=${vehicleBasePrice.value}&type=${selected.value}`)
        if (response.ok) {
            const result = await response.json()
            return result.data
        }
    }catch(e) {
        console.log('Error tryng to get price', e)
    }
}