export interface BlogPost {
  id: string;
  title: string;
  excerpt: string; // Resumen corto para la lista
  date: string;
  author: string;
  category: "Backend" | "IoT" | "Frontend" | "DevOps" | "Opinión";
  image: string;
  content: string; // Aquí va el texto largo
}

export const allPosts: BlogPost[] = [
  {
    id: "mi-primer-post-backend",
    title: "Por qué elegí Python para mi arquitectura de Microservicios",
    excerpt:
      "Una reflexión sobre la escalabilidad y la rapidez de desarrollo con FastAPI.",
    date: "2024-05-20",
    author: "Javier",
    category: "Backend",
    image: "/blog/python-backend.jpg",
    content: "Aquí va todo el desarrollo de tu artículo...",
  },
  {
    id: "adios-maui-hola-flutter",
    title: "De .NET MAUI a Flutter: Mi experiencia",
    excerpt: "Las razones técnicas por las que decidí cambiar mi stack móvil.",
    date: "2024-05-18",
    author: "Javier",
    category: "Opinión",
    image: "/blog/flutter-vs-maui.jpg",
    content: "Contenido detallado...",
  },
];
