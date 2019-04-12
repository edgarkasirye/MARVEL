let axios = require("axios")
let md5 = require("md5")

let publicKey = "752b50e9f4b04775db96b49caf3809ee"
let privateKey = "4e35cab8c3bef4f375e8dd947840df85fc96a4ac"

let data;

function unixtime() {
    let datenow = Date.now()
    var ts = Math.floor(datenow / 1000)
    return ts
}

let ts = unixtime();


export let getCharacters = async (offset = 0, limit = 20) => {
    let Response = await axios.get("https://gateway.marvel.com/v1/public/characters", {
        params: { apikey: publicKey, ts: ts, hash: md5(ts + privateKey + publicKey),limit,offset }
    })
    return Response;
};


   

