docker build -t portfolio ./ 
docker run -it -v "$(pwd):/app" -p 3000:3000 portfolio:latest bash 
npm start



