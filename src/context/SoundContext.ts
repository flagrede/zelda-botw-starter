import { createContext } from "react";
import { PlayFunction } from "use-sound/dist/types";

type ContextProps = {
  playSelect: PlayFunction;
  playAction: PlayFunction;
};

const SoundContext = createContext<ContextProps>({
  playSelect: () => null,
  playAction: () => null,
});

export default SoundContext;
