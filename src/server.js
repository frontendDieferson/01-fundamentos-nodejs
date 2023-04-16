import http from 'node:http';


// Criar um usuário (name, email, password)
const server = http.createServer((req, res) => {
    return res.end('Hello World')
})

server.listen(3333);