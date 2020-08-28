export default function getFundsData() {
    return new Promise((resolve, reject) => {
        try{
            fetch("https://private-39e16-alkymiexercise.apiary-mock.com/list")
                .then(res => {resolve(res.json())});
        }
        catch(err){
            reject(`Error while fetching: ${err}`);
        }    
    });
}