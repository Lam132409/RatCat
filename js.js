class Rat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = true;
    }

    speak(name) {
        return this.name + "chit chit!";
    }

}

class Cat {
    constructor(name, weight, speed) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;

    }

    speak(name){
        return this.name + "meo meo!";
    }
    catch(rat){
        if(this.speed > rat.speed){
            alert(this.name + " bắt " + rat.name);
            rat.status = false;
        }
        else {
            alert(this.name + "  không bắt " + rat.name)
        }

    }
    eatRat() {
        this.weight += rat.weight;
        alert(this.name + " ăn " + rat.name );

    }
}
let cat = new Cat("cat",200,60);
cat.speak();
let rat = new Rat("rat",100,50);
rat.speak();
cat.catch(rat);
cat.eatRat(rat);