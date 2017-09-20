import { Keg } from './keg';
export class KegManager{
  allKegs: Keg[] = [];

  addKeg(keg:Keg){
    this.allKegs.push(keg);
  }
}
