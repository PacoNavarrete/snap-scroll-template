import { LeftBarNav } from '../components/LeftBarNav';
import { useActiveSection } from '../hooks/useActiveSection';

const pageSections = [
  'home',
  'about',
  'work',
  'expertise',
  'company',
  'contact',
];

export default function Home() {
  const [sectionsContainerRef, activeSection, setActiveSection] =
    useActiveSection(pageSections);

  return (
    <div>
      <LeftBarNav sections={pageSections} activeSection={activeSection} />
      <main
        ref={sectionsContainerRef}
        className="overflow-y-scroll overflow-x-hidden h-screen snap-y snap-mandatory bg-slate-200 px-[90px] "
        onScroll={(e) => {
          const scrollIndex = Math.round(
            e.target.scrollTop / window.innerHeight
          );
          if (scrollIndex !== activeSection) {
            setActiveSection(scrollIndex);
          }
        }}
      >
        <section
          id="home"
          className="min-h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">01 LETANÍA DE MIS DEFECTOS</h1>
          <br />
          <ul className="flex flex-col">
            <li class="text-2xl text-black">
              I <br /> Casa redonda tenía de redonda soledad: el aire que la
              invadía era redonda armonía de irrespirable ansiedad. Las mañanas
              eran noches, las noches desvanecidas, las penas muy bien logradas,
              las dichas muy mal vividas. Y de ese ambiente redondo, redondo por
              negativo, mi corazón salió herido y mi conciencia turbada. Un
              recuerdo mantenido: redonda, redonda nada.
            </li>
            <li class="text-2xl text-black">
              II <br /> Escaleras sin peldaños mis penas son para mí, cadenas de
              desengaños, tributos que al mundo di. Tienen diferente forma y
              diferente matiz, pero unidas por los años, mis penas, o mis
              engaños, como sucesión de daños, son escaleras en mí.
            </li>
          </ul>
          <br />
          <p>Autor del poema: Pita Amor</p>
        </section>

        <section
          id="about"
          className="h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">02 REÍR LLORANDO (GARRICK)</h1>
          <br />
          <p className="text-2xl text-black">
            Viendo a Garrik —actor de la Inglaterra— el pueblo al aplaudirlo le
            decía: «Eres el más gracioso de la tierra y el más feliz...» Y el
            cómico reía. Víctimas del spleen, los altos lores, en sus noches más
            negras y pesadas, iban a ver al rey de los actores y cambiaban su
            spleen en carcajadas. Una vez, ante un médico famoso, llegóse un
            hombre de mirar sombrío: «Sufro —le dijo—, un mal tan espantoso como
            esta palidez del rostro mío...
          </p>
          <br />
          <p>Autor del poema: Juan de Dios Peza</p>
        </section>

        <section
          id="work"
          className="h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">03 LAS AVES VEN</h1>
          <br />
          <p className="text-xl text-black">
            Es el arco que encierra y que sostiene la imagen: la plenitud del
            mar. Luz de insaciada transparencia. Bajo la tierra se entreteje la
            historia: aguas que engendran sus recintos. Bullir de peces Ecos que
            dejan su opacidad, briznas, rastros que emergen. Estallidos que
            fijan su estupor en los muros, la flor, la piel de sus
            calcinaciones. Las aves ven. Los peldaños encienden sus oleadas
            sedosas frente a los lechos que germinan; la sombra oculta su
            espesor.
          </p>
          <br />
          <p>Autor del poema: Coral Bracho</p>
        </section>
        <section
          id="expertise"
          className="h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">04 EL ORBE DE LA DANZA</h1>
          <br />
          <p className="text-2xl text-black">
            Mueve los aires, torna en fuego su propia mansedumbre: el frío va al
            asombro y el resplandor a música es llevado. Nadie respira, nadie
            piensa y sólo el ondear de las miradas luce como una cabellera. En
            la sala solloza el mármol su orden recobrado, gime el río de ceniza
            y cubre rostros y trajes y humedad. Cuerpo de acontecer o cima en
            movimiento, su epitafio impera en la penumbra y deja desplomes, olas
            que no turban. Muertas de oprobio, en el espacio dormitan las
            familias, tristes como el tahúr aprisionado, y añora la mujer
            adúltera la caridad de ajena sábana. Bajo la luz, la bailarina sueña
            con desaparecer.
          </p>
          <br />
          <p>Autor del poema: Alí Chumacero</p>
        </section>

        <section
          id="company"
          className="h-screen snap-center snap-alway pt-[50px]"
        >
          <h1 className="text-6xl text-black">05 AMO EL CANTO DEL CENZONTLE</h1>
          <br />
          <p className="text-black text-2xl">
            Amo el canto del cenzontle, pájaro de cuatrocientas voces amo el
            color del jade, y el enervante perfume de las flores; Pero amo más a
            mi hermano el hombre.
          </p>
          <br />
          <p>Autor del poema: Nezahualcóyotl</p>
        </section>

        <section
          id="contact"
          className="h-screen snap-center snap-always pt-[50px]"
        >
          <h1 className="text-6xl text-black">06 RUTA</h1>
          <br />
          <p className="text-2xl text-black">
            A bordo del expreso volamos sobre la irrealidad del continente. La
            tarde apagada en los espejos, y los adioses sangran en mi mente. El
            corazón nostálgico presiente a lo largo de este viaje, literaturas
            vagabundas que sacudieron las plumas de sus alas, en los fríos
            corredores del paisaje. Van pasando las campiñas sonámbulas mientras
            el tren se aleja entre los túneles del sueño. Allá de tarde en
            tarde, ciudades apedreadas de gritos y adioses. Ríos de adormideras
            que vienen del fondo de los años, pasan interminablemente, bajo los
            puentes, que afirmaron su salto metálico sobre las vertientes.
            Después, montañas, silenciosos ejércitos aúllan a la muerte.
          </p>
          <br />
          <p>Autor del poema: Manuel Maples Arce</p>
        </section>
      </main>
    </div>
  );
}
