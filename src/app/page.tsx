import Image from "next/image";
import Card from "./components/card";

export default function Home() {
  return (
    <>
       <header>
          <h1 className="text-secondaryGreen font-bold mb-20 text-4xl">
            Olá, o que você está procurando hoje?
          </h1>
       </header>
       <article className="block m-auto">
          <Image
            src="/droneMain.svg"
            alt="Imagem de um drone"
            width={400}
            height={400}
          />
       </article>
       <article className="flex flex-wrap gap-4">
          <Card
            image="/ambiental.svg"
            title="Ambiental"
            link="/ambiente"
          />
          <Card
            image="/geografico.svg"
            title="Geográfico"
            link="/"
          />
          <Card
            image="/pessoas.svg"
            title="Populacional"
            link="/"
          />
          <Card
            image="/turismo.svg"
            title="Turismo"
            link="/"
          />
          <Card
            image="/comercio.svg"
            title="Comércio"
            link="/"
          />
          <Card
            image="/outro.svg"
            title="Outras opções"
            link="/"
          />
       </article>
    </>
  );
}