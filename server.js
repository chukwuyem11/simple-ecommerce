// import express, { Express, Request, Response } from "express";
// import * as socketio from "socket.io";
// import Adapters from "next-auth/adapters";


const getSession = require("next-auth/client").getSession
const PrismaClient = require("@prisma/client").PrismaClient
const Adapters = require("next-auth/adapters").default;
const NextAuth = require("next-auth").default;
const Providers = require('next-auth/providers').default;
const next = require("next");
const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");


const prisma = new PrismaClient();

// const appp = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || "3000";
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();
const baseUrl = "/api/auth/";
// const port = process.env.PORT || 3000;
// const dev = process.env.Node_Env !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();
nextApp.prepare().then(() => {
  const app = express();
  const server = http.createServer(app);
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({ extended: true }));
 


  app.get(
    "/yuna/:names",
    async(req = express.request(), res = express.response()) => {
      const names = req.params.names;
      return res.json(`we dey ${names}`);
    }
  );

  // Products
  app.route("/products/:productid") 
  
  .get (async function  (req, res)  {
    const productid = req.params.productid 
    const post = await prisma.product.findUnique({
      where: { id: Number(productid) },
      include:{
        category: true,
        subcategories: true,
        reviews: true
      }
    });
    res.json(post);
    prisma.$disconnect();
  })
  .delete(async function (req, res) {
    const post = await prisma.product.delete({
      where: { id: Number(productid) },
    });
    res.json(post);
    prisma.$disconnect();
  })
  .put(async function (req, res) {
    const { name, discription, discount_price, price, image } = req.body;
    const post = await prisma.product.update({
      where: { id: Number(productid) },
      data: {
        name: name,
        image: image,
        discription: discription,
        discount_price: Number(discount_price),
        price: Number(price),
      },
    });
    res.json(post);
    prisma.$disconnect();
  })
  .post(async function (req, res) {
    const post = await prisma.product.create({
      data: {
        title,
        content,
        published: false,
        author: { connect: { email: authorEmail } },
      },
    });
    res.json(post);
    prisma.$disconnect();
  })

  
  // Subcategory
  app.route("/subcategory/:subcategoryid")
  
  .get(async function (req, res) {
    const subcategoryid = req.params.subcategoryid
    const post = await prisma.subcategories.findMany({
      include:{
       categories:{
           include:{
               id: subcategoryid
           }
       }
     } 
     
   });
   res.json(post);
   prisma.$disconnect();
  })
  .delete(async function (req, res) {
    const post = await prisma.product.delete({
      where: { id: Number(subcategoryid) },
    });
    res.json(post);
    prisma.$disconnect();
  })
  .put(async function (req, res) {
    const { name, discription, discount_price, price, image } = req.body;
    const post = await prisma.product.update({
      where: { id: Number(subcategoryid) },
      data: {
        name: name,
        image: image,
        discription: discription,
        discount_price: Number(discount_price),
        price: Number(price),
      },
    });
    res.json(post);
    prisma.$disconnect();
  })
  .post(async function (req, res) {
    const post = await prisma.product.create({
      data: {
        title,
        content,
        published: false,
        author: { connect: { email: authorEmail } },
      },
    });
    res.json(post);
    prisma.$disconnect();
  })

  //createAdmin
  app.route("/createAdmin")
  // if (session) {}
  
  .post(async function (req, res) {
    const session = await getSession({ req });
    if (session){
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
    }else {
      console.log(nope);
    }
  })
  .get(async function (req, res) {
    const session = await getSession({ req });
    if (session){
      const Expo = await prisma.admin.findMany()
      res.json({ names: Expo });
    }
      
  })
  
 

  //createCategory
  app.route("/createCategory")
  // if (session) {}
  
  .post(async function (req, res) {
    const session = await getSession({ req });
    if (session) {
      const { name, image } = req.body;
    
      const Expo = await prisma.categories.create({
        data: {
          user: {
            connect: {
              id: session.token.id,
            },
          },
          name: name,
          image: image,                
        },
      });
      

      

      res.json({ names: Expo });
    } else {
      console.log(nope);
    }
  
  })
  .get(async function (req, res) {
    const session = await getSession({ req });
    if (session){
      const Expo = await prisma.categories.findMany();
            res.json({ names: Expo });
    }
      
  })
  
  //createOrders
  app.route("/createOrders")
  // if (session) {}
  
  .post(async function (req, res) {
    const session = await getSession({ req });
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
      console.log("nope");
    }
  
  })
  .get(async function (req, res) {
    const session = await getSession({ req });
    if (session){
      const Expo = await prisma.categories.findMany();
            res.json({ names: Expo });
    }
      
  })
  
    //createReview
    app.route("/createReviews")
    // if (session) {}
    
    .post(async function (req, res) {
      const session = await getSession({ req });
      if (session) {
        const { body, productid, rating } = req.body;
            
              const Expo = await prisma.reviews.create({
                data: {
                    user: {
                        connect: {
                          id: session.token.id,
                        },
                      },
                      product:{
                        connect:{
                          id: productid
                        }
                      },
                      body  :   body, 
                      rating:  rating                
                },
              });
              res.json({ names: Expo });
      } else {
        console.log("nope");
      }
    
    })
    .get(async function (req, res) {
      const session = await getSession({ req });
      if (session){
        const Expo = await prisma.categories.findMany();
              res.json({ names: Expo });
      }
        
    })
  
      //createSubcategories
  app.route ("/createSubcategory") 
  // if (session) {}
  
  .post (async function (req, res) {
    const session = await getSession({ req });
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
  
  })
  .get(async function (req, res) {
    const session = await getSession({ req });
    if (session){
      const Expo = await prisma.categories.findMany();
            res.json({ names: Expo });
    }
      
  })


      //createProducts
      app.route("/createProducts")
      // if (session) {}
      
      .post(async function (req, res) {
        const session = await getSession({ req });
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
      
      })
      .get(async function (req, res) {
        const session = await getSession({ req });
        if (session){
          const Expo = await prisma.product.findMany({
            include:{
              category: true,
              subcategories:true,
            }
          });
          res.json({ names: Expo });
          console.log("delete");
        }
          
      })
      
  
    

  

  app.use((req, res, next) => {
  if (!req.url.startsWith(baseUrl)) {
    return next();
  }
  // Fill in the "nextauth" [catch all route parameter](https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes)
  req.query.nextauth = req.url // start with request url
    .slice(baseUrl.length) // make relative to baseUrl
    .replace(/\?.*/, "") // remove query part, use only path part
    .split("/"); // as array of strings
  NextAuth(req, res, options);
});

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID2,
      clientSecret: process.env.GITHUB_CLIENT_SECRET2,
    }),
    Providers.Twitter({
      clientId: process.env.twitterapi2,
      clientSecret: process.env.twittersecre2,
    }),
  ],
  
  adapter: Adapters.Prisma.Adapter({
    prisma,
    modelMapping: {
      User: "user",
      Account: "account",
      Session: "session",
      VerificationRequest: "verificationRequest",
    },
  }),
  // database: process.env.DATABASE_URL,
  secret: process.env.AUTH_SECRET,
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },

  callbacks: {
    // signIn: async (user, account, profile) => {
    //   return Promise.resolve(true, user, account, profile);
    // },
    async session(session, token) {
      session.accessToken = token.accessToken;
      session.token = token;
      return session;
    },
    async jwt(token, user, account, profile, isNewUser) {
      if (account?.accessToken) {
        token.accessToken = account.accessToken;
        token.user = user;

        token.profile = profile;
        token.isNewUser = isNewUser;
      }
      return token;
    },
  },
};

  app.get("*", (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, () => console.log(`server is running on port ${port}`));
});
