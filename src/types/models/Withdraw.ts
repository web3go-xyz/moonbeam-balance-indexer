// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class Withdraw implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockNumber?: bigint;

    public accountId: string;

    public aid: bigint;

    public balanceChange?: bigint;

    public timestamp?: Date;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Withdraw entity without an ID");
        await store.set('Withdraw', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Withdraw entity without an ID");
        await store.remove('Withdraw', id.toString());
    }

    static async get(id:string): Promise<Withdraw | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Withdraw entity without an ID");
        const record = await store.get('Withdraw', id.toString());
        if (record){
            return Withdraw.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<Withdraw, FunctionPropertyNames<Withdraw>>> & Entity): Withdraw {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Withdraw(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
