import { getInWardQuery } from "../db/inWard.js"

export const getInWard = async function(req, res){
    console.log('here')
    const inWards = await getInWardQuery();
    console.log("found result", inWards)
    res.send(inWards.rows);
}