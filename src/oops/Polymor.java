package oops;

public class Polymor {

    public void animalSound() {
        System.out.println("The animal makes a sound");
    }

}

class Pig extends Polymor{
    public void animalSound() {
        System.out.println("The pig says: wee wee");
    }
}

class Dog extends Polymor {
    public void animalSound() {
        System.out.println("The dog says: bow wow");
    }
}

class Main {

    public static void main(String[] args) {
        Polymor poly = new Polymor();  // Create a Animal object
        Polymor dog = new Dog();  // Create a Pig object
        Polymor pig = new Pig();

        poly.animalSound();
        dog.animalSound();
        pig.animalSound();


    }
}