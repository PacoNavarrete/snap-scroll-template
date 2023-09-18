import { useRef, useState, useEffect } from 'react';

export function useActiveSection({ sections }) {
  const [activeSection, setActiveSection] = useState(0);
  const sectionsContainerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      // scrollY almacena el valor de los pixeles que han sido desplazados por el scroll vertical:
      const scrollY = window.scrollY;

      // sectionOffsets almacena un arreglo (con la informacion la posicion de cada elemento en pixeles con respecto a la parte superior de pagina) que corresponde a cada una de las secciones de esta pagina:
      const sectionOffsets = sections.map((section) => {
        //busca los elementos por el id que esta en cada posicion del arreglo de arriba que nombramos sections:
        const element = document.getElementById(section.toLowerCase());
        // si existe el elemento lo agrega al arregla que retornara, si no existe retorna 0:
        return element ? element.offsetTop : 0;
      });

      // almacena el indice del elemento que cumpla con la condicion evaluada en el callback:
      // mas simple almacena el indice del elemento que se encuentra dentro de la pantalla en una cantidad de pixeles de mas del 50%.
      const currentSection = sectionOffsets.findIndex(
        // callback function que evalua en cada posicion del arrglo sectionOffsets, offset es el elemento actual siendo procesado, index es la posicion o indice del elemento actual, recuerda que offset representa un numero de pixeles:
        (offset, index) =>
          // si el valor en pixeles del elemento actual evaluado es menor o igual a la cantidad de pixeles desplazados y si el valor en pixeles que se encuentra en una posicion adelante del elemento evaluado es mayor a el valor de los pixeles despalazados, retornara el elemento actual
          offset <= scrollY && sectionOffsets[index + 1] > scrollY
      );

      // si la pantalla que actualmente esta siendo vista es diferente de -1 es decir que efectivamente ya esta  en vista en mas del 50% en pantalla, almacena en el estada la posicion de esa seccion
      if (currentSection !== -1) {
        setActiveSection(currentSection);
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return [sectionsContainerRef, activeSection, setActiveSection];
}
