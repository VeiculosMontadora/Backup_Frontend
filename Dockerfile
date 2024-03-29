# Build application for production.
FROM node:18-alpine as build
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
RUN yarn build

# Use nginx to serve the application.
FROM nginx
# Copy certificate and private key.
COPY ./certs /etc/ssl
# Update default Nginx configuration.
RUN rm /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
