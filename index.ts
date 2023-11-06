import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    //Prisma Queries
    // const user =  await prisma.user.create({
    //     data: {
    //         name: 'John Doe',
    //         email: 'john@gmail.com',
    //     },
    // });
    // console.log(user);

    //Get all users
    // const users = await prisma.user.findMany();
    // console.log(users);

    //Create article and associate it with user
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'John First Artile',
    //         body: 'This is John fisrt article',
    //         author: {
    //             connect : {
    //                 id: 1,
    //             },
    //         },
    //     },
    // });
    // console.log(article);

    //Get all articles
    const articles = await prisma.article.findMany();
    console.log(articles);

    //Create user and article and associate them
    // const user = await prisma.user.create({
    //     data:{
    //         name: "Jane Smith",
    //         email: "janesmith@example.com",
    //         articles: {
    //             create: {
    //                 title: 'Jane first article',
    //                 body: 'This is jane first article'
    //             },
    //         },
    //     },
    // });
    // console.log(user);

    //Create another article fro Jane
    // const article = await prisma.article.create({
    //     data: {
    //         title: 'Jane second Article',
    //         body: 'This is a sample article',
    //         author: {
    //             connect: { 
    //                 id: 2,
    //             },
    //         },
    //     },
    // });
    // console.log(article);

    //Get all users with articles
    // const users = await prisma.user.findMany({
    //     include: {
    //         articles: true,
    //     }
    // });
    // console.log(users);

    //Loop over Jane articles
    // users.forEach((user) => {
    //     console.log(`User: ${user.name}, Email: ${user.email}`);
    //     console.log('Articles:');
    //     user.articles.forEach((article) => {
    //         console.log(` - Title: ${article.title}, Body: ${article.body}`);
    //     });
    //     console.log('\n');
    // });

    //Update data
    // const user =await prisma.user.update({
    //     where :{id:1},
    //     data: { name: ' John Doe Jr'}
    // });
    // console.log(user);

    //Remove data
    // const article = await prisma.article.delete({
    //     where:{id:2}
    // });
    // console.log(article);
}

main()
.then(async () => {
    await prisma.$disconnect();
})
.catch(async(e) => {
    console.error("Error: ", e);
    await prisma.$disconnect();
    process.exit(1);
})