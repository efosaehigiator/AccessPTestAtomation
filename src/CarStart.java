interface CarStart {
    void start();
}

interface CarStop{
   void stop();
}

 class CarS implements CarStart, CarStop  {
    public void start()  {
        System.out.println("The car engine has been started.");
    }

    public void stop()  {
        System.out.println("The car engine has been stopped.");
    }

    public static void main(String args[])  {
        CarS c = new CarS();

        c.start();
        c.stop();
    }
}  


