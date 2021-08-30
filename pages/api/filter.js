import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async(req, res) => {
    const { pid } = req.query
    const post = await prisma.product.findMany({
        where: { name: {contains: pid} },
        
      });
     
      
      res.json(post);
    prisma.$disconnect();
  }