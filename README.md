# E-commerce de alimentos

Este proyecto es un ecommerce de alimentos que cuenta con tres módulos en su frontend: autenticación, panel administrativo y ecommerce. En el backend, se implementa una arquitectura de microservicios que incluye los siguientes servicios: authentication, message broker, customer, inventory, logger, mail, order, product y redis. En la arquitectura de microservicios implementada, los servicios se comunican mediante el protocolo HTTP.

## Tecnologías utilizadas

- Frontend: Vue 3, Angular 15 y Flutter.
- Backend:
  - Lenguajes: Rust, Golang y Node.js.
  - Bases de datos relacionales: Postgres y Oracle.
  - Bases de datos no relacionales: MongoDB.
- Herramientas:
  - NGINX: Servidor web y proxy inverso.
  - Docker: Plataforma para la creación, envío y ejecución de aplicaciones en contenedores.
  - Kubernetes (k0s): Plataforma de orquestación de contenedores para la automatización del despliegue, escalado y administración de aplicaciones.
  - ArgoCD: Herramienta de despliegue continuo para Kubernetes.
  - Harbor: Registro de contenedores.
  - Grafana: Plataforma de análisis y visualización de datos.
  - Prometheus: Sistema de monitoreo y alerta.
  - ZIKPKIN: Plataforma de seguimiento y análisis de logs.
  - NACOS: Servicio de registro y descubrimiento de servicios.
  - Seq: Plataforma de análisis de logs en tiempo real.
  - TeamCity: Herramienta de integración y entrega continuas (CI/CD).

## Arquitectura de microservicios

A continuación, se detallan los microservicios utilizados en la arquitectura:

- **Authentication**: Este servicio se encarga de la autenticación de los usuarios en la plataforma.
- **Message broker**: Este servicio se encarga de la comunicación entre los diferentes microservicios de la plataforma.
- **Customer**: Este servicio se encarga de la gestión de los clientes registrados en la plataforma.
- **Inventory**: Este servicio se encarga de la gestión del inventario de productos.
- **Logger**: Este servicio se encarga de la gestión de los logs de la plataforma.
- **Mail**: Este servicio se encarga del envío de correos electrónicos a los usuarios.
- **Order**: Este servicio se encarga de la gestión de las órdenes de compra realizadas por los usuarios.
- **Product**: Este servicio se encarga de la gestión de los productos que se venden en la plataforma.
- **Redis**: Este servicio se encarga de la gestión de la caché de la plataforma.

## Lenguajes utilizados

Como se mencionó anteriormente, los microservicios de authentication y message broker se implementarán en Rust debido a que son los microservicios que más tráfico tendrán en la plataforma y, por lo tanto, se requiere de un lenguaje con alto rendimiento. Los demás microservicios se implementarán en Golang y Node.js.

## Bases de datos

Para la gestión de los datos estructurados, se utilizarán bases de datos relacionales como Postgres o Oracle, mientras que para la gestión de datos no estructurados se empleará una base de datos no relacional como MongoDB.

TODO: Implement the Entity Relationship Diagram.

## Despliegue

Todo el proyecto será desplegado utilizando Docker y Kubernetes.

## Contribuciones

Este proyecto está en constante evolución, por lo que se aceptan contribuciones de la comunidad. Si deseas contribuir, por favor, haz un fork del repositorio, realiza los cambios necesarios y realiza un pull request. Tu contribución será revisada y, si es aceptada, se fusionará con el repositorio principal.

## Licencia

Este proyecto se distribuye bajo la licencia [MIT](./LICENCE).
