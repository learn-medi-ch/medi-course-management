FROM node:19-alpine AS build

COPY app /build/medi-course-management-frontend/app
RUN chmod +x /build/medi-course-management-frontend/app/bin/install-libraries.sh
RUN /build/medi-course-management-frontend/app/bin/install-libraries.sh

FROM node:19-alpine AS medi-course-management-frontend

COPY --from=build /build /opt/

RUN chown -R node:node /opt/medi-course-management-frontend
RUN chmod +x /opt/medi-course-management-frontend/app/docker-entrypoint.sh
RUN /opt/medi-course-management-frontend/app/docker-entrypoint.sh


USER node:node

EXPOSE 3100

ENV SERVER_PROTOCOL=http
ENV SERVER_HOST=medi-course-management-frontend
ENV SERVER_PORT=3100
ENV BACKEND_SERVER_PROTOCOL=http
ENV BACKEND_SERVER_HOST=flux-eco-learnplaces-backend
ENV BACKEND_SERVER_PORT=3000


WORKDIR /opt/medi-course-management-frontend/app
ENTRYPOINT ["/opt/medi-course-management-frontend/app/docker-entrypoint.sh"]
