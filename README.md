# AMES Technical Test

Aquest repositori conté un projecte FullStack desenvolupat amb Spring Boot per al backend i Vue.js per al frontend. A més, el projecte ha estat dockeritzat per facilitar el desplegament i l'execució en diferents entorns.

## Contingut

- [Descripció](#descripció)
- [Característiques](#característiques)
- [Requisits](#requisits)
- [Instruccions d'instal·lació](#Instruccions-de-instal·lació)
- [Execució del projecte](#execució-del-projecte)
- [Contacte](#contacte)

## Descripció

Aquest projecte és un exemple d'una aplicació FullStack que utilitza Spring Boot com a backend i Vue.js com a frontend. L'aplicació presenta un CRUD (Crear, Llegir, Actualitzar i Esborrar) per gestionar certes dades. El backend proporciona una API RESTful que interactua amb una base de dades, mentre que el frontend es fa càrrec de mostrar la interfície d'usuari i permetre la interacció de l'usuari amb l'aplicació.

## Característiques

- Backend desenvolupat amb Spring Boot.
- Frontend desenvolupat amb Vue.js.
- Dockeritzat per facilitar la implementació i distribució.
- API RESTful per realitzar operacions CRUD.
- Base de dades utilitzada: MySQL.

## Requisits

Abans d'instal·lar i executar aquest projecte, assegura't de tenir instal·lat el següent:

- Docker: [https://www.docker.com/get-started](https://www.docker.com/get-started)
- Git: [https://git-scm.com/download/](https://git-scm.com/download/)

## Instruccions de instal·lació

1. Clona aquest repositori a la teva màquina local:

```bash
git clone https://github.com/peredirtbike/Ames_test
cd Ames_test
```
2. Executa aquesta comanda per aixecar el contenidor docker:
```bash
docker-compose up --build -d
```
3. Assegura't de que els contenidors estiguin "running":
```bash
docker ps
```
4. Si tot ha anat bé, ja estarà el projecte funcionant.

## Execució del projecte
### Frontend
per accedir al frontend, accedirem a aquestes URL:
A aquesta URL, accedirem a la home del frontEnd.
  [https://localhost:5173](https://localhost:5173)

A aquesta URL, accedirem a la vista clients del frontEnd.
  [https://localhost:5173/clients](https://localhost:5173/clients)

### Backend
  A aquesta URL, accedirem a la home del backEnd
  [https://localhost:8080](https://localhost:8080)

  A aquesta URL, accedirem a la documentació (swagger) del backEnd
  [https://localhost:8080/docs](https://localhost:8080/docs)

## Contacte
Si tens alguna pregunta o consulta, no dubtis a posar-te en contacte amb nosaltres a peredirtbike@gmail.com.



  




