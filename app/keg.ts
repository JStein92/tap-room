let globalId : number = 0;

export class Keg {
  pintsRemaining: number;

  constructor(
    public name: string,
    public brand: string,
    public style: string,
    public price: number,
    public alcoholContent: number) {

      this.pintsRemaining = 124;

    }
    public id : number = globalId++;

    pour() {
      this.pintsRemaining -= 1;
    }

    growler() {
      this.pintsRemaining -= 2;
    }

    largeGrowler() {
      this.pintsRemaining -= 4;
    }

    isEmpty() {
      if(this.pintsRemaining <= 0) {
        return true;
      } else {
        return false;
      }
    }

    isLow() {
      if(this.pintsRemaining <= 10) {
        return true;
      } else {
        return false;
      }
    }
}
