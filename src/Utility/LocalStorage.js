const getStoreDonations = () =>{
    const storedDnateDetail = localStorage.getItem('donated');
    if(storedDnateDetail){
        return JSON.parse(storedDnateDetail);
    }
    return[];
}


const saveDonations = id => {
    const storedDonateDetails = getStoreDonations();
    const exists = storedDonateDetails.find(donateId => donateId === id);
    if(!exists){
        storedDonateDetails.push(id)
        localStorage.setItem('donated', JSON.stringify(storedDonateDetails));
    }
}
export {saveDonations, getStoreDonations}