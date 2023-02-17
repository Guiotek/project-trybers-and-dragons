import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Warrior extends Archetypes {
  private static instances = 0;
  private _energyType : EnergyType;

  constructor(name: string) {
    super(name);
    Warrior.instances += 1;
    this._energyType = 'stamina';
  }

  static createdArchetypeInstances() {
    return this.instances;
  }

  get energyType() {
    return this._energyType;
  }
}