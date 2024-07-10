const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Middleware para gerar ID automático e ordenado
server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    // Obter todas as profiles
    const profiles = router.db.get('profiles').value();
    
    // Encontrar o maior ID existente
    const maxId = profiles.reduce((max, profile) => {
      return parseInt(profile.id) > max ? parseInt(profile.id) : max;
    }, 0);
    
    // Gerar um novo ID
    const newId = maxId + 1;
    
    // Atribuir o novo ID ao corpo da requisição
    req.body.id = newId.toString();
  }
  
  // Continuar para o próximo middleware
  next();
});

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log('JSON Server is running');
});
