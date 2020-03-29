import Config from "../assets/config.json";

export default class ChordsUtil {
  constructor() {
    this.dataPools = Config["dataPools"];
    this.notAllowed = Config["notAllowed"];
  }

  getDataPoolKeys = () => Object.keys(this.dataPools);

  isChordAllowed = chord => {
    const filter = this.notAllowed.filter(combination =>
      chord.join("").includes(combination)
    );
    return filter.length > 0 ? false : true;
  };

  pickPoolChord = mode => {
    const poolChords = this.dataPools[mode]["poolChords"];
    let chord = [];
    poolChords.forEach(pool => {
      const rndmIndex = Math.floor(Math.random() * pool.length);
      chord.push(pool[rndmIndex]);
    });
    return chord;
  };

  pickAdditionalChord = mode => {
    const additionalChords = this.dataPools[mode]["additionalChords"];
    const rndmIndex = Math.floor(Math.random() * additionalChords.length);
    return additionalChords[rndmIndex].match("(.*)(/)(.*)").splice(1);
  };

  generate = (mode, count) => {
    var outputChords = [];

    for (var i = 0; i < count; i++) {
      do {
        var newChord = [];
        if (
          !Math.floor(Math.random() * Object.keys(this.dataPools[mode]).length)
        ) {
          // use pool chords
          do {
            newChord = this.pickPoolChord(mode);
          } while (!this.isChordAllowed(newChord));
        } else {
          // use additional chords
          newChord = this.pickAdditionalChord(mode);
        }
      } while (
        i !== 0 &&
        newChord.join("") === outputChords[i - 1].value.join("")
      );

      outputChords.push({
        key: i,
        value: newChord
      });
    }

    return outputChords;
  };
}
