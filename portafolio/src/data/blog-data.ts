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
    id: "Curso de Go",
    title: "Aprendiendo Go: Mis primeros pasos con el lenguaje",
    excerpt: "Mi recorrido para dominar Go y su enfoque en la simplicidad.",
    date: "2026-04-02",
    author: "Javier",
    category: "Backend",
    image: "/blog/flutter-vs-maui.jpg",
    content:
      "Goolang es uno de los lenguajes de programacion que mas me ha llamado la atencion en los ultimos años, y por eso decidi aprenderlo. En este post quiero compartir mi experiencia aprendiendo Go, desde los conceptos basicos hasta mis primeros proyectos con el lenguaje. Go es conocido por su simplicidad, rendimiento y facilidad de uso, lo que lo hace ideal para el desarrollo de backend y microservicios. En este post, te contare como fue mi proceso de aprendizaje, los recursos que utilice y algunos consejos para quienes quieran empezar a aprender Go.",
  },
];
