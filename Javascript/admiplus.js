class admireplus {
  constructor(runtime, id) {
  
    this.runtime = runtime;
    this.menuIconURI = "https://drannamongtime-mtalt.github.io/Admireblocks/adlp.svg";
    this.blockIconURI = "https://drannamongtime-mtalt.github.io/Admireblocks/adilp.svg" ;
    this.colorScheme = ["#8b7fc9", "#8b7fc9"];

    this.deleted_sprites = {};
    this._sprites = [];
    this._costumes = [];

    this.audio_player = new Audio();
  }

  getInfo() {
    return {
      id: "admireplus",
      name: "Admireblocks+",
      blockIconURI: this.blockIconURI,
      menuIconURI: this.menuIconURI,
      color1: this.colorScheme[0],
      color2: this.colorScheme[1],
      blocks: [
        {
            opcode: "evalsom",
            blockType: "command",
            text: "Javascript eval [es]",
            arguments: {
              es: {
                type: "string",
                defaultValue: "console.log('Admireblocks+')",
              },
            },
          },
        {
            opcode: "alertbox",
            blockType: "command",
            text: "Alert box [te]",
            arguments: {
              te: {
                type: "string",
                defaultValue: "Admireblocks+",
              },
            },
          },
          {
            opcode: "df",
            blockType: "command",
            text: "Save file [fn], contents: [cont], file extension [filex]",
            arguments: {
              fn: {
                type: "string",
                defaultValue: "admireblock+",
                 cont: {
                    type: "string",
                    defaultValue: "try admireblocks+!",   
                    filex: {
                        type: "string",
                        defaultValue: "txt",   
                    },
                },
              },
            },
          },
        {
            opcode: "openlink",
            blockType: "command",
            text: "Open URL [meh]",
            arguments: {
                meh: {
                type: "number",
                defaultValue: "https://scratch.mit.edu/",
              },
            },
          },
        {
          opcode: "csu",
          blockType: "command",
          text: "create sprite from the URL [url]",
          arguments: {
            url: {
              type: "string",
              defaultValue: " ",
            },
          },
        },
        {
          opcode: "ds",
          blockType: "command",
          text: "Delete sprite [sprite]",
          arguments: {
            sprite: {
              type: "string",
              defaultValue: "Sprite1",
            },
          },
        },
        {
          opcode: "rs",
          blockType: "command",
          text: "Restore sprite [sprite]",

          arguments: {
            sprite: {
              type: "string",
              defaultValue: "Sprite1",
            },
          },
        },
        // costume stuff
        {
          opcode: "cco",
          blockType: "command",
          text: "Create costume from the URL [uri]",
          arguments: {
            costume: {
              type: "string",
              defaultValue: "costume1",
            },
            uri: {
              type: "string",
              defaultValue:
                "https://en.scratch-wiki.info/w/images/ScratchCat3.0.svg",
            },
          },
        },
        {
          opcode: "dc",
          blockType: "command",
          text: "Delete costume [costume]",
          arguments: {
            costume: {
              type: "string",
              defaultValue: "costume1",
            },
          },
        },

    
        {
          opcode: "playAudioFromURL",
          blockType: "command",
          text: "Play audio from URL [URL]",
          arguments: {
            URL: {
              type: "string",
              defaultValue: " ",
            },
          },
        },
        {
          opcode: "stopAudio",
          blockType: "command",
          text: "Stop audio",
          arguments: {},
        },
        {
          opcode: "sounds_done",
          blockType: "reporter",
          text: "Is the audio from URL Done?",
        },
        {
          opcode: "loadUnsandBoxed",
          blockType: "command",
          text: "Load an unsandboxed extension from URI or URL [uri]",
          arguments: {
            uri: {
              type: "string",
              defaultValue: "",
            },
          },
        },
        {
          opcode: "loadSandboxed",
          blockType: "command",
          text: "Load an sandboxed extension from the URI or URL [uri]",
          arguments: {
            uri: {
              type: "string",
              defaultValue: "",
            },
          },
        },
      ],
    };
  }

  async csu(args) {
    try {
      const sprite_zip = await fetch(args.url);
      if (sprite_zip.status == 200) {
        const sprite_zip_buffer = await sprite_zip.blob();
        var sprite = await vm.AddSprite(sprite_zip_buffer);
        this._sprites.push(sprite.id);
      } else {
        console.log(
          "Failed to fetch sprite:  Status: " + sprite_zip.status,
          +" " + sprite_zip.statusText
        );
      }
    } catch (e) {
      console.error(e);
    }
  }

  async movewindow(args) {
   window.moveBy(args.atr);
    }

    async openlink(args) {
        window.open(args.meh)
         }

  async ds(args, util) {
    try {
      var sprite = util.target;
      this.deleted_sprites[args.sprite.id] = await vm.deleteSprite(sprite.id);
      this._sprites.splice(this._sprites.indexOf(args.sprite), 1);
    } catch (e) {
      console.error(e);
    }
  }
  async rs(args) {
    try {
      this.deleted_sprites[args.sprite.id]();
      delete this.deleted_sprites[args.sprite.id];
      this._sprites.push(args.sprite.id);
    } catch (e) {
      console.error(e);
    }
  }
  // costumes
  async cco(args, util) {
    try {
      // get current sprite
      if (util.target.isSprite) {
        var sprite = util.target.sprite;
        const req = await fetch(args.uri);
        if (req.status == 200) {
          const blob = await req.blob();
          const costume = await vm.addCostume(blob, sprite.id);
          this._costumes.push(costume.id);
        } else {
          console.error("Failed to fetch costume");
        }
      } else {
        console.error("Internal Error: Target is not a sprite");
      }
    } catch (e) {
      console.error(e);
    }
  }

  async dc(args, util) {
    try {
      // get current sprite
      if (util.target.isSprite) {
        var sprite = util.target.sprite;
        this.deleted_costumes[args.costume] = await vm.deleteCostume(
          sprite.costumes[args.costume].id
        );
        this._costumes.splice(this._costumes.indexOf(args.costume), 1);
      } else {
        console.error("Internal Error: Target is not a sprite");
      }
    } catch (e) {
      console.error(e);
    }
  }

  playAudioFromURL({ URL }) {
    this.audio_player.pause();
    this.audio_player.currentTime = 0;
    this.audio_player.src = URL;
    this.audio_player.play();
    this.audio_player.loop = false;
  }

  async alertbox(args) {
   alert(args.te);
  }

  async evalsom(args) {
    eval(args.es);
   }

  df(args) {
    function createBlob(data) {
        return new Blob([data], { type: "text/plain" });
      }
      
      function saveAs(content, fileName) {
        const a = document.createElement("a");
        const isBlob = content.toString().indexOf("Blob") > -1;
        let url = content;
        if (isBlob) {
          url = window.URL.createObjectURL(content);
        }
        a.href = url;
        a.download = fileName;
        a.click();
        if (isBlob) {
          window.URL.revokeObjectURL(url);
        }
      }
      
      function downloadFile() {
        const file = createBlob(args.cont);
        saveAs(file, args.fn.args.filex);
      }
      downloadFile(args.fn);
   }

  stopAudio({}) {
    this.audio_player.pause();
    this.audio_player.currentTime = 0;
    this.audio_player.src = null;
  }
  sounds_done() {
    return this.audio_player.ended;
  }

  async loadUnsandboxed(args) {
    let req = await fetch(args.url);
    if (req.status == 200) {
      eval(req.responseText); 
    } else {
      console.error("Failed to fetch extention from url");
      return;
    }
  }
  async loadSandboxed(args) {
    vm.extensionManager.loadExtensionURL(args.uri);
  }
}


(function () {
  var extensionClass = admireplus;
  if (typeof window === "undefined" || !window.vm) {
    console.error("Admireblocks+ is not supported in this environment.");
  } else {
    var extensionInstance = new extensionClass(
      window.vm.extensionManager.runtime
    );
    var serviceName =
      window.vm.extensionManager._registerInternalExtension(extensionInstance);
    window.vm.extensionManager._loadedExtensions.set(
      extensionInstance.getInfo().id,
      serviceName
    );
    console.log("Admireblocks+ has been loaded.");
  }
})();
