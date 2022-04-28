interface IntAnimal {
    void animalSound(); // interface method (does not have a body)
    void sleep(); // interface method (does not have a body)
}

class IntPig implements IntAnimal {
    public void animalSound() {
        System.out.println("The pig says: wee wee");
    }
    public void sleep() {
        System.out.println("Zzz");
    }
}

class IntMain {
    public static void main(String[] args) {
        IntPig myPig = new IntPig();
        myPig.animalSound();
        myPig.sleep();
    }
}
