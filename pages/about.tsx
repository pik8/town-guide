import Image from 'next/image';

export default function About() {
    return (
        <>
            <div>
                A Fuseta é uma freguesia do Concelho de Olhão localizada no litoral do sotavento algarvio, distrito de
                Faro. Apresenta uma área de 0,36 quilómetros quadrados e está limitada a norte e a oeste pela
                Freguesia de Moncarapacho, a sul pela Ria Formosa e a leste pelo Concelho de Tavira. Era a antiga
                freguesia de Nossa Senhora do Carmo, um curato do Concelho de Tavira, ao qual pertenceu e
                posteriormente se separou. Terra conhecida pelos seus pescadores que estiveram envolvidos nos
                descobrimentos, tendo sido os primeiros a pescar na Terra Nova, após a sua descoberta no ano 1500
                por Gaspar Côrte-Real. O seu povoamento iniciou-se com algumas cabanas usadas pelos pescadores
                para guardar todos os aprestos de pesca de armação praticada na zona. Ao longo do tempo o número
                de cabanas foi aumentando permitindo a fixação dos pescadores que pretendiam ter melhor acesso à
                barra. Terra de gente do mar, a vila da Fuseta dedica-se sobretudo às atividades de pesca e exploração
                dos seus derivados. Devido à exploração das praias e do Parque de Campismo, o Turismo na Fuseta
                conheceu nos últimos anos um desenvolvimento local significativo, em especial no Verão, sendo visitada
                por centenas de turistas e visitantes. O seu povoamento iniciou-se com algumas cabanas usadas pelos pescadores
                para guardar todos os aprestos de pesca de armação praticada na zona. Ao longo do tempo o número
                de cabanas foi aumentando permitindo a fixação dos pescadores que pretendiam ter melhor acesso à
                barra. Terra de gente do mar, a vila da Fuseta dedica-se sobretudo às atividades de pesca e exploração
                dos seus derivados. Devido à exploração das praias e do Parque de Campismo, o Turismo na Fuseta
                conheceu nos últimos anos um desenvolvimento local significativo, em especial no Verão, sendo visitada
                por centenas de turistas e visitantes.
            </div>
            <Image
                src="/salvavidas.jpg"
                width={500}
                height={375}
                alt="Picture of Fuzeta"
            />
            <h1>The Owners of this house</h1>
            <div>Pics and Gon</div>
        </>
    );
}
