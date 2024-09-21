FROM openjdk:17-alpine
COPY target/backend.jar /app/backend.jar
WORKDIR /app
EXPOSE 8080
CMD ["java", "-jar", "backend.jar"]
