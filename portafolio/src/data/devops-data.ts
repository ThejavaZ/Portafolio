export const devopsData = {
  id: "devops",
  name: "DevOps & Cloud",
  logo: "/technologies/docker.png", // Docker es el icono más representativo
  theme: "bg-blue-600 dark:bg-gray-900",
  description:
    "Automatización de despliegues, gestión de contenedores y configuración de entornos en la nube para garantizar ciclos de desarrollo rápidos y estables.",
  stack: [
    {
      name: "Docker",
      img: "docker.png",
      type: "Contenerización",
      description: "Empaquetado de aplicaciones y dependencias.",
    },
    {
      name: "Kubernetes",
      img: "kubernetes.png",
      type: "Orquestación",
      description: "Gestión y escalado automático de contenedores.",
    },
    {
      name: "GitHub Actions",
      img: "github-actions.png",
      type: "CI/CD",
      description: "Automatización de flujos de trabajo y despliegue.",
    },
    {
      name: "Jenkins",
      img: "jenkins.png",
      type: "CI/CD",
      description: "Servidor de automatización para integración continua.",
    },
    {
      name: "Google Cloud",
      img: "gcp.png",
      type: "Cloud Computing",
      description: "Servicios de infraestructura en la nube de Google.",
    },
    {
      name: "Redis",
      img: "redis.png",
      type: "Cache & Message Broker",
      description: "Optimización de velocidad y comunicación entre servicios.",
    },
    {
      name: "Nginx",
      img: "nginx.png",
      type: "Web Server / Proxy",
      description: "Servidor web y balanceador de carga de alto rendimiento.",
    },
    {
      name: "Git",
      img: "git.png",
      type: "Control de Versiones",
      description: "Gestión de código y colaboración distribuida.",
    },
  ],
};
