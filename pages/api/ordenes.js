import { PrismaClient } from '@prisma/client'


export default async function handle(req, res) {
  const prisma = new PrismaClient()

  if(req.method === "POST") {
    // Para crear el registro
    const orden = await prisma.orden.create({
      data: {
        nombre: req.body.nombre,
        total: req.body.total,
        pedido: req.body.pedido,
        fecha: req.body.fecha
      }
    })
    // console.log(req.body);
    // res.json({metodo: "POST"})
    res.json(orden)
  }

}