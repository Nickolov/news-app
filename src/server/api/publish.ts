import sql from 'server/db';


export default  defineEventHandler(async(event) => {
    const { title, summary, body, safeKey } = await readBody(event);

    console.log("fetch event", JSON.stringify(body));
    // publish the article to the db
    const res = await sql`INSERT INTO articles (article_title, article_summary, article_body) VALUES (${title}, ${summary}, ${body})`;
    

    // set status code 200 using the nuxt api
    event.res.statusCode = res?.count > 0 ? 200 : 500;
    return { status: "ok"}
})