import * as functions from "firebase-functions";

// // Start writing functions
// // https://firebase.google.com/docs/functions/typescript
//

export const audioData = functions.https.onRequest((req, res) => {
    if (req.method == "GET"){
        functions.logger.info("Request Recieved!")
        res.status(200).send("A Ok")
    } else if (req.method == "POST"){
        functions.logger.info("Post recieved!")
        res.status(200).send("A Ok")
    }
})