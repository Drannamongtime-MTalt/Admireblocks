(function(Scratch) {
    'use strict';
  
    if (!Scratch.extensions.unsandboxed) {
      throw new Error('Admire16 must be run unsandboxed!');
    }
  
 // code goes here //
    class Admire16 {
      getInfo () {
        return {
          id: 'Admire16',
          name: 'Admire16',
          blocks: [
            {
              opcode: 'ghcmmnj',
              blockType: Scratch.BlockType.COMMAND,
              text: 'Open link [LINK]',
              arguments: {
                LINK: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: ' ',
                }
              }
            },
        ]
        }
    }
    ghcmmnj (args) {
        window.open(args.LINK)
      }
    }
    Scratch.extensions.register(new Admire16());
  })(Scratch);