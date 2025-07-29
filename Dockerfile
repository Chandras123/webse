FROM almalinux:9
RUN dnf install nginx -y
COPY . /usr/share/nginx/html/
CMD [ "nginx", "-g", "daemon off;" ]