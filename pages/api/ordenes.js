export default async function handle(req, res) {

  if(req.method === "POST") {
    res.json({metodo: "POST"})
  } else {
    res.json({metodo: "GET"})
  }

}