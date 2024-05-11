import { listObjects } from "server/s3";


export default  defineEventHandler(async(event) => {
    //const { object } = await readBody(event);


    await listObjects();

    event.res.statusCode = 200;
    return { status: "ok", result: "demoo" }
})