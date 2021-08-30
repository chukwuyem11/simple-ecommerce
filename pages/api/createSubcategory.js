import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/client";


export default async (req, res) => {
    const prisma = new PrismaClient();
    try {
        const session = await getSession({ req });
        // session.token.id,
        if (session) {
          if (req.method === "POST") {
            
    
            if (session) {
              const { name, image, catname } = req.body;

              
            
              const Expo = await prisma.subcategories.create({
               data:{
                categories: {
                  connect: {
                    id: catname,
                  },
                },
                 name: name,
                 image :image
               }
              });
              

              

              res.json({ names: Expo });
            } else {
              console.log(nope);
            }
          } else if (req.method === "GET") {
            
            const Expo = await prisma.subcategories.findMany({
              include:{
                categories: true
              }
            });
            res.json({ names: Expo });
            console.log("delete");
          } else {
            console.log("e no work");
          }
        } else {
          console.log("Failed");
          // res.status(401);
        }
        // res.end;
      } catch (err) {
        console.log("Real stuff");
        console.log(err);
      }
      prisma.$disconnect();

}