var javascript = {
    name : 'javascript',
    libraries:['React','Angular','Vue'],
    printLibraries:function () {
        this.libraries.forEach((a) => 
            console.log(`${this.name} love ${a}`))

    },
};

javascript.printLibraries();