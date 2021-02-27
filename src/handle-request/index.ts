import { Response } from "express";

const handleRequest = (path: String, res: Response) => {

  res.send(`
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Page: ${path}</title>
        </head>
        <body>
            <div>${path}</div>
        </body>
    </html>
    `)

}

export { handleRequest };