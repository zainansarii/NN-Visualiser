// The perceptron algorithm:
// 1) For every input, multiply that input by its weight
// 2) sum all of the weighted inputs
// 3) Compute the output of the perceptron based on the 
// sign of that sum passed through an activation function


class Network {

    layers = []

    constructor(nInput, nHidden, nOutput){
        this.inputNodes = nInput;
        this.hiddenNodes = nHidden;
        this.outputNodes = nOutput;

        this.isTrained = false;
    }
}

class Node {

    weights = []

    constructor(inputs){
        this.inputs = inputs
        for (let i = 0; i < inputs.length; i++) {
            this.weights[i] = Math.random() - 0.5;
          }
    }

    guess(){
        let res = 0
        for  (let i = 0; i < this.inputs.length; i++) {
            res += this.inputs[i]*this.weights[i]
        }
        return this.sign(res)
    }

    // activation function
     sign(n){
         if(n < 0){
             return -1
         }
         else{
             return 1
         }
     }

}


 
inputs = [1, 2, 5]
neuron = new Node(inputs)
console.log(neuron.guess())