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
              const { name, image, catname, subcatname, discription, discount_price, price } = req.body;
            
              const Expo = await prisma.product.create({
                data: {
                    user: {
                        connect: {
                          id: session?.token?.id,
                        },
                      },
                      category: {
                        connect: {
                          id: catname,
                        },
                      },

                      subcategories: {
                        connect: {
                          id: subcatname,
                        },
                      },
                      
                      name  : name,
                    
                      image  : image,
                      discription  :  discription,
                      discount_price : Number(discount_price),
                      price    :  Number(price),
                     
                    
                                    
                },
              });
              

              

              res.json({ names: Expo });
            } else {
              console.log(nope);
            }
          } else if (req.method === "GET") {
            
            const Expo = await prisma.product.findMany({
              include:{
                category: true,
                subcategories:true,
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