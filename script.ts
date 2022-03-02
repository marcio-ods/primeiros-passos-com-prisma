import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function main() {
    // prisma.user. 
    // const resultado = await prisma.user.findMany()
    // const resultado = await prisma.user.create({ data: { email: "marcio5@test.com"} })
    // const resultado = await prisma.user.update({ data: {name: "Marcio atualizado"},where: {id: 4}})
    // const resultado = await prisma.post.create({ data: { title: "hello world"} })
    // const resultado = await prisma.post.update({data: { // author_id: 4author: {connect: { id: 1 } } },where: { id: 1 } })
    // const resultado = await prisma.post.findUnique({ // rejectOnNotFound: true,//lança exceção se não achar where: {id: 7 }})
    // const resultado = await prisma.user.findMany({select: {id: true, name: true}})
    // const resultado = await prisma.user.findMany({include: {  Post: { select: {id: true,title: true }} }})
    // const resultado = await prisma.user.create({ data: {email: "teste@teste.com",name: "teste da silva",Post: { create: {title: "Post do teste"   }}}})
    // const resultado = await prisma.user.findMany({where: {name: {startsWith: "F" } }})
    // const resultado = await prisma.user.findMany({ skip: 2, take: 2})
    // const resultado = await prisma.user.upsert({where: { email: "naotem@test.com"},create: { email: "naotem@test.com",name: "create test"},update: {name: "update teste"}})
    // const resultado = await prisma.user.upsert(})
    // console.log(JSON.stringify(resultado, null, 1));
    console.log(resultado);

}

main()
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })