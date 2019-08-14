# This target exists to enable targeted building for running tests
FROM node:10-alpine@sha256:0d5abfc8ef9d0984010a05e234324e517620af096b8aeb2fabc841157ef2e676 as builder
WORKDIR /code
# keep package.json separate so that we can cache the npm install step more often
COPY package*.json /code/
RUN npm install --quiet

COPY . /code/

RUN npm run build
RUN npm run test

################################################################################
FROM node:10-alpine@sha256:0d5abfc8ef9d0984010a05e234324e517620af096b8aeb2fabc841157ef2e676 as prod-install
WORKDIR /app/
COPY --from=builder /code/package*.json /app/
RUN npm install --production
COPY --from=builder /code/build/ /app/dist/

################################################################################
FROM node:10-alpine@sha256:0d5abfc8ef9d0984010a05e234324e517620af096b8aeb2fabc841157ef2e676 as docker-install

RUN apk update && \
    apk add curl

WORKDIR /tmp

ENV VERSION "18.09.3"
RUN curl -L -o /tmp/docker-$VERSION.tgz https://download.docker.com/linux/static/stable/x86_64/docker-$VERSION.tgz \
    && tar -xz -f /tmp/docker-$VERSION.tgz \
    && mv docker/docker /usr/bin

################################################################################
FROM node:10-alpine@sha256:0d5abfc8ef9d0984010a05e234324e517620af096b8aeb2fabc841157ef2e676

# See GitHub Action label docs
# https://developer.github.com/actions/creating-github-actions/creating-a-docker-container/#label
LABEL "com.github.actions.name"="Deep Security Smart Check Scan"
LABEL "com.github.actions.description"="Scan container images with Deep Security Smart Check."
LABEL "com.github.actions.icon"="shield"
LABEL "com.github.actions.color"="gray-dark"
LABEL "maintainer"="Trend Micro"
LABEL "repository"="https://github.com/deep-security/smartcheck-scan-action"
LABEL "homepage"="https://www.trendmicro.com/smartcheck"

RUN apk update && \
    apk upgrade && \
    rm -rf /var/cache/apk/*

COPY --from=prod-install /app/ /app/

COPY --from=docker-install /usr/bin/docker /usr/bin/docker

WORKDIR /app/

ENTRYPOINT ["node", "/app/dist/index.js"]

