(function(Scratch) {
  'use strict';

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('MacaoBlocks must be run unsandboxed!');
  }

  class MacaoBlocks {
    getInfo () {
      return {
        id: 'macaoblocks',
        name: 'MacaoBlocks',
        color1: '#69ca99',
        color2: '#5ca882',
        color3: '#69c798',
        blocks: [
          {
            opcode: 'ie1',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Open link [im1]',
            arguments: {
              im1: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://www.google.com/'
              }
            }
          },

        ],
      };
    }
    ie1 () {
      window.open(im1);
    }
  }
  Scratch.extensions.register(new MacaoBlocks());
})(Scratch)
