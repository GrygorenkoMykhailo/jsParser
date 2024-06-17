const fs = require('fs');
const path = require('path');

module.exports = class ApplicationContext{
    save(replicaName, HtmlElements){
        try{
            const filePath = path.join(__dirname + '/../database/replicas.json');   
            const raw = fs.readFileSync(filePath);
            const replicas = JSON.parse(raw);

            const newReplica = this.#htmlElementsToObject(replicaName, HtmlElements);

            const replicaIndex = replicas.findIndex(r => r.name === replicaName); 
            if(replicaIndex >= 0){
                replicas[replicaIndex] = newReplica;
                fs.writeFileSync(filePath, JSON.stringify(replicas));
            }
            else{
                replicas.push(newReplica);
                fs.writeFileSync(filePath, JSON.stringify(replicas));
            }     
        }
        catch(e){
            console.log(e);
            this.#initializeFile();
        }
    }

    checkIfDataIdentical(replicaName, HtmlElements){
        try{
            const filePath = path.join(__dirname + '/../database/replicas.json');   
            const raw = fs.readFileSync(filePath);
            const replicas = JSON.parse(raw);

            const previousReplica = replicas.find(r => r.name === replicaName);
            if(!previousReplica){
                this.save(replicaName, HtmlElements);
                return true;
            }

            const replica = this.#htmlElementsToObject(replicaName, HtmlElements);
            for (let i = 0; i < previousReplica.data.length; i++) {
                if (replica.data[i] !== previousReplica.data[i]) {
                    return false;
                }
            }
            if(replica.data.length !== previousReplica.data.length){
                return false;
            }

            return true;
        }catch(e){
            console.log(e);
            this.#initializeFile();
        }
    }

    #htmlElementsToObject(replicaName, HtmlElements){
        const newReplica = {};
        newReplica.name = replicaName;
        newReplica.data = [];
        HtmlElements.forEach(element => {
            newReplica.data.push(element.innerHTML);
        });
        return newReplica;
    }

    #initializeFile(){
        const filePath = path.join(__dirname + '/../database/replicas.json');
        fs.writeFileSync(filePath, JSON.stringify([]));
    }
}