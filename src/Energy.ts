// export function EnergyType(type: 'mana' | 'stamina') {
//   return type;
// }

export type EnergyType = 'mana' | 'stamina';

export default interface Energy {
  type_ : EnergyType;
  amount: number;
}