class admireblocksplus {
  constructor(runtime) {
      this.runtime = runtime
  }
      getInfo() {
        return {
            "id": "admireplus",
            "name": "Admireblocks+",
            "menuIconURI": 'https://drannamongtime-mtalt.github.io/Admireblocks/adl.svg',
            "blockIconURI": 'https://drannamongtime-mtalt.github.io/Admireblocks/adl.svg',
            
            "blocks": [{
                        "opcode": "alertbox",
                        "blockType": "command",
                        "text": "alert [h]",
                        "arguments": {
                            "h": {
                                "type": "string",
                                "defaultValue": "Admireblocks"
                            }
                        },
                    },
            ],       
        };
    }
  }
  alertbox(args); {
    alert(args.h);
}
(function() {
  var extensionInstance = new admireblocksplus(window.vm.extensionManager.runtime)
  var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
  window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})()
