FROM ubuntu:26.04
RUN apt update;apt upgrade -y
RUN apt install nodejs npm -y
COPY ./ /web
WORKDIR /web
RUN npm install
CMD npm run dev -- --host