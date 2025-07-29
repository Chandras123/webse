FROM almalinux:9
RUN dnf install nginx -y
RUN mkdir -p /usr/share/nginx/html
COPY chandbhai/ /usr/share/nginx/html/
CMD [ "nginx", "-g", "daemon off;" ]