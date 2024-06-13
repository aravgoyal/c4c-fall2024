// export interface PartnerDetails {
//     thumbnailUrl: string;
//     name: string;
//     description: string;
// }

export type PartnerData = Record<string, Partner>;

export interface PartnerTileProps {
    partners: Array<Partner>
  }

export class Partner {
    name: string;
    description: string;
    logo: string;
    active: boolean

    constructor(name:string, description:string, logo:string, active:boolean) {
        this.name = name;
        this.description = description;
        this.logo = logo;
        this.active = active;
    }

    // /**
    //  * Changes the name of a partner to the given name.
    //  * @param newName the new name of the partner
    //  */
    // public updateName(newName:string) {
    //     this.name = newName;
    //     console.log("Name changed to " + newName);
    // }

    // /**
    //  * Changes the description of a partner to the given description.
    //  * @param newDescription the new description of the partner
    //  */
    // public updateDescription(newDescription:string) {
    //     this.description = newDescription;
    //     console.log("Description changed to" + newDescription);
    // }

    // /**
    //  * Changes the description of a partner to the given description.
    //  * @param newDescription the new description of the partner
    //  */
    // public updateLogo(newLogo:string) {
    //     this.logo = newLogo;
    //     console.log("Logo URL changed to" + newLogo);
    // }
}
