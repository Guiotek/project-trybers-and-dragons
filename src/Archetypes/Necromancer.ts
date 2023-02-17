import { EnergyType } from '../Energy';
import Archetypes from './Archetypes';

export default class Necromancer extends Archetypes {
  private static instances = 0;
  private _energyType : EnergyType;

  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
    this._energyType = 'mana';
  }

  static createdArchetypeInstances() {
    return this.instances;
  }

  get energyType() {
    return this._energyType;
  }
}