docker build -t portfolio ./ 
docker run -it -v "$(pwd):/app" -p 3000:3000 portfolio:latest bash 
npm start


///
npx create-react-app portfolio
cd my-app
npm start
//


// ng serve --host 0.0.0.0//
