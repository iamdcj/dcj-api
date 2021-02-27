import { Response } from "express";

async function handleRequest(path: String, res: Response) {

  const apiCall = () => {
    return new Promise<{ title: String, content?: String }>((resolve) => {
      setTimeout(function () {
        const data = {
          title: "David Christian Jones",
          content: "Software Engineer"
        }

        resolve(data);
      }, 100);
    });
  }

  try {
    const response = await apiCall();

    res.send(`
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${response.title}</title>
        </head>
        <body>
            <h1>${response.title}</h1>
            <p>${response.content}</>
        </body>
    </html>
  `);
  } catch (error) {
    console.error(error);
  }

}

export { handleRequest };