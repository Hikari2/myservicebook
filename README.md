# myServiceBook

myServiceBook project for Cooperative IT Design course at KTH
  - Clone the project
  - Navigate to "frontend" folder
  - Run command "npm install"
  - Run command "npm run build"
  - Run command "npm run develop"
  - Use "localhost:3000" or "localhost:8080"

To setup database

docker run \
    --name myServiceBookDB \
    -e POSTGRES_PASSWORD=1234 \
    -p 5433:5432 postgres


Inside myservicebook/src/main/resources create a file application.properties
and paste inside:

	spring.thymeleaf.cache = false
	spring.jackson.serialization.write_dates_as_timestamps=false

	spring.datasource.url=jdbc:postgresql://localhost:5433/myservicebookDB
	spring.datasource.username=postgres
	spring.datasource.password=1234
	spring.datasource.tomcat.max-active=3

	spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect
	spring.jpa.show-sql=false
	spring.jpa.hibernate.ddl-auto=create


License
----
myServiceBook
