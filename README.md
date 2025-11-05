***How to build and test the images locally***

**To test the backend image**

docker build --build-arg DATABASE_URL="your_database_url" -t backendapp -f docker/Dockerfile.backend .

 docker run -e DATABASE_URL="your_database_url" -p 8080:8080 backendapp   