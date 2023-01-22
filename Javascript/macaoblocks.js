const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');

/**
 * Class
 * @constructor
 */
class macaoblocks {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {runtime}
         */
        this.runtime = runtime;
        store.attachRuntime(runtime);
    /**
     * @returns {object} metadata for this extension and its blocks.
     */
    }
    getInfo () {
        return {
            id: 'macaoblocks',
            name: 'MacaoBlocks',
            color1: '#659b80',
            color2: '#5e8e76',
            color3: '#6ca98b',
            isDynamic: true,
            orderBlocks: this.orderCategoryBlocks,
            blocks: [
                {
                    opcode: 'openlink',
                    blockType: BlockType.COMMAND,
                    arguments: {
                      link: {
                          type: ArgumentType.STRING,
                          defaultValue: "https://scratch.mit.edu"
                      }
                  },
                    text: 'Open link [link]'
                },
            ],
          }
        }
    openlink (args) {
      //Opens link
      window.open(args.link)
    }
}

module.exports = macaoblocks;
