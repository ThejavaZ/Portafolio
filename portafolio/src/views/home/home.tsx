import Banner from './banner';
import About from './about';
const Home = () => {
  return (
    <>
      //primero hacer un banner con mi nombre y un tagline por ejemplo
      desarrollador de software fullstack developer //luego una imagen mia o
      ilustracion personal //luego un resumen breve de lo que hago ejemplo: Soy
      javier un desarrollador apasionado por la tecnologia y la inovacion, pero
      sobretodo por las aplicaciones // despues un boton de contacto y un enlace
      a mi seccion de proyectos
      <Banner />
      <About />
    </>
  );
};

export default Home;
