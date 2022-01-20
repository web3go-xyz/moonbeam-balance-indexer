// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




export class BalanceSet implements Entity {

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
        assert(id !== null, "Cannot save BalanceSet entity without an ID");
        await store.set('BalanceSet', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove BalanceSet entity without an ID");
        await store.remove('BalanceSet', id.toString());
    }

    static async get(id:string): Promise<BalanceSet | undefined>{
        assert((id !== null && id !== undefined), "Cannot get BalanceSet entity without an ID");
        const record = await store.get('BalanceSet', id.toString());
        if (record){
            return BalanceSet.create(record);
        }else{
            return;
        }
    }



    static create(record: Partial<Omit<BalanceSet, FunctionPropertyNames<BalanceSet>>> & Entity): BalanceSet {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new BalanceSet(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
