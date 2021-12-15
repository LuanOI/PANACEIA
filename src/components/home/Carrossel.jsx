import React, { useState } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Item from "../../assets/img/imghome/auto.jpg";
import Item1 from "../../assets/img/imghome/auto1.jpg";
import Item2 from "../../assets/img/imghome/auto2.jpg";
import Item3 from "../../assets/img/imghome/auto3.jpg";
import Item4 from "../../assets/img/imghome/auto4.jpg";
import Item5 from "../../assets/img/imghome/auto5.jpg";
import Item6 from "../../assets/img/imghome/auto6.jpg";
import Item7 from "../../assets/img/imghome/auto7.jpg";
import Item8 from "../../assets/img/imghome/auto8.jpg";
import Item9 from "../../assets/img/imghome/auto9.jpg";
import Item10 from "../../assets/img/imghome/auto10.jpg";
import Item11 from "../../assets/img/imghome/auto11.jpg";
import Item12 from "../../assets/img/imghome/auto12.jpg";

import {
  StyledCarrocelContainer,
  StyledImageContainer,
  StyledArrowContainer,
  StyledImage,
} from "../../assets/style/StyleGlobal";

const imagens = [
  Item,
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  Item8,
  Item9,
  Item10,
  Item11,
  Item12,
];

const Carrossel = () => {
  const [mudarImageIndex, setMudarImageIndex] = useState(0);

  const nextImage = () => {
    setMudarImageIndex((primeiroIndex) => primeiroIndex + 1);
  };

  const preImage = () => {
    setMudarImageIndex((primeiroIndex) => primeiroIndex - 1);
  };

  return (
    <StyledCarrocelContainer>
      {mudarImageIndex !== 0 && (
        <StyledArrowContainer onClick={preImage}>
          <MdKeyboardArrowLeft />
        </StyledArrowContainer>
      )}
      <StyledImageContainer>
        <StyledImage src={imagens[mudarImageIndex]} />
      </StyledImageContainer>
      {mudarImageIndex !== imagens.length - 1 && (
        <StyledArrowContainer onClick={nextImage}>
          <MdKeyboardArrowRight />
        </StyledArrowContainer>
      )}
    </StyledCarrocelContainer>
  );
};
export default Carrossel;
