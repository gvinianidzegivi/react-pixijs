import { Application, extend } from "@pixi/react";
import { MainContainer } from "./MainContainer";
import { Container, Sprite } from "pixi.js";

extend({
  Container,
  Sprite,
});

export const Experience = () => {
  return (
    <Application resizeTo={window}>
      <MainContainer />
    </Application>
  );
};
