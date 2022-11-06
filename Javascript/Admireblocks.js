class AdmireBlocks {
    getInfo() {
      return {
        color1: "#8b7fc9",
        color2: "#8b7fc9",
        id: 'admireBlocks',
        name: 'AdmireBlocks',

        blocks: [
          {
            opcode: 'txtToBASE64',
            blockType: Scratch.BlockType.REPORTER,
            text: '[TEXT] to BASE64',
            arguments: {
              TEXT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'Admireblocks'
              }
            }
          },
          {
            opcode: 'Getoperatingsystem',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Operating system',
          },
          {
          opcode: 'BASE64Totxt',
          blockType: Scratch.BlockType.REPORTER,
          text: 'BASE64 [B64] To text',
          arguments: {
            B64: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'QWRtaXJlYmxvY2tz'
            }
        }
    },
    {
        opcode: 'reversetext',
        blockType: Scratch.BlockType.REPORTER,
        text: '[MJSF] backwards is?',
        arguments: {
            MJSF: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'Admireblocks'
          }
      }
  },
  {
    opcode: 'text2bin',
    blockType: Scratch.BlockType.REPORTER,
    text: '[JEOF] to binary',
    arguments: {
        JEOF: {
        type: Scratch.ArgumentType.STRING,
        defaultValue: 'Admireblocks'
      }
  }
},
{
    opcode: 'repeatfortimes',
    blockType: Scratch.BlockType.REPORTER,
    text: 'Repeat [PRIF] for [NUM] times',
    arguments: {
        PRIF: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: 'dr'
          },
          NUM: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: 2
      }
  }
},
{
    opcode: 'string2bool',
    blockType: Scratch.BlockType.BOOLEAN,
    text: '[YOURSTRING]',
    arguments: {
        YOURSTRING: {
        type: Scratch.ArgumentType.STRING,
        defaultValue: 'false'
      }
  }
},
{
    opcode: 'colorhex',
    blockType: Scratch.BlockType.BOOLEAN,
    text: '[COLOR] HEX code',
    arguments: {
        COLOR: {
        type: Scratch.ArgumentType.COLOR,
        defaultValue: '#8b7fc9'
      }
  }
},
{
    opcode: 'stringlength',
    blockType: Scratch.BlockType.REPORTER,
    text: 'Lenght of [MSHA]',
    arguments: {
        MSHA: {
        type: Scratch.ArgumentType.STRING,
        defaultValue: 'Admireblocks'
      }
  }
},
{
    opcode: 'STRINGTOU',
    blockType: Scratch.BlockType.REPORTER,
    text: 'Uppercase [STRINGTOUPPERCASE]',
    arguments: {
        STRINGTOUPPERCASE: {
        type: Scratch.ArgumentType.STRING,
        defaultValue: 'Admireblocks'
      }
  }
},
{
    opcode: 'STRINGTOL',
    blockType: Scratch.BlockType.REPORTER,
    text: 'Lowercase [STRINGTOLOWERCASE]',
    arguments: {
        STRINGTOLOWERCASE: {
        type: Scratch.ArgumentType.STRING,
        defaultValue: 'ADMIREBLOCKS'
      }
  }
},
{
    opcode: 'bin2text',
    blockType: Scratch.BlockType.REPORTER,
    text: 'Binary [FOEJ] to text',
    arguments: {
        FOEJ: {
        type: Scratch.ArgumentType.STRING,
        defaultValue: '1000001 1100100 1101101 1101001 1110010 1100101 1100010 1101100 1101111 1100011 1101011 1110011'
      }
  }
},
{
    //there will be no decode block for the ROT13 because that will be almost impossible to make
    opcode: 'text2rot13',
    blockType: Scratch.BlockType.REPORTER,
    text: '[MIRH] to ROT13',
    arguments: {
        MIRH: {
        type: Scratch.ArgumentType.STRING,
        defaultValue: 'Admireblocks'
      }
  }
},
      {
     opcode: 'logsomething',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Log [LOGTEXT]',
          arguments: {
            LOGTEXT: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'Admireblocks'
            }
        }
    },
    {
    opcode: 'Pickarandomnumber',
    blockType: Scratch.BlockType.REPORTER,
    text: 'Pick a random number',
    },
    {
        opcode: 'Pickarandomletter',
        blockType: Scratch.BlockType.REPORTER,
        text: 'Pick a random letter',
        },
        {
            opcode: 'Pickarandomsymbol',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Pick a random symbol',
            }
    
    ]
  }
}
    txtToBASE64(args) {
        // yeah i think it would break if you do other unicode characters..
        return btoa(args.TEXT)

          }
    BASE64Totxt(args) {
        // this returns the BASE64 in normal text.
        return atob(args.B64)

        }
        logsomething(args) {
        console.log(args.LOGTEXT)
        //view the console by right clicking on your browser and select "inspect" and go to console.
    }
    reversetext(args) {
        // return the reversed string
        //credits to stackoverflow for these functions
        function reverseString(str) {
            var splitString = str.split("");
         
            var reverseArray = splitString.reverse();
         
            var joinArray = reverseArray.join("");
       
            return joinArray; // "skcolberimdA"
        }
         
        return reverseString(args.MJSF);
    }
    text2bin(args) {
        var text = args.JEOF.toString();
        return Array.from(text).map((each)=>each.charCodeAt(0).toString(2)).join(" ");
    }
    bin2text(args) {
        var binary = args.FOEJ.toString();
        return binary.split(" ").map((x) => x = String.fromCharCode(parseInt(x, 2))).join("");
    }
    Getoperatingsystem() {
        function getOS() {
            var userAgent = window.navigator.userAgent,
                platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
                macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
                windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
                iosPlatforms = ['iPhone', 'iPad', 'iPod'],
                os = null;
          
            if (macosPlatforms.indexOf(platform) !== -1) {
              os = 'Mac OS';
            } else if (iosPlatforms.indexOf(platform) !== -1) {
              os = 'iOS';
            } else if (windowsPlatforms.indexOf(platform) !== -1) {
              os = 'Windows';
            } else if (/Android/.test(userAgent)) {
              os = 'Android';
            } else if (/Linux/.test(platform)) {
              os = 'Linux';
            }
          
            return os;
          }
          
          return getOS();
    }
    repeatfortimes(args) {
        return args.PRIF.repeat(Math.floor(args.NUM));
    }
    string2bool({YOURSTRING}) {
        return YOURSTRING;
      }
      colorhex(args) {
        return args.COLOR;
      }
      stringlength(args) {
        let text = args.MSHA;
        let length = text.length;
        return length
      }
      STRINGTOU(args) {
        return args.STRINGTOUPPERCASE.toUpperCase();
        
      }
      STRINGTOL(args) {
        return args.STRINGTOLOWERCASE.toLowerCase();
        
      }
      Pickarandomnumber(args) {
        let rans = Math.floor((Math.random() * 9) + 1);
        return rans
      }
      Pickarandomletter(args) {
        const randomLetter = ('abcdefghijklmnopqrstuvwxyz').split('')[(Math.floor(Math.random() * 26 ))];
        return randomLetter
      }
      Pickarandomsymbol(args) {
        const randomSymbol = ('!@#$%^&*()_+}{|/?').split('')[(Math.floor(Math.random() * 17 ))];
        return randomSymbol
      }
    text2rot13(args) {
        //credits to Hello dev world
        //this does not work with numbers!, this will only work for text!
        const rot13 = (message) => {
            const alpha = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
            return message.replace(/[a-z]/gi, letter => alpha[alpha.indexOf(letter) + 13]);
          }
          return rot13(args.MIRH);
    }
  }
  Scratch.extensions.register(new AdmireBlocks());

  //extension made by drannamongtime/ohman_soonsoon/creator of RenaYa.
