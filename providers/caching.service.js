import { createClient } from "redis";

const client = await createClient()
    .on("error", (err) => console.log("Redis Client Error", err))
    .connect();

class CachingService {
    constructor() {}
    
    hitCache(key) {
        
    }

    //   cacheQuery(modelname, id, query) {

    // await client.set("key", "value");
    // const value = await client.get("key");
    // await client.disconnect();
    //   }
}

module.exports = CachingService;
