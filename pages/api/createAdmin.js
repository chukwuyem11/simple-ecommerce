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
              const { username, email } = req.body;
            
              const Expo = await prisma.admin.create({
                data: {
                  user: {
                    connect: {
                      id: session.token.id,
                    }
                  },
    
                  username: username,
                  email: email,
                  
                },
              });
              await prisma.user.update({
                where:{
                    id:session.token.id,
                },
                data: {
                  role: "ADMIN"
                }
            })

              

              res.json({ names: Expo });
            } else {
              console.log(nope);
            }
          } else if (req.method === "GET") {
            
            const Expo = await prisma.admin.findMany()
            res.json({ names: Expo });
           
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