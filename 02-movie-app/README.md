<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="100" alt="Nest Logo" /></a>
</p>

# Modo desarrollo

```
pnpm install
```

```
docker-compose up -d
```

```
http://localhost:3000/api/seed/
```

# Build
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build

```

# Run
```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up

```