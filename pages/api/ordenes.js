export default async function handle(req, res) {

  if(req.method === "POST") {
    console.log(req.body);
    res.json({metodo: "POST"})
  }

}