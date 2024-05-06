

export default  defineEventHandler(async(event) => {
    const { title, summary, body, safeKey } = await readBody(event);

    console.log("fetch event", JSON.stringify(body));

    // set status code 200 using the nuxt api
    event.res.statusCode = 200;
    return { status: "ok"}
})