let data = require('@begin/data')
const arc = require("@architect/functions")
const kuuid = require("kuuid");

async function gumroadPingHandler(req) {

    let session = await data.set({
      "table": "data",
      "key": kuuid.id(),
      "data": req.body
      }
    )
    
    return {
      code: 200
    }
}


exports.handler = arc.http.async(gumroadPingHandler);