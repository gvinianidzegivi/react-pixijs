import { Assets, Texture } from "pixi.js";
import { useEffect, useState } from "react";
import bgAsset from "../../assets/tilemap.png";

export const MainContainer = () => {
  const [texture, setTexture] = useState(Texture.EMPTY);

  useEffect(() => {
    if (texture === Texture.EMPTY) {
      Assets.load(bgAsset).then((result) => {
        setTexture(result);
      });
    }
  }, [texture]);

  return (
    <pixiContainer>
      <pixiSprite texture={texture} />
    </pixiContainer>
  );
};
