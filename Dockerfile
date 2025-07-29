FROM almalinux:9
RUN dnf install nginx -y
RUN mkdir -p /usr/share/nginx/html
COPY chandbhai/index.html /usr/share/nginx/html/index.html
CMD [ "nginx", "-g", "daemon off;" ]