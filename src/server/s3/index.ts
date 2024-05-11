import * as AWS from "@aws-sdk/client-s3";
const client = new AWS.S3({ 
    region: "global", //process.env.S3_REGION,
        credentials:{
            accessKeyId: "NUdc93MedRGrE12y",// process.env.S3_ACCESS_KEY,
            secretAccessKey: "Zrg2eOfm5pdw8OZwWIHDTtye1MSNVtVXSH09fl5m",// process.env.S3_SECRET_KEY
        },
    endpoint: "https://s3.tebi.io"//process.env.S3_ENDPOINT

 });




const listObjects = async () => {
    const data = await client.listBuckets();

 
    console.log(data);


    return { a: "ok "}
}

export { listObjects }
