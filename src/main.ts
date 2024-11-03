const init = () => {
  setTimeout(() => {
    const M = Game.Objects["Temple"].minigame
    // @ts-ignore
    M.slotGod = (god: Game.PantheonSpirit, slot: 0 | 1 | -1 | 2): boolean => {
      if (slot==god.slot) return false;
			if (slot!=-1 && M.slot[slot]!=-1)
			{
				M.godsById[M.slot[slot]].slot=god.slot;
				if (god.slot!=-1) M.slot[god.slot]=M.slot[slot];
			}
			else if (god.slot!=-1) M.slot[god.slot]=-1;
			if (slot!=-1) M.slot[slot]=god.id;
			god.slot=slot;
      // @ts-ignore
			Game.recalculateGains=true;
    }
  }, 500);
}

const ImportCorruptFixMod = {
  init: init,
};

if (typeof Steam !== 'undefined') {
  // Wait for Steam to load
  setTimeout(function () {
    Game.registerMod('ImportCorruptFix', ImportCorruptFixMod);
  }, 2000);
} else {
  Game.registerMod('ImportCorruptFix', ImportCorruptFixMod);
}