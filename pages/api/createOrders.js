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
              const { name, address, email, state, delivery, phone, totalprice } = req.body;
            
              const Expo = await prisma.product.create({
                data: {
                    user: {
                        connect: {
                          id: session.token.id,
                        },
                      },
                      address :    address,
                      name :      name,
                      email  :    email,
                      state :     state,
                      delivery :  delivery,
                      phone   :   phone,
                      totalprice : totalprice
                     
                    
                                    
                },
              });
              

              

              res.json({ names: Expo });
            } else {
              console.log(nope);
            }
          } else if (req.method === "DELETE") {
            const { id } = req.params;
            const Expo = await prisma.profile.delete({
              where: {
                userId: sub,
                id: id,
              },
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