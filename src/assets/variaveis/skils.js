import html from '../../assets/img/html-img.png';
import css from '../../assets/img/css-img.png';
import js from '../../assets/img/js-img.png';
import react from '../../assets/img/react-img.png';
import ts from '../../assets/img/ts-img.png';
import ps from '../../assets/img/photoshop-img.png';
import figma from '../../assets/img/figma-img.png';
import blender from '../../assets/img/blender-img.png';


const skils = [
    {
        name: "HTML",
        description: "HTML abreviação para a expressão inglesa HyperText Markup Language, que significa: 'Linguagem de Marcação de Hipertexto' é uma linguagem de marcação utilizada na construção de páginas na Web.",
        experience: "",
        img: html
    },
    {
        name: "CSS",
        description: "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web.",
        experience: ["Saas", "Styled-Components" ],
        img: css
    },
    {
        name: "Javascript",
        description: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web.",
        experience: ["Es6", "Api-Rest", "Express"],
        img: js
    },
    {
        name:"React",
        description:"O React é uma biblioteca JavaScript de código aberto com foco em criar interfaces de usuário em páginas web. É mantido pelo Facebook, Instagram, outras empresas e uma comunidade de desenvolvedores individuais. É utilizado nos sites da Netflix, Imgur, Feedly, Airbnb, SeatGeek, HelloSign, Walmart e outros.",
        experience: ["Desenvolvimento Web", "Redex", "Rook's (useState, useEffect)"],
        img: react
    },
    {
        name:"Typescript",
        description:"O TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
        experience: ["Tipagem de components", "Auxilio do desenvolvimento de arquiteturas escalonaveis"],
        img: ts
    },
    {
        name: "Figma",
        description: "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web.",
        experience: ["Estilização de páginas Web de páginas e interfaces."],
        img: figma
    },
    {
        name: "Photoshop",
        description: "Adobe Photoshop é um software caracterizado como editor de imagens bidimensionais do tipo raster desenvolvido pela Adobe Systems.",
        experience: ["Criação e edição de imagens", "Criação de marcas"],
        img: ps
    },
    {
        name:"Blender",
        description: "Blender, também conhecido como blender3d, é um programa de computador de código aberto, desenvolvido pela Blender Foundation, para modelagem, animação, texturização, composição, renderização, e edição de vídeo.",
        experience: ["Criação de objetos 3D", "Animações em 3D", "Texturizão de personagens e cenários"],
        img: blender
    }
];
export default skils