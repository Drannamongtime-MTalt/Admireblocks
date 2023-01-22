(function(Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
      throw new Error("MacaoBlocks must be run unsandboxed");
  }


  const ArgumentType = Scratch.ArgumentType;
  const BlockType = Scratch.BlockType;

  class MacaoBlocks {
      getInfo() {
          return {
              id: "mcblocks",
              color1: "#248756",
              color2: "#248756",
              color3: "#248756",
              blocks: [
                  {
                      opcode: "openlink",
                      blockType: BlockType.COMMAND,
                      text: "Open link [LINK]",
                      arguments: {
                        LINK: {
                          type: ArgumentType.STRING,
                          defaultValue: "https://scratch.mit.eduS"
                      }
                    }
                  },
              ],
          }
        }
      openlink(args) {
        window.open(args.LINK);
        //throws an error if something goes wrong (eg, invaid link)
        throw new Error("Something went wrong.")
      }
    }

  Scratch.extensions.register(new MacaoBlocks());
})(Scratch);
