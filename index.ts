import { serve } from "bun";

Bun.serve({
    port: 8080,
    async fetch (req){
        const path = new URL(req.url).pathname;
        const url = new URL(req.url);
        if(url.pathname==="/") return new Response("Home Page!");
        if(url.pathname==="/blog") return new Response("Blog!");
        if(req.method === "POST" && path === "/api/post"){
            const data = await req.json();
            console.log("Recieved: " ,data );
            return Response.json({success: true , data})

        }
        return new Response("404!")

    }
    
})
