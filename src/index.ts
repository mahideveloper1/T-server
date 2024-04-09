import {initServer} from "./app";




async function init(){
    const app = await initServer();
    const PORT: number = process.env.PORT ? parseInt(process.env.PORT) :8000
    app.listen(PORT,()=>{
        console.log("start");
    })
}

init();
// import { initServer } from "./app";

// async function init() {
//     const app = await initServer();
//     const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 10000; // Use port 10000 by default if environment variable PORT is not set

//     app.listen(PORT, '0.0.0.0', () => {
//         console.log(`Server running at http://0.0.0.0:${PORT}`);
//     });
// }

// init();

