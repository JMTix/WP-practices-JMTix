//JMTix

class recipe {

    #id;
    #input;
    #output;
    #time;

    constructor({id, input, output, time}) {
        if (typeof id != "string" || id === "") {
            throw new Error("The id has to be valid");
        }

        if (output <= 0) {
            throw new Error(`Invalid output at "{id}" recipe`);
        }
        
        if (time <= 0) {
            throw new Error(`Invalid time at "{id}" recipe`);
        }


        this.#id = id;
        this.#input = { ...input};
        this.#output = output;
        this.#time = time
    }


    get id() {
        return this.#id;
    }

    get input() {
        return this.#input
    }

    get output() {
        return this.#output
    }

     get time() {
        return this.#time
    } 

    get outputPerMinute() {
        return 60 / this.#time
    }
}