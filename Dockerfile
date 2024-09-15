FROM ubuntu:latest
LABEL authors="grishashustov"

ENTRYPOINT ["top", "-b"]