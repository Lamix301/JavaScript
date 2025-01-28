function getData(endpoint, callback, error) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET",endpoint);
    xhr.onreadystatechange = function (){
        if(this.readyState === XMLHttpRequest.DONE && this.status === 200){
            callback(JSON.parse(this.responseText));
        } else {
            error();
        }
    };
    xhr.send();
}

console.log("Antes del getData")
getData(
    "./pelis.json",
    (data) => {
        console.log("Los directores: ", data);
    },
    (error) => {
        console.log("Algo ha ido mal!!!")
    }
);
// getData(
//     "./pelis",
//     (data) => {
//         console.log("Los directores: ", data);
//     },
//     (error) => {
//         console.log("Algo ha ido mal!!!")
//     }
// );
// getData(

// )