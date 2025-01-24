# Start with an OpenJDK base image
FROM openjdk:22

# Set working directory
WORKDIR /app

CMD ["mvn", "clean", "package"]

# Copy application jar to the container
COPY target/TestDockerProject-0.0.1-SNAPSHOT.jar app.jar

# Expose the application's port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
