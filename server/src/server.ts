import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";

const app = Fastify();
const prisma = new PrismaClient();

app.register(cors);

app.get('/', async () => {
    const habitos = await prisma.habit.findMany();
    return habitos
})

app.listen({port: 3333,})
.then(() => {console.log('Server on')});