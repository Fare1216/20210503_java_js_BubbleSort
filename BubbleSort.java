import java.util.Random;

class Main{
    /*===== 表示 =====*/
    static void print(int array[]){
        for(int i = 0; i < array.length; i++){
            System.out.println("num[" + i +"] =" + array[i]);
        }
    }
    
    /*===== バブルソートアルゴリズム =====*/
    static void sort(int array[]){
        for(int j = 1; j < array.length; j++){
            for(int i = 1; i < array.length; i++){
                if(array[i-1] >= array[i]){
                    int z = array[i-1];
                    array[i-1] = array[i];
                    array[i] = z;
                }
            }
        }
    }
    
    /*===== メイン =====*/
    public static void main(String[] args){
        int num[] = new int[10];
        boolean flag = true;
        
        Random r = new Random();
        
        for(int i = 0; i < 10; i++){
            num[i] = r.nextInt(100);
        }
        
        System.out.println("rand");
        print(num);
        sort(num);
        System.out.println("sort");
        print(num);
    }
}