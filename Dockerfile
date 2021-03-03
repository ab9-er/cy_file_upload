FROM cypress/base:ubuntu19-node12.14.1

WORKDIR /app

COPY . .

RUN npm i

ENTRYPOINT [ "npm" ]
CMD ["run", "test"]
