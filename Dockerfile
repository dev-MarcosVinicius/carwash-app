FROM node:latest

EXPOSE 19000
EXPOSE 19001

ENV ADB\_IP="127.0.0.1"
ENV REACT\_NATIVE\_PACKAGER\_HOSTNAME="192.255.255.255"

# RUN apt install android-tools-adb

WORKDIR /app

COPY package.json yarn.lock app.json ./
RUN yarn --network-timeout- 100000
CMD adb connect $ADB_IP && \
    yarn run android